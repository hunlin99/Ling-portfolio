
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

  // Hover to stop scrolling
  $('.scroll-content li').hover(function () {
    clearTimeout(startInterval);
  }, function () {
    startInterval = setInterval(vscroll, 3000);
  });


  // Select the loader container and video element
const loader = document.querySelector('.loader-container');
const video = document.getElementById('video');

// Wait for the video to be ready to play (canplaythrough event)
video.addEventListener('canplaythrough', function () {
    // Add a class to hide the loader with a smooth transition
    loader.classList.add('hide-loader');

    // Remove the loader after the fade-out transition is complete
    loader.addEventListener('transitionend', function () {
        loader.remove(); // Remove the loader element from the DOM
    });
});