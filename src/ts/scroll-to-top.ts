// Scroll to top button functionality
export function initScrollToTop(): void {
  const scrollButton = document.querySelector<HTMLElement>('.scroll-to-top');
  
  if (!scrollButton) return;

  const btn: HTMLElement = scrollButton;
  
  // Show/hide button based on scroll position
  function toggleButton() {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
  
  // Scroll to top on click
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Listen to scroll events
  window.addEventListener('scroll', toggleButton, { passive: true });
  
  // Initial check
  toggleButton();
}
