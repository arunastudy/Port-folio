// Full projects data with all projects
import { getCurrentLang } from './language';

interface Project {
  title: string;
  description: { en: string; ru: string };
  url: string;
  tags: { en: string[]; ru: string[] };
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: 'Balamai',
    description: {
      en: 'Balamai — AI-platform for creating personalized children\'s fairy tales. Choose a template, customize characters and plot, turning an ordinary story into a unique product.',
      ru: 'Balamai — AI-платформа для создания персонализированных детских сказок. Выбирайте шаблон, настраивайте персонажей и сюжет, превращая обычную историю в уникальный продукт.'
    },
    url: 'https://balamai.store',
    tags: {
      en: ['React', 'TypeScript', 'AI', 'OpenAI', 'In Development'],
      ru: ['React', 'TypeScript', 'ИИ', 'OpenAI', 'В разработке']
    },
    featured: true
  },
  {
    title: 'Платформа Окурмэн',
    description: {
      en: 'Microservices platform for comprehensive educational management. Single system to manage courses, students, teachers, parents, revenue, expenses, and analytics.',
      ru: 'Микросервисная платформа для комплексного управления образованием. Единая система для управления курсами, студентами, преподавателями, родителями, доходами и расходами.'
    },
    url: 'https://okurmen.ru/',
    tags: {
      en: ['React', 'Redux', 'PostgreSQL', 'Microservices', 'REST API'],
      ru: ['React', 'Redux', 'PostgreSQL', 'Микросервисы', 'REST API']
    },
    featured: true
  },
  {
    title: 'Кристалл',
    description: {
      en: 'Kristall — premium platform for ordering exquisite desserts. Elegant design, intuitive interface, and fast service make choosing sweets simple and inspiring.',
      ru: 'Кристалл — премиальная платформа для заказа изысканных десертов. Элегантный дизайн, удобный интерфейс и быстрый сервис делают выбор сладостей простым и вдохновляющим.'
    },
    url: 'https://cristall-phi.vercel.app/',
    tags: {
      en: ['React', 'JavaScript', 'E-commerce', 'Figma'],
      ru: ['React', 'JavaScript', 'Интернет-магазин', 'Figma']
    }
  },
  {
    title: 'Okurmen LMS',
    description: {
      en: 'Learning Management System for online education. Full-featured platform for course management, student tracking, and educational content delivery.',
      ru: 'Система управления обучением для онлайн-образования. Полнофункциональная платформа для управления курсами, отслеживания студентов и предоставления образовательного контента.'
    },
    url: 'https://okurmen-lms.netlify.app/',
    tags: {
      en: ['React', 'TypeScript', 'LMS', 'Education'],
      ru: ['React', 'TypeScript', 'СУО', 'Образование']
    },
    featured: true
  },
  {
    title: '3D Market',
    description: {
      en: '3D Market — innovative online store for furniture and home goods with interactive 3D visualization. Volumetric format makes interior selection clear and convenient.',
      ru: '3D Market — инновационный онлайн-магазин мебели и товаров для дома с интерактивной 3D-визуализацией. Объемный формат делает выбор интерьера наглядным и удобным.'
    },
    url: 'https://3-d-market-black.vercel.app/',
    tags: {
      en: ['React', 'JavaScript', 'CSS3', 'Vercel'],
      ru: ['React', 'JavaScript', 'CSS3', 'Vercel']
    }
  },
  {
    title: 'AnimalPedia',
    description: {
      en: 'Educational platform about animals. Read interesting facts and news about animals, take quizzes and complete quests. All animals in one platform.',
      ru: 'Образовательная платформа о животных. Читайте интересные факты и новости о животных, проходите тесты и квесты. Все животные на одной платформе.'
    },
    url: 'https://animall-pedia-ympb.vercel.app/',
    tags: {
      en: ['React', 'API', 'Education', 'CRUD'],
      ru: ['React', 'API', 'Образование', 'CRUD']
    }
  },
  {
    title: 'Pulsar',
    description: {
      en: 'Pulsar — professional audio-visual and LED technologies. Screens, TVs, monitors, laptops, and multimedia equipment for business and everyday tasks.',
      ru: 'Pulsar — профессиональные аудио-визуальные и LED-технологии. Экраны, телевизоры, мониторы, ноутбуки и мультимедийное оборудование для бизнеса и повседневных задач.'
    },
    url: 'https://pulsar-pro-plus.vercel.app/',
    tags: {
      en: ['React', 'Redux', 'E-commerce', 'REST API'],
      ru: ['React', 'Redux', 'Интернет-магазин', 'REST API']
    }
  },
  {
    title: 'Платформа для теста',
    description: {
      en: 'Examination platform for students. Comprehensive testing system with automated grading, analytics, and performance tracking.',
      ru: 'Экзаменационная платформа для студентов. Комплексная система тестирования с автоматической оценкой, аналитикой и отслеживанием успеваемости.'
    },
    url: 'https://test-okurmen.vercel.app/',
    tags: {
      en: ['React', 'Testing', 'Analytics', 'Education'],
      ru: ['React', 'Тестирование', 'Аналитика', 'Образование']
    }
  },
  {
    title: 'Пройти экзамен',
    description: {
      en: 'Exam preparation platform for students. Practice tests, study materials, and progress tracking for exam success.',
      ru: 'Платформа подготовки к экзаменам для студентов. Практические тесты, учебные материалы и отслеживание прогресса.'
    },
    url: 'https://okurmen-test.vercel.app/',
    tags: {
      en: ['React', 'Education', 'Testing'],
      ru: ['React', 'Образование', 'Тестирование']
    }
  },
  {
    title: 'Orion Hackathon',
    description: {
      en: 'Orion — an educational and career navigator for students in Kyrgyzstan. Helps find your calling, choose a profession, and build a path to a successful future.',
      ru: 'Orion — навигатор в мире образования и карьеры для школьников Кыргызстана. Помогаем найти призвание, выбрать профессию и построить путь к успешному будущему.'
    },
    url: 'https://orion-hackaton.vercel.app/',
    tags: {
      en: ['React', 'JavaScript', 'CSS', 'Vercel'],
      ru: ['React', 'JavaScript', 'CSS', 'Vercel']
    }
  },
  {
    title: 'Starbucks',
    description: {
      en: 'Starbucks — international coffeehouse with quality coffee, drinks, and desserts. Cozy atmosphere for work and meetings, where every cup is a daily ritual and inspiration.',
      ru: 'Starbucks — международная кофейня с качественным кофе, напитками и десертами. Уютная атмосфера для работы и встреч, где каждая чашка — это ежедневный ритуал и вдохновение.'
    },
    url: 'https://star-bucks1.vercel.app/',
    tags: {
      en: ['React', 'CSS3', 'Design'],
      ru: ['React', 'CSS3', 'Дизайн']
    }
  },
  {
    title: 'Frontend',
    description: {
      en: 'Frontend testing platform. Take tests on HTML, CSS, JavaScript, and React. Perfect for interview preparation and skill assessment.',
      ru: 'Платформа для тестирования фронтенд-навыков. Проходите тесты по HTML, CSS, JavaScript и React. Идеально для подготовки к собеседованиям.'
    },
    url: 'https://front-zone.vercel.app/',
    tags: {
      en: ['React', 'Testing', 'Education', 'Interview Prep'],
      ru: ['React', 'Тестирование', 'Образование', 'Подготовка к собеседованиям']
    }
  }
];

function truncateDescription(text: string): string {
  // Разбиваем на предложения
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  let result = '';
  const maxLines = 4;
  const charsPerLine = 50; // Примерно 50 символов на строку
  
  for (const sentence of sentences) {
    const testText = result + sentence;
    const estimatedLines = Math.ceil(testText.length / charsPerLine);
    
    if (estimatedLines > maxLines) {
      // Обрезаем и добавляем ...
      const maxChars = maxLines * charsPerLine;
      const remainingChars = maxChars - result.length;
      
      if (remainingChars > 20) {
        const truncated = sentence.trim().substring(0, remainingChars);
        const lastSpace = truncated.lastIndexOf(' ');
        result += truncated.substring(0, lastSpace > 0 ? lastSpace : truncated.length) + '...';
      } else {
        result = result.trim() + '...';
      }
      break;
    }
    result += sentence;
  }
  
  return result || text;
}

export function renderProjects(): void {
  const container = document.getElementById('projectsGrid');
  if (!container) return;
  
  const lang = getCurrentLang();
  
  container.innerHTML = projectsData.map(project => {
    const displayTags = project.tags[lang as keyof typeof project.tags];
    const description = project.description[lang as keyof typeof project.description];
    const truncatedDesc = truncateDescription(description);
    
    // Дублируем теги для бесконечной карусели
    const tagsHTML = displayTags.map(tag => `<span class="tag">${tag}</span>`).join('');
    const duplicatedTags = tagsHTML + tagsHTML;
    
    return `
    <div class="project-card animate-on-scroll ${project.featured ? 'featured' : ''}">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${truncatedDesc}</p>
      <div class="project-footer">
        <div class="project-tech-carousel">
          <div class="tech-track">
            ${duplicatedTags}
          </div>
        </div>
        <a href="${project.url}" target="_blank" rel="noopener" class="project-link-icon" aria-label="${lang === 'en' ? 'View project' : 'Посмотреть проект'}">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  `}).join('');
}
