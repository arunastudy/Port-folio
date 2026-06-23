// Mobile menu functionality
export function initMobileMenu(): void {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  // Toggle menu
  mobileMenuToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenuToggle.classList.toggle('active');
    navLinks?.classList.toggle('active');
    body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking on a link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (navLinks?.classList.contains('active') && 
        !navLinks.contains(target) && 
        !mobileMenuToggle?.contains(target)) {
      mobileMenuToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks?.classList.contains('active')) {
      mobileMenuToggle?.classList.remove('active');
      navLinks?.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });
}
