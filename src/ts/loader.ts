// Page loader functionality
export function initLoader(): void {
  const loader = document.querySelector('.page-loader');
  
  if (!loader) return;
  
  // Hide loader when page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      
      // Remove from DOM after animation
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 500); // Small delay for better UX
  });
  
  // Fallback: hide after 3 seconds max
  setTimeout(() => {
    if (loader && !loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }
  }, 3000);
}
