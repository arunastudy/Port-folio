// Work experience data and rendering
import { getCurrentLang } from './language';

interface Experience {
  period: string;
  periodRu?: string;
  role: { en: string; ru: string };
  company: { en: string; ru: string };
  description: { en: string; ru: string };
}

const experienceData: Experience[] = [
  {
    period: '2024 - Present',
    periodRu: '2024 - Настоящее время',
    role: {
      en: 'Frontend Development Instructor & Deputy Head / Academic Coordinator',
      ru: 'Преподаватель фронтенд-разработки и заместитель директора / академический координатор'
    },
    company: {
      en: 'OKURMEN IT, Bishkek',
      ru: 'OKURMEN IT, Бишкек'
    },
    description: {
      en: 'Led frontend development courses teaching React, TypeScript, and Redux. Coordinated academic programs, mentored instructors, and managed curriculum development for IT education.',
      ru: 'Вела курсы по фронтенд-разработке с обучением React, TypeScript и Redux. Координировала академические программы, наставляла преподавателей и управляла разработкой учебных планов для IT-образования.'
    }
  },
  {
    period: '2025 - Present',
    periodRu: '2025 - Настоящее время',
    role: {
      en: 'Freelance Frontend Developer (Additional)',
      ru: 'Фриланс Frontend-разработчик (дополнительно)'
    },
    company: {
      en: 'Freelance',
      ru: 'Фриланс'
    },
    description: {
      en: 'Developing modern web applications and commercial projects using React, TypeScript, Redux. Working on custom orders and building various web solutions for clients while maintaining primary position at OKURMEN IT.',
      ru: 'Разработка современных веб-приложений и коммерческих проектов с использованием React, TypeScript, Redux. Работа над заказами и создание различных веб-решений для клиентов, совмещая с основной работой в OKURMEN IT.'
    }
  },
  {
    period: '2024 - 2025',
    role: {
      en: 'Computer Programming Instructor',
      ru: 'Преподаватель компьютерного программирования'
    },
    company: {
      en: 'American European School, Bishkek',
      ru: 'Американская Европейская Школа, Бишкек'
    },
    description: {
      en: 'Taught computer programming fundamentals and web development to school students. Developed engaging curriculum combining theory with practical projects.',
      ru: 'Преподавала основы компьютерного программирования и веб-разработки школьникам. Разработала увлекательную учебную программу, сочетающую теорию с практическими проектами.'
    }
  },
  {
    period: '2021 - 2022',
    role: {
      en: 'Frontend Development Mentor',
      ru: 'Ментор по фронтенд-разработке'
    },
    company: {
      en: 'IT Academy "ITC Bootcamp", Osh',
      ru: 'IT Академия "ITC Bootcamp", Ош'
    },
    description: {
      en: 'Mentored students in HTML, CSS, JavaScript, React. Conducted code reviews, provided one-on-one guidance, and helped students build real-world projects.',
      ru: 'Наставляла студентов по HTML, CSS, JavaScript, React. Проводила ревью кода, предоставляла индивидуальное руководство и помогала студентам создавать реальные проекты.'
    }
  },
  {
    period: '2021 - 2022',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'NOVA Educational Center, Bishkek',
      ru: 'Образовательный центр NOVA, Бишкек'
    },
    description: {
      en: 'Provided advanced mathematics instruction focusing on problem-solving strategies and Olympiad preparation.',
      ru: 'Проводила углубленное обучение математике с акцентом на стратегии решения задач и подготовку к олимпиадам.'
    }
  },
  {
    period: '2021 - 2022',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'Askar Salymbekov Business School, Bishkek',
      ru: 'Бизнес-школа Аскара Салымбекова, Бишкек'
    },
    description: {
      en: 'Taught mathematics courses with business applications, helping students develop analytical and quantitative skills.',
      ru: 'Преподавала курсы математики с бизнес-приложениями, помогая студентам развивать аналитические и количественные навыки.'
    }
  },
  {
    period: '2020 - 2021',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'Analytical Educational Center "AOC Record Osh"',
      ru: 'Аналитический образовательный центр "AOC Record Ош"'
    },
    description: {
      en: 'Specialized in analytical thinking and advanced mathematics. Prepared students for national competitions and entrance exams.',
      ru: 'Специализировалась на аналитическом мышлении и продвинутой математике. Готовила студентов к национальным конкурсам и вступительным экзаменам.'
    }
  },
  {
    period: '2020 - 2021',
    role: {
      en: 'Mathematics Teacher / Speed Reading Teacher / English Teacher / SMM Specialist',
      ru: 'Преподаватель математики / Преподаватель скорочтения / Преподаватель английского / SMM-специалист'
    },
    company: {
      en: 'LEADER ASIA Training Center',
      ru: 'Учебный центр LEADER ASIA'
    },
    description: {
      en: 'Multi-role position teaching mathematics, speed reading, and English to children. Also managed social media marketing, creating engaging educational content and growing online presence.',
      ru: 'Многопрофильная позиция: преподавание математики, скорочтения и английского языка детям. Также управляла маркетингом в социальных сетях, создавая увлекательный образовательный контент.'
    }
  },
  {
    period: '2019 - 2022',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'SECOM Educational Center, Bishkek',
      ru: 'Образовательный центр SECOM, Бишкек'
    },
    description: {
      en: 'Taught mathematics to students preparing for entrance exams and Olympiads. Developed comprehensive study materials and achieved high student success rates.',
      ru: 'Преподавала математику студентам, готовящимся к вступительным экзаменам и олимпиадам. Разработала комплексные учебные материалы и достигла высоких показателей успеха студентов.'
    }
  },
  {
    period: '2019 - 2020',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'Altyn-Nur Private School',
      ru: 'Частная школа Алтын-Нур'
    },
    description: {
      en: 'Taught mathematics at private school, developing personalized learning approaches for students with diverse learning needs.',
      ru: 'Преподавала математику в частной школе, разрабатывая персонализированные подходы к обучению для студентов с различными потребностями.'
    }
  },
  {
    period: '2019 - 2020',
    role: {
      en: 'Coordinator',
      ru: 'Координатор'
    },
    company: {
      en: 'SECOM Educational Organization, Osh Branch',
      ru: 'Образовательная организация SECOM, филиал в Оше'
    },
    description: {
      en: 'Coordinated educational programs, managed student enrollment, organized events, and ensured smooth operation of the Osh branch.',
      ru: 'Координировала образовательные программы, управляла набором студентов, организовывала мероприятия и обеспечивала бесперебойную работу филиала в Оше.'
    }
  }
];

export function renderExperience(): void {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;
  
  const lang = getCurrentLang();
  
  container.innerHTML = experienceData.map((exp, index) => {
    const displayPeriod = lang === 'ru' && exp.periodRu ? exp.periodRu : exp.period;
    return `
    <div class="experience-item animate-on-scroll" style="animation-delay: ${index * 0.1}s">
      <div class="exp-period">${displayPeriod}</div>
      <div class="exp-content">
        <h3 class="exp-role">${exp.role[lang as keyof typeof exp.role]}</h3>
        <h4 class="exp-company">${exp.company[lang as keyof typeof exp.company]}</h4>
        <p class="exp-description">${exp.description[lang as keyof typeof exp.description]}</p>
      </div>
    </div>
  `}).join('');
}
