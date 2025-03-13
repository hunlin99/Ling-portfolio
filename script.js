//loading animation
window.addEventListener('load', function () {
  // Select the loader container
  const loader = document.querySelector('.loader-container');

  // Add a delay (optional) to simulate loading time or allow for a smoother transition
  setTimeout(() => {
      // Add a class to hide the loader with a smooth transition
      loader.classList.add('hide-loader');

      // Remove the loader after the fade-out transition is complete
      loader.addEventListener('transitionend', function () {
          loader.remove(); // Remove the loader element from the DOM
      });
  }, 1000); // Optional delay before hiding the loader (adjust as needed)
});

//menu btn
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  // Show the mobile menu when the menu button is clicked
  menuBtn.addEventListener("click", function () {
      mobileMenu.style.display = "flex"; // Show the menu
  });

  // Hide the mobile menu when the close button is clicked
  closeBtn.addEventListener("click", function () {
      mobileMenu.style.display = "none"; // Hide the menu
  });
});

// Scroll content animation
function vscroll() {
  var frtEle = $('.scroll-content li:first');
  frtEle.animate({ 'margin-top': -$('.scroll-content li').height() }, 500, function () {
    frtEle.css('margin-top', 0);
    $('.scroll-content').append(frtEle);
  });
}
var startInterval = setInterval(vscroll, 3000);


