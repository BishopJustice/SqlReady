        // todo
        // - figure out how to have functin copy new line characters
        // - determine maximum number of lines
        // - refine function to take more lines
        // - reformat for easier readability
        // - add copyright
        // - push live

        // This function maxes up at ~30k lines
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }

        function display_sql(joined, len) {
            document.getElementById("instructions").innerHTML = "The text below is now copied to your clipboard\
                                                                </br> There are " + len + " items."
            document.getElementById("result").innerHTML = joined
            copyToClipboard("#result")
        }


        function sqlify() {
            var seperator = "\n";
            var input = document.getElementById('input').value;
            var splat = input.split(seperator);
            splat = splat.filter(Boolean);
            splat[0] = "in ('" + splat[0].trim() + "', ";
            splat[splat.length - 1] = "'" + splat[splat.length - 1] + "')";
            for (each = 1; each < splat.length - 1; each++) {
                splat[each] = "'" + splat[each].trim() + "', ";
            }
            // Need to figure out how to copy line breaks to clipboard 
            for (each = 0; each < splat.length; each++) {
                if (each % 5 === 0) {
                    splat.splice(each, 0, "</br>")
                }
            }
            var joined = splat.join("")
            display_sql(joined, splat.length - 1)

        }

        function eraseText() {
            document.getElementById("input").value = "";
            document.getElementById("input").focus();
        }


        