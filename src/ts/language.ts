// Language switching functionality
let currentLang = 'ru';
let updateCallbacks: Array<() => void> = [];

export function initLanguage(): void {
  const langOptions = document.querySelectorAll('.lang-option');
  
  // Load saved language
  currentLang = localStorage.getItem('language') || 'ru';
  updateLanguage(currentLang);
  
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      if (lang) {
        currentLang = lang;
        updateLanguage(lang);
        localStorage.setItem('language', lang);
        
        // Trigger content re-render
        updateCallbacks.forEach(callback => callback());
      }
    });
  });
}

function updateLanguage(lang: string): void {
  // Update active language option
  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(option => {
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
  
  // Update all translatable elements
  const elements = document.querySelectorAll('[data-en][data-ru]');
  elements.forEach(element => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      // Use innerHTML if the value contains HTML tags (e.g. <br>), otherwise textContent
      if (text.includes('<')) {
        element.innerHTML = text;
      } else {
        element.textContent = text;
      }
    }
  });
}

export function getCurrentLang(): string {
  return currentLang;
}

export function onLanguageChange(callback: () => void): void {
  updateCallbacks.push(callback);
}
