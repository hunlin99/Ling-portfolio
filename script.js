// Get the current page
const currentPage = window.location.pathname.split("/").pop();

// Select all the <a>
const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); 
    }
});

//cover content scroll
function vscroll() {
    var frtEle = $('.scroll-content li:first');
    frtEle.animate({ 'margin-top': -$('.scroll-content li').height() }, 500, function () {
        frtEle.css('margin-top', 0);
        $('.scroll-content').append(frtEle);
    })
}
var startInterval = setInterval(vscroll, 3000);

// hover to stop
$('.scroll-content li').hover(function () {
    clearTimeout(startInterval);
}, function () {
    startInterval = setInterval(vscroll, 3000);
});