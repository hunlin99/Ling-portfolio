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

//cover content scroll
var startInterval = setInterval(vscroll, 3000);

// hover to stop
$('.scroll-content li').hover(function () {
    clearTimeout(startInterval);
}, function () {
    startInterval = setInterval(vscroll, 3000);
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

