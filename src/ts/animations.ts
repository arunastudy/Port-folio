// Scroll animations
export function initAnimations(): void {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-up, .animate-fade-left');
  animatedElements.forEach(el => observer.observe(el));
  
  // Header scroll effect
  const header = document.querySelector('.header') as HTMLElement;
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    if (currentScroll > lastScroll && currentScroll > 300) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
}
