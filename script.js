// Get the current page
const currentPage = window.location.pathname.split("/").pop();

// Select all the <a>
const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); 
    }
});