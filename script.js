// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Function to handle the fade-in on scroll
function fadeInOnScroll() {
  const fadeInElements = document.querySelectorAll('.fade-in-box');

  fadeInElements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add('fade-in');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', fadeInOnScroll);

// Run once on page load in case some boxes are already in view
fadeInOnScroll();
