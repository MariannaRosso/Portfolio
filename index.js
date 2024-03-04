/* -----------------------------------------
   Have focus outline only for keyboard users 
 ----------------------------------------- */

const handleFirstTab = (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
    }
};

const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

const alterStyles = (rendered) => {
    backToTopButton.style.visibility = rendered ? "visible" : "hidden";
    backToTopButton.style.opacity = rendered ? 1 : 0;
    backToTopButton.style.transform = rendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
        isBackToTopRendered = true;
    } else {
        isBackToTopRendered = false;
    }
    alterStyles(isBackToTopRendered);
});

/* Image Modal Section */
var modal = document.getElementById("myModal");
var images = document.querySelectorAll(".visualization img"); // Ensure targeting <img> within .visualization
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through all images if you have more than one
images.forEach((image) => {
    image.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Assuming alt text is meaningful
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
