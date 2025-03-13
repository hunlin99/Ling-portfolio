//personas blocks
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(Flip);
  
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("click", () => {
            const state = Flip.getState(square);
  
            // Check if it's already full-screen
            const isFullScreen = square.classList.contains("full-screen");
  
            // Remove full-screen class from all squares
            document.querySelectorAll(".square").forEach(sq => {
                sq.classList.remove("full-screen");
            });
  
            if (!isFullScreen) {
                square.classList.add("full-screen");
  
                // Change background image to full-screen version
                if (square.classList.contains("square-1")) {
                    square.style.backgroundImage = "url('./persona/full-screen-1.jpg')";
                } else if (square.classList.contains("square-2")) {
                    square.style.backgroundImage = "url('./persona/full-screen-2.jpg')";
                } else if (square.classList.contains("square-3")) {
                    square.style.backgroundImage = "url('./persona/full-screen-3.jpg')";
                }
            } else {
                // Revert to thumbnail image
                if (square.classList.contains("square-1")) {
                    square.style.backgroundImage = "url('./persona/thumbnail-1.png')";
                } else if (square.classList.contains("square-2")) {
                    square.style.backgroundImage = "url('./persona/thumbnail-2.png')";
                } else if (square.classList.contains("square-3")) {
                    square.style.backgroundImage = "url('./persona/thumbnail-3.png')";
                }
            }
  
            Flip.from(state);
        });
    });
  });