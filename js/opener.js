// http://stackoverflow.com/questions/7064998/how-to-make-a-link-open-multiple-pages-when-clicked
// http://www.javascript-coder.com/window-popup/javascript-window-open.phtml /


function openall() {
    var seperator = "\n";
    var input = document.getElementById('input').value;
    var splat = input.split(seperator);
    splat = splat.filter(Boolean);
    var post = document.getElementById('posttext').value
    var pre = document.getElementById('pretext').value
    for (each in splat) {
        splat[each] = pre + splat[each] + post;
        if (splat[each].substring(0, 8) != "https://" && splat[each].substring(0, 7) != "http://") {
            splat[each] = "http://" + splat[each];
        }  
        console.log(splat[each])
        window.open(splat[each]);
    }
}

function eraseText() {
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
}