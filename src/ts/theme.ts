// Theme switching functionality
export function initTheme(): void {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  
  themeToggle?.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}
