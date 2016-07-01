// http://stackoverflow.com/questions/7064998/how-to-make-a-link-open-multiple-pages-when-clicked
// http://www.javascript-coder.com/window-popup/javascript-window-open.phtml /


// function openall(kwargs)
// $('a.yourlink').click(function(e) {
//     e.preventDefault();
//     window.open('http://yoururl1.com');
//     window.open('http://yoururl2.com');
// });

var popupBlockerChecker = {
    check: function(popup_window) {
        var _scope = this;
        if (popup_window) {
            if (/chrome/.test(navigator.userAgent.toLowerCase())) {
                setTimeout(function() {
                    _scope._is_popup_blocked(_scope, popup_window);
                }, 200);
            } else {
                popup_window.onload = function() {
                    _scope._is_popup_blocked(_scope, popup_window);
                };
            }
        } else {
            _scope._displayError();
        }
    },
    _is_popup_blocked: function(scope, popup_window) {
        if ((popup_window.innerHeight > 0) == false) {
            scope._displayError();
        }
    },
    _displayError: function() {
        alert("Popup Blocker is enabled! Please add this site to your exception list in order to use this tool.");
    }
};

// function popcheck(){
//     var popup = window.open("http://www.google.ca", '_blank');
//     popupBlockerChecker.check(popup);
// }



function openall() {
    var seperator = "\n";
    var input = document.getElementById('input').value;
    var splat = input.split(seperator);
    splat = splat.filter(Boolean);
    // popup = window.open(splat[0]);
    // popupBlockerChecker.check(popup);
    // splat.shift()
    // console.log(splat)
    var post = document.getElementById('posttext').value
    for (each in splat) {
        if (each.substring(0,6) != "http://"){
            splat[each] = "http://" + splat[each];
        }
        console.log(splat[each])
        splat[each] = splat[each] + post;
        // window.open(splat[each]);
        // console.log(splat[each])
    }
}


function eraseText() {
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
}