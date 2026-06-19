// Achievements data and rendering
import { getCurrentLang } from './language';

interface Achievement {
  year: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  icon: string;
}

const achievementsData: Achievement[] = [
  {
    year: '2021-2024',
    title: {
      en: 'Published Author - 2 Educational Books',
      ru: 'Автор - 2 образовательные книги'
    },
    description: {
      en: 'Author of "Mathematics from Scratch" (2021) and "From Pawn to King!" (2024) - bestselling educational books in Kyrgyzstan',
      ru: 'Автор книг "Математика с нуля" (2021) и "От пешки до Короля!" (2024) - бестселлеры в Кыргызстане'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M12 6v7l2-2 2 2V6"/></svg>'
  },
  {
    year: '2023',
    title: {
      en: 'Interuniversity Math Olympiad - Winner',
      ru: 'Межвузовская олимпиада - победитель'
    },
    description: {
      en: 'Won the Interuniversity Mathematics Olympiad among students of the Kyrgyz Republic',
      ru: 'Победитель межвузовской математической олимпиады среди студентов Кыргызской Республики'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="9" r="7"/><path d="M12 2L9.5 8H3l5 4-2 6.5L12 15l6 3.5-2-6.5 5-4h-6.5z"/></svg>'
  },
  {
    year: '2022',
    title: {
      en: 'Kyrgyz Republican Math Olympiad - Winner',
      ru: 'Республиканская математическая олимпиада - победитель'
    },
    description: {
      en: 'Won the republican mathematics olympiad among university students',
      ru: 'Победитель республиканской математической олимпиады среди студентов вузов'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>'
  },
  {
    year: '2022',
    title: {
      en: 'Osh City Math Olympiad - 1st Place',
      ru: 'Городская олимпиада по математике - 1 место'
    },
    description: {
      en: 'First place at the Osh City Student Mathematics Olympiad',
      ru: 'Первое место на городской студенческой олимпиаде по математике в г. Ош'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9M14 17v-4M10 17v-7M6 17v-3"/></svg>'
  },
  {
    year: '2021',
    title: {
      en: 'Presidential Scholarship',
      ru: 'Президентская стипендия'
    },
    description: {
      en: 'Awarded by President Sadyr Japarov for outstanding academic, creative and public activities',
      ru: 'Награда от президента Садыра Жапарова за выдающиеся академические, творческие и общественные достижения'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M12 14L8 22h8l-4-8z"/><path d="M8.5 14L6 9l2 1 2-2 2 2 2-1-2.5 5"/></svg>'
  },
  {
    year: '2021',
    title: {
      en: 'Best Student of the CIS',
      ru: 'Лучший студент СНГ'
    },
    description: {
      en: 'Awarded 2nd degree diploma and CIS Best Student medal for excellence across the Commonwealth',
      ru: 'Награждена дипломом 2-й степени и медалью "Лучший студент СНГ" за достижения в СНГ'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M12 13c-4 0-7 1.5-7 3.5v3h14v-3c0-2-3-3.5-7-3.5z"/><path d="M16 3l1 3 3 .5-2.5 2 .5 3-2-1.5L14 12l.5-3L12 7l3-.5z"/></svg>'
  },
  {
    year: '2021',
    title: {
      en: 'Best Student of Kyrgyzstan',
      ru: 'Лучший студент Кыргызстана'
    },
    description: {
      en: 'Recognized as the top student in Kyrgyzstan for contributions to academics, science, sports and culture',
      ru: 'Признана лучшим студентом Кыргызстана за вклад в науку, спорт и культуру'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  },
  {
    year: '2021',
    title: {
      en: 'All-Russian Mathematics Olympiad - 2nd Place',
      ru: 'Всероссийская математическая олимпиада - 2 место'
    },
    description: {
      en: 'International Mathematical Olympiad "Mathematical Olympus" (Russia)',
      ru: 'Международная математическая олимпиада "Математический Олимп" (Россия)'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/><circle cx="16" cy="16" r="2"/></svg>'
  },
  {
    year: '2021',
    title: {
      en: 'Musa Ryskulbekov Olympiad - 1st Place',
      ru: 'Олимпиада им. Мусы Рыскулбекова - 1 место'
    },
    description: {
      en: 'Republican Interuniversity Olympiad in Mathematics',
      ru: 'Республиканская межвузовская олимпиада по математике'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>'
  },
  {
    year: '2021',
    title: {
      en: 'TED Talk - Best Speaker Diploma',
      ru: 'TED Talk - диплом лучшего спикера'
    },
    description: {
      en: 'Received diploma for the most outstanding, informative and inspiring presentation',
      ru: 'Получила диплом за самую выдающуюся, информативную и вдохновляющую презентацию'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"/></svg>'
  },
  {
    year: '2018',
    title: {
      en: 'Osh Regional Math Olympiad - 1st Place',
      ru: 'Областная олимпиада по математике - 1 место'
    },
    description: {
      en: 'First place at the Osh Oblast Mathematics Olympiad; 4th place at the Republican Olympiad',
      ru: 'Первое место на областной олимпиаде по математике; 4 место на республиканской олимпиаде'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'
  },
  {
    year: '2017',
    title: {
      en: 'Volleyball - Best Player Award',
      ru: 'Волейбол - награда лучшего игрока'
    },
    description: {
      en: 'Won 1st place at the Osh City volleyball competition and awarded "Best Player" title',
      ru: 'Победа в городском турнире по волейболу и звание "Лучший игрок"'
    },
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20M2 12a10 10 0 0 0 20 0"/><path d="M8 12a10 10 0 0 1 8 0M8 12a10 10 0 0 0 8 0"/></svg>'
  }
];

export function renderAchievements(): void {
  const container = document.getElementById('achievementsGrid');
  if (!container) return;
  
  const lang = getCurrentLang();
  
  container.innerHTML = achievementsData.map(ach => `
    <div class="achievement-card animate-on-scroll">
      <div class="ach-header">
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-year">${ach.year}</div>
      </div>
      <h3 class="ach-title">${ach.title[lang as keyof typeof ach.title]}</h3>
      <p class="ach-description">${ach.description[lang as keyof typeof ach.description]}</p>
    </div>
  `).join('');
  
  // Remove existing "View All" button if it exists
  const existingBtn = container.parentElement?.querySelector('.view-all-container');
  if (existingBtn) {
    existingBtn.remove();
  }
  
  // Add "View All" button after the grid
  const viewAllBtn = document.createElement('div');
  viewAllBtn.className = 'view-all-container';
  viewAllBtn.innerHTML = `
    <a href="#achievements" class="view-all-btn">
      <span>${lang === 'en' ? 'View All' : 'Посмотреть все'}</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  `;
  container.parentElement?.appendChild(viewAllBtn);
}
