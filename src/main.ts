// Main TypeScript file
import { initTheme } from './ts/theme';
import { initLanguage, onLanguageChange } from './ts/language';
import { initAnimations } from './ts/animations';
import { renderEducation } from './ts/education';
import { renderAchievements } from './ts/achievements';
import { renderBooks } from './ts/books';
import { renderProjects } from './ts/projects';
import { renderExperience } from './ts/experience';
import { initMobileMenu } from './ts/mobile-menu';
import { initSmoothScroll } from './ts/smooth-scroll';
import { initLoader } from './ts/loader';
import { initScrollProgress } from './ts/scroll-progress';
import { initScrollToTop } from './ts/scroll-to-top';

// Function to render all content
function renderAllContent(): void {
  renderEducation();
  renderAchievements();
  renderBooks();
  renderProjects();
  renderExperience();
  
  // Re-initialize scroll animations for new elements
  setTimeout(() => {
    initAnimations();
  }, 100);
}

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  console.log('✨ Portfolio initialized');
  
  // Initialize loader (should be first)
  initLoader();
  
  // Initialize core features
  initTheme();
  initLanguage();
  initAnimations();
  initMobileMenu();
  initSmoothScroll();
  initScrollProgress();
  initScrollToTop();
  
  // Render initial content
  renderAllContent();
  
  // Re-render content when language changes
  onLanguageChange(renderAllContent);
});
