// Scroll progress bar functionality
export function initScrollProgress(): void {
  const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
  
  if (!progressBar) return;
  
  function updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Calculate scroll percentage
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    // Update progress bar width
    progressBar.style.width = `${Math.min(scrollPercentage, 100)}%`;
  }
  
  // Update on scroll
  window.addEventListener('scroll', updateProgress, { passive: true });
  
  // Initial update
  updateProgress();
}
