    function sqlify() {
        var seperator = "\n";
        var input = document.getElementById('input').value;
        var splat = input.split(seperator);
        splat = splat.filter(Boolean);
        for (each in splat) {
            splat[each] = " '" + splat[each].trim() + "'";
            }
        console.log(splat)
        
        var joined = splat.join(",")
        console.log(joined)
        document.getElementById("result").innerHTML = joined
    }