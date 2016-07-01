// http://stackoverflow.com/questions/7064998/how-to-make-a-link-open-multiple-pages-when-clicked
// http://www.javascript-coder.com/window-popup/javascript-window-open.phtml


function openall(kwargs)
$('a.yourlink').click(function(e) {
    e.preventDefault();
    window.open('http://yoururl1.com');
    window.open('http://yoururl2.com');
});