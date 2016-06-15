        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }

        function sqlify() {
            var seperator = "\n";
            var input = document.getElementById('input').value;
            var splat = input.split(seperator);
            splat = splat.filter(Boolean);
            for (each in splat) {
                splat[each] = " '" + splat[each].trim() + "'";
            }
            var joined = splat.join(",")
            document.getElementById("result").innerHTML = joined
            copyToClipboard("#result")
        }


 