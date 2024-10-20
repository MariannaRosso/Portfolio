document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll('.fade-in-box');

  function checkVisibility() {
    fadeInElements.forEach(function (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add('visible');
        element.classList.remove('hidden');
      } else {
        element.classList.remove('visible');
        element.classList.add('hidden');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility(); // Check initially on page load
});