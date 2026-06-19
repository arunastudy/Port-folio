// Education data and rendering
import { getCurrentLang } from './language';

interface Education {
  period: string;
  institution: { en: string; ru: string };
  degree: { en: string; ru: string };
  location: string;
  flag: string;
}

const educationData: Education[] = [
  {
    period: '2024 - 2026',
    institution: {
      en: 'Politecnico di Milano / PoliMi',
      ru: 'Миланский политехнический университет'
    },
    degree: {
      en: 'Master\'s in Computer Science. #1 in Italy: Consistent leader in all technology disciplines. #20 in the World',
      ru: 'Магистратура по компьютерным наукам. В Италии 1-е место: бессменный лидер во всех технологических дисциплинах. В мире 20-е место'
    },
    location: 'Milan, Italy',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>'
  },
  {
    period: '2022 - 2023',
    institution: {
      en: 'Bauman Moscow State Technical University',
      ru: 'Московский государственный технический университет имени Н.Э.Баумана'
    },
    degree: {
      en: 'One of the largest and most prestigious technical universities in Russia',
      ru: 'Один из крупнейших и самых престижных технических вузов России'
    },
    location: 'Moscow, Russia',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'
  },
  {
    period: '2019 - 2023',
    institution: {
      en: 'Kyrgyz State Technical University named after I.Razzakov',
      ru: 'Кыргызский государственный технический университет имени И.Раззакова'
    },
    degree: {
      en: 'Bachelor\'s in Applied Mathematics & Informatics',
      ru: 'Бакалавриат по прикладной математике и информатике'
    },
    location: 'Bishkek, Kyrgyzstan',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>'
  },
  {
    period: 'Dec 2021 - Feb 2022',
    institution: {
      en: 'The Academy of Programming - ITC Bootcamp',
      ru: 'Академия программирования - ITC Bootcamp'
    },
    degree: {
      en: 'Frontend Development Course (Certificate of Completion)',
      ru: 'Курс Frontend разработки (Сертификат о прохождении)'
    },
    location: 'Bishkek, Kyrgyzstan',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    period: '2015 - 2019',
    institution: {
      en: 'Lyceum-Boarding School for Gifted Children №28 named after Urkuya Salieva',
      ru: 'Лицей-интернат для одаренных детей №28 им. Уркуи Салиевой'
    },
    degree: {
      en: 'Secondary Education - Computer Science & Mathematics Profile',
      ru: 'Среднее образование - информатика-математический профиль'
    },
    location: 'Osh, Kyrgyzstan',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  }
];

export function renderEducation(): void {
  const container = document.getElementById('educationGrid');
  if (!container) return;
  
  const lang = getCurrentLang();
  
  container.innerHTML = educationData.map(edu => `
    <div class="education-card animate-on-scroll">
      <div class="edu-header">
        <div class="edu-flag">${edu.flag}</div>
        <div class="edu-period">${edu.period}</div>
      </div>
      <h3 class="edu-institution">${edu.institution[lang as keyof typeof edu.institution]}</h3>
      <p class="edu-degree">${edu.degree[lang as keyof typeof edu.degree]}</p>
      <p class="edu-location">${edu.location}</p>
    </div>
  `).join('');
}
