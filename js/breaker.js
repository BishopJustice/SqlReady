         // todo
         // - figure out how to have copyToClipboard function copy new line characters
         // - Increase line amount that can be auto-copied
         // - Add a select text button for backup


        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }

        function display_sql(joined, len) {
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

        function sqlify() {
            var seperator = "\n";
            var input = document.getElementById('input').value;
            var splat = input.split(seperator);
            splat = splat.filter(Boolean);
            if (splat.length != 1) {
                splat[0] = "in ('" + splat[0].trim() + "', ";
            }
            if (splat.length === 1){
                splat[0] = "'" + splat[0].trim() + "'";
            }
            if (splat.length > 1){
            splat[splat.length - 1] = "'" + splat[splat.length - 1] + "')";
            for (each = 1; each < splat.length - 1; each++) {
                splat[each] = "'" + splat[each].trim() + "', ";
            }}
            // Need to figure out how to copy line breaks to clipboard 
            for (each = 0; each < splat.length; each++) {
                if (each % 9 === 0) {
                    splat.splice(each, 0, "</br>")
                }
            }
            var joined = splat.join("")
            display_sql(joined, splat.length - 1)

        }

        function eraseText() {
            document.getElementById("input").value = "";
            document.getElementById("input").focus();
            document.getElementById("result").innerHTML = "";
            document.getElementById("instructions").innerHTML = ""
        }