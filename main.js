// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add 'visible' class to elements when scrolled into view
function checkScroll() {
  const sections = document.querySelectorAll('.hidden');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

// Check scroll position on page load and scroll
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
