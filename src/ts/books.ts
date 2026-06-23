// Books data and rendering
import { getCurrentLang } from './language';

interface Book {
  number: string;
  date: string;
  dateRu: string;
  title: { en: string; ru: string };
  description: { en: string; ru: string };
  image: string;
  tags: { en: string[]; ru: string[] };
}

const booksData: Book[] = [
  {
    number: '01',
    date: 'November 1, 2021',
    dateRu: '1 ноября 2021',
    title: {
      en: 'Mathematics from Scratch and Preparation for the USE Exam',
      ru: 'Математика с нуля и подготовка к ОРТ'
    },
    description: {
      en: 'A comprehensive guide covering school mathematics from 4th to 11th grade. Contains 1000+ tests combining theory and practice. Topics include chessboard logic, Roman numerals, clock problems, working with diagrams, and Olympiad-level problems.',
      ru: 'Комплексное руководство по школьной математике с 4 по 11 класс. Содержит более 1000 тестов, объединяющих теорию и практику. Включает логику шахматной доски, римские цифры, задачи с часами и олимпиадные задачи.'
    },
    image: '/Математика с нуля.JPG',
    tags: {
      en: ['1000+ Tests', 'Grades 4-11', 'Olympiad Prep', 'USE/ORT'],
      ru: ['1000+ тестов', 'Классы 4-11', 'Подготовка к олимпиадам', 'ОРТ']
    }
  },
  {
    number: '02',
    date: 'September 5, 2024',
    dateRu: '5 сентября 2024',
    title: {
      en: 'From Pawn to King!',
      ru: 'От пешки до Короля!'
    },
    description: {
      en: 'A student guide on education, motivation, self-development, IT, planning, and TOEFL preparation. Covers foundations of education, Golden Certificate tips, 10 math topics with 300 tests, English learning from beginner to TOEFL, IT career paths, and productivity tools.',
      ru: 'Студенческое руководство по образованию, мотивации, саморазвитию, IT, планированию и подготовке к TOEFL. Охватывает основы образования, советы по Золотому сертификату, 10 тем по математике с 300 тестами, изучение английского языка и карьерные пути в IT.'
    },
    image: '/От пешки до Короля.jpg',
    tags: {
      en: ['Self-Development', 'TOEFL', 'IT Careers', '300 Tests', 'Productivity'],
      ru: ['Саморазвитие', 'TOEFL', 'Карьера в IT', '300 тестов', 'Продуктивность']
    }
  }
];

export function renderBooks(): void {
  const container = document.getElementById('booksGrid');
  if (!container) return;
  
  const lang = getCurrentLang();
  
  container.innerHTML = booksData.map(book => {
    const displayDate = lang === 'ru' ? book.dateRu : book.date;
    const displayTags = book.tags[lang as keyof typeof book.tags];
    
    return `
    <div class="book-card animate-on-scroll">
      <div class="book-number">${book.number}</div>
      <div class="book-header">
        <div class="book-image">
          <img src="${book.image}" alt="${book.title[lang as keyof typeof book.title]}" loading="lazy">
        </div>
        <div class="book-info">
          <div class="book-date">${displayDate}</div>
          <h3 class="book-title">${book.title[lang as keyof typeof book.title]}</h3>
        </div>
      </div>
      <div class="book-content">
        <div class="book-date book-date-desktop">${displayDate}</div>
        <h3 class="book-title book-title-desktop">${book.title[lang as keyof typeof book.title]}</h3>
        <p class="book-description">${book.description[lang as keyof typeof book.description]}</p>
        <div class="book-tags">
          ${displayTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `}).join('');
}
