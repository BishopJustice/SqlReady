function cleanit() {
    var seperator = "\n";
    var input = document.getElementById('input').value;
    var splat = input.split(seperator);
    for (each in splat) {
        splat[each] = splat[each].replace(/[^0-9]/g, '');
    }
    var start = document.getElementById('start').value;
    if (start !== null) {
        for (each in splat) {
            splat[each] = start + splat[each]
        }
    }
    var isChecked = document.getElementById('sqlbutton').checked;
    console.log(isChecked)
    splat = splat.filter(Boolean);
    console.log(splat)
    if (isChecked) {
        sqlify(splat)
        var joined = splat.join("")
    }
    
    else{
    var joined = splat.join(", ")
        }
    display(joined, splat.length)
}



function display(joined, len) {
    if (len < 6000) {
        document.getElementById("instructions").innerHTML = "The text below is now copied to your clipboard\
                                                                </br> There are " + len + " items.";
    } else {
        document.getElementById("instructions").innerHTML = "The text below is ready to be copied\
                                                                    </br>There are " + len + " items.";
    }
    document.getElementById("result").innerHTML = joined
    copyToClipboard("#result")
}

    function sqlify(splat) {
    if (splat.length != 1) {
        splat[0] = "in ('" + splat[0] + "', ";
    }
    if (splat.length === 1) {
        splat[0] = "'" + splat[0].trim() + "'";
    }
    if (splat.length > 1) {
        splat[splat.length - 1] = "'" + splat[splat.length - 1] + "')";
        for (each = 1; each < splat.length - 1; each++) {
            splat[each] = "'" + splat[each].trim() + "', ";
        }
    }
    }


    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    function eraseText() {
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }