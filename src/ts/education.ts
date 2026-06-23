// Education data and rendering
import { getCurrentLang } from './language';

interface Education {
  period: string | { en: string; ru: string };
  institution: { en: string; ru: string };
  degree: { en: string; ru: string };
  location: string;
  flag: string;
}

const educationData: Education[] = [
  {
    period: '2024 - 2026',
    institution: {
      en: 'Politecnico di Milano (PoliMi), Italy',
      ru: 'Миланский политехнический университет, Италия'
    },
    degree: {
      en: 'Master\'s degree in Cybersecurity — <strong>received a government grant for a fully funded place with a scholarship.</strong> The university ranks 1st in Italy and 20th in the world among technical universities. Studies were interrupted due to visa complications.',
      ru: 'Магистратура по Кибербезопасности — <strong>получила грант на бюджетное место со стипендией.</strong> PoliMi занимает 1-е место в Италии, 20-е место в мире. Обучение было прервано из-за проблем с визой.'
    },
    location: 'Milan, Italy',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>'
  },
  {
    period: '2022 - 2023',
    institution: {
      en: 'Bauman Moscow State Technical University',
      ru: 'Московский государственный технический университет имени Н.Э. Баумана'
    },
    degree: {
      en: 'One of the largest and most prestigious technical universities in Russia. Training Center "Specialist" at Bauman Moscow State Technical University.<br><span style="color: red;">(4 months of professional development)</span>',
      ru: 'Один из крупнейших и самых престижных технических вузов России. УЦ «Специалист» при МГТУ им. Баумана.<br><span style="color: red;">(Повышение квалификации — 4 месяца)</span>'
    },
    location: 'Moscow, Russia',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'
  },
  {
    period: { en: 'Dec 2021 – Feb 2022', ru: 'Дек 2021 – Фев 2022' },
    institution: {
      en: 'ITC Bootcamp, Educational Center',
      ru: 'ITC Bootcamp, образовательный центр по программированию'
    },
    degree: {
      en: 'Bootcamp course in Frontend Development: HTML, CSS, JavaScript basics. Certificate of Completion (Gold). Upon completing the course, began working as a mentor.<br><span style="color: red;">(Intensive course — 2 months)</span>',
      ru: 'Буткемп-курс по Frontend-разработке: HTML, CSS и основы JavaScript. Обладатель золотого сертификата. После курса стала ментором.<br><span style="color: red;">(Интенсивный курс — 2 месяца)</span>'
    },
    location: 'Bishkek, Kyrgyzstan',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    period: '2019 - 2023',
    institution: {
      en: 'Kyrgyz State Technical University named after I. Razzakov',
      ru: 'Кыргызский государственный технический университет<br>имени И. Раззакова'
    },
    degree: {
      en: '<strong>Faculty:</strong> New Information Technologies. <strong>Department:</strong> Applied Mathematics and Informatics.<br><span style="color: red;">(Bachelor\'s degree — 4 years)</span>',
      ru: '<strong>Факультет:</strong> Новых информационных технологий. <strong>Кафедра:</strong> Прикладной математики и информатики.<br><span style="color: red;">(Бакалавриат — 4 года)</span>'
    },
    location: 'Bishkek, Kyrgyzstan',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>'
  },
  {
    period: '2015 - 2019',
    institution: {
      en: 'Lyceum-Boarding School for Gifted Children №28 named after U.Salieva',
      ru: 'Лицей-интернат для одарённых детей №28 им. Уркуи Салиевой'
    },
    degree: {
      en: '<strong>Profile: Computer Science & Mathematics.</strong> Advanced study of Mathematics and Computer Science. Red diploma with honours, high ORT score — 206.<br><span style="color: red;">(4 years of study)</span>',
      ru: '<strong>Профиль: Информатика и Математика.</strong> Углублённое изучение математики и информатики. Красный аттестат с отличием, высокий балл по ОРТ — 206.<br><span style="color: red;">(Обучение — 4 года)</span>'
    },
    location: 'Osh, Kyrgyzstan',
    flag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
  }
];

export function renderEducation(): void {
  const container = document.getElementById('educationGrid');
  if (!container) return;

  const lang = getCurrentLang();

  container.innerHTML = educationData.map(edu => {
    const period = typeof edu.period === 'string'
      ? edu.period
      : edu.period[lang as 'en' | 'ru'];
    return `
    <div class="education-card animate-on-scroll">
      <div class="edu-header">
        <div class="edu-flag">${edu.flag}</div>
        <div class="edu-period">${period}</div>
      </div>
      <h3 class="edu-institution">${edu.institution[lang as keyof typeof edu.institution]}</h3>
      <p class="edu-degree">${edu.degree[lang as keyof typeof edu.degree]}</p>
      <p class="edu-location">${edu.location}</p>
    </div>
  `;
  }).join('');
}
