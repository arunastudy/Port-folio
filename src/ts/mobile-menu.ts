// Mobile menu functionality
export function initMobileMenu(): void {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  
  mobileMenuToggle?.addEventListener('click', () => {
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
}
