        // todo
        // - figure out how to have functin copy new line characters
        // - determine maximum number of lines
        // - refine function to take more lines
        // - reformat for easier readability
        // - add copyright
        // - push live



        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }

        function display_sql(joined) {
            document.getElementById("instructions").innerHTML = "The below is now copied to your clipboard"
            document.getElementById("result").innerHTML = joined
            console.log(joined)
            fuck = joined.replace(/<\s*\/?br>/ig, "\r\n")
            document.getElementById("hidden").innerHTML = fuck
            copyToClipboard("#hidden")
        }

        function sqlify() {
            var seperator = "\n";
            var input = document.getElementById('input').value;
            var splat = input.split(seperator);
            splat = splat.filter(Boolean);
            for (each = 0; each < splat.length; each++) {
                if (each === 0) {
                    splat[each] = "in ('" + splat[each].trim() + "',";
                } else if (each === splat.length - 1) {
                    splat[each] = "'" + splat[each].trim() + "')";
                } else if (each != splat.length - 1) {
                    splat[each] = "'" + splat[each].trim() + "',";
                }
            }
            for (each = 0; each < splat.length; each++) {
                if (each % 4 === 0) {
                    splat.splice(each, 0, "</br>")
                }
            }
            var joined = splat.join("")
            display_sql(joined)
        }

        

        function eraseText() {
            document.getElementById("input").value = "";
            document.getElementById("input").focus();
        }