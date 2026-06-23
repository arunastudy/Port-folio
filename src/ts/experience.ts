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
    period: '2024 - 2026 - Present',
    periodRu: '2024 - 2026 - Настоящее время',
    role: {
  en: 'Deputy Head of Education & Frontend Development Instructor',
  ru: 'Заместитель директора по учебной части и преподаватель Frontend-разработки'
},
company: {
  en: 'OKURMEN IT Education Center, Bishkek',
  ru: 'Учебный центр OKURMEN IT, Бишкек'
},
    description: {
      en: '🟠 Teaching Frontend for 2+ years: HTML/CSS, JavaScript, React, Redux Toolkit, TypeScript, API, Git/GitHub, AI, server deployment. Guiding students from basics to final projects and job interviews.\n\n🟢 My students are among the strongest and most active in the learning center.\n\n🟡 Since 2025, serving as Deputy Head of Academic Affairs. Developing and updating curricula for Frontend, Python, Flutter, Java, and AI. Recruiting instructors, monitoring education quality, implementing examination systems, projects, and mentorship programs.\n\n🔶 Organizing excursions to IT companies and top universities: AUCA, Ala-Too, to broaden students\' horizons and boost motivation.\n\n🔷 Managing organizational and educational matters, participating in the development of the entire educational system.\n\n🔴 Awarded 10+ certificates and monetary prizes for contributions to center development, including "Best Instructor — 2025" and "Best Deputy Head — 2025" titles, along with performance bonuses.',
      ru: '🟠 Преподаю более 2 лет Frontend: HTML/CSS, JavaScript, React, Redux Toolkit, TypeScript, API, Git/GitHub, ИИ, деплой на сервер. Веду студентов от базы до финальных проектов и собеседований.\n\n🟢 Мои студенты являются одними из самых сильных и активных студентов учебного центра.\n\n🟡 С 2025 года работаю заведующей учебной частью. Как завуч разрабатываю и обновляю учебные программы по Frontend, Python, Flutter, Java и ИИ, подбираю преподавателей, контролирую качество обучения, внедряю систему экзаменов, проектов и менторства.\n\n🔶 Организую экскурсии в IT-компании и ТОП-университеты: АУЦА, Ала-Тоо, для расширения кругозора и мотивации студентов.\n\n🔷 Решаю организационные и образовательные вопросы центра, участвую в развитии всей учебной системы.\n\n🔴 За вклад в развитие центра награждена более чем 10 грамотами и денежными премиями, включая звания «Лучший преподаватель — 2025» и «Лучший завуч — 2025», а также денежными премиями за высокие результаты работы.'
    }
  },
  {
    period: '2024 - 2025 - Present',
    periodRu: '2024 - 2025 - Настоящее время',
    role: {
  en: 'Freelance Full-Stack Web Developer',
  ru: 'Фриланс Full-Stack веб-разработчик'
},
company: {
  en: 'Self-Employed (Freelance)',
  ru: 'Самозанятость (Фриланс)'
},
    description: {
      en: 'Development of commercial web applications and end-to-end digital solutions using React, TypeScript, Redux, and PostgreSQL. Execution of freelance projects of varying complexity, ranging from landing pages and e-commerce websites to business process automation systems. Full development lifecycle including requirements analysis, system architecture design, development, testing, deployment, and ongoing maintenance. Implementation of responsive user interfaces, basic SEO optimization, and performance improvements for web applications. Experience working on monolithic applications with a focus on stability, scalability, and maintainability for long-term support.',
      ru: 'Разработка коммерческих веб-приложений и цифровых решений под ключ с использованием React, TypeScript, Redux и PostgreSQL. Выполнение фриланс-заказов различной сложности: от лендингов и интернет-магазинов до систем автоматизации бизнеса. Полный цикл разработки — от анализа требований и проектирования архитектуры до разработки, тестирования, деплоя и дальнейшей поддержки проектов. Реализация адаптивных интерфейсов, базовая SEO-оптимизация и повышение производительности веб-приложений. Работа над монолитными приложениями с акцентом на стабильность, масштабируемость и удобство дальнейшего сопровождения.'
    }
  },
  {
    period: '2023 - 2024',
   role: {
    en: 'Computer Science & Programming Instructor',
    ru: 'Преподаватель информатики и программирования'
         },
   company: {
    en: 'American European School, Bishkek',
    ru: 'Американская Европейская Школа, Бишкек'
        },
    description: {
      en: 'Taught computer science and mathematics to students in grades 7–12 at a private school, building a strong foundation in programming and web development. Delivered courses in Python, JavaScript, and the fundamentals of Flutter, as well as core areas of computer science and algorithmic thinking. Developed an engaging and structured curriculum that combined theoretical instruction with hands-on, project-based learning. This approach enabled students to apply their knowledge in real-world tasks while strengthening logical thinking, problem-solving skills, and fostering a genuine interest in IT.',
      ru: 'Преподавала информатику и математику учащимся 7–12 классов в частной школе, формируя у школьников прочную базу знаний и практических навыков. Обучала основам программирования и веб-разработки, включая Python, JavaScript и базовые принципы Flutter, а также ключевые разделы информатики и алгоритмического мышления. Разработала собственную образовательную программу, ориентированную на сочетание теоретического материала с практико-ориентированными проектами. Такой подход позволял учащимся не только осваивать учебный материал, но и применять его в реальных задачах, развивая логическое мышление, самостоятельность и интерес к IT-сфере.'
    }
  },
  {
    period: '2023',
    role: {
      en: 'Frontend Development Mentor',
      ru: 'Ментор по Фронтенд-разработке'
    },
    company: {
      en: 'IT Academy "ITC Bootcamp", Osh',
      ru: 'IT-академия "ITC Bootcamp", Ош'
    },
    description: {
      en: 'Provided mentorship to students at an IT academy in HTML, CSS, and JavaScript. Explained key principles of web development and helped students develop practical skills in writing clean and well-structured code. Conducted regular code reviews with detailed feedback, identified errors, and proposed optimal solutions to improve code quality. Provided individualized support to students with different levels of preparation, adapting the learning process to their goals and pace of progress.',
      ru: 'Осуществляла менторство студентов в IT-академии по направлениям HTML, CSS и JavaScript. Объясняла ключевые принципы веб-разработки и формировала практические навыки написания чистого и структурированного кода. Проводила регулярные ревью кода с подробной обратной связью, выявляла ошибки и предлагала оптимальные решения для повышения качества кода. Оказывала индивидуальное сопровождение студентов с разным уровнем подготовки, адаптируя обучение под их цели и темп освоения материала.'
    }
  },
  {
    period: '2022 - 2023',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'NOVA Educational Center, Bishkek',
      ru: 'Образовательный центр NOVA, Бишкек'
    },
    description: {
      en: 'Conducted in-depth mathematics training with a focus on problem-solving strategies. Prepared more than 200 students for the ORT exam, of whom 80% scored above 150 points. More than 30 students achieved high results above 200 points and were awarded recognition in their respective regions. Taught all three levels of difficulty: basic, intermediate, and advanced, including VIP groups with an intensive program and advanced-level problem sets.',
      ru: 'Проводила углубленное обучение математике с акцентом на стратегии решения задач. Подготовила более 200 школьников к ОРТ, из которых 80% набрали свыше 150 баллов. Более 30 учащихся достигли высокого результата — свыше 200 баллов, а также были отмечены наградами в своих регионах. Преподавала все три уровня сложности: базовый, средний и продвинутый, включая VIP-группы с углубленной программой и задачами повышенного уровня сложности.'
    }
  },
  {
    period: '2022',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'Askar Salymbekov Business School, Bishkek',
      ru: 'Бизнес-школа Аскара Салымбекова, Бишкек'
    },
    description: {
      en: 'I taught mathematics courses for grades 10–11 using an original methodology for preparing students for the national ORT exam. I ensured a 100% success rate in passing the ORT threshold among my students. 95% of students scored above 150 points, and more than 10 students scored over 200 points. I trained more than 50 students in an offline format. I developed original teaching materials and test assignments aligned with the exam format. I worked individually with students of different skill levels, which significantly improved the overall group performance.',
      ru: 'Преподавала курсы математики для 10–11 классов по авторской методике подготовки к ОРТ. Обеспечила 100% успешную сдачу порогового балла ОРТ среди учеников. 95% учеников набрали более 150 баллов, более 10 студентов — свыше 200 баллов. Обучила более 50 студентов в офлайн-формате. Разрабатывала авторские учебные материалы и тестовые задания в соответствии с форматом экзамена. Индивидуально работала со студентами разного уровня подготовки, что позволило значительно повысить общий результат группы.'
    }
  },
    {
    period: '2021 - 2022',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'SECOM Educational Center, Bishkek',
      ru: 'Образовательный центр SECOM, Бишкек'
    },
    description: {
      en: 'Taught mathematics to students preparing for entrance exams and Olympiads. Developed comprehensive study materials and a structured teaching methodology aimed at systematically improving student performance. Trained over 200 students: 100% successfully passed the ORT threshold, and 70% achieved high scores significantly above average.',
      ru: 'Преподавала математику студентам, готовящимся к вступительным экзаменам и олимпиадам. Разработала комплексные учебные материалы и методику подготовки, направленную на системное повышение результатов учащихся. Обучила более 200 школьников: 100% из них успешно преодолели пороговый балл ОРТ, а 70% достигли высоких результатов, значительно превышающих средние показатели.'
    }
  },
  {
    period: '2020 - 2021',
    role: {
      en: 'Mathematics Teacher / Speed Reading Teacher / English Teacher / SMM Specialist',
      ru: 'Преподаватель математики / Преподаватель скорочтения / Преподаватель английского / SMM-специалист'
    },
    company: {
    en: 'LEADER ASIA Training Center, Osh',
    ru: 'Учебный центр LEADER ASIA в городе Ош'
    },
    description: {
      en: 'Taught mathematics to 11th-grade students preparing for ORT exams both online and offline. Trained over 300 students in speed reading in offline format and conducted 4 online 10-day speed reading marathons across Kyrgyzstan. Also taught English to children in an offline format. Additionally created educational content, increasing engagement and brand awareness across social media platforms. Awarded certificates for high performance and contribution to the development of the center.',
      ru: 'Преподавала математику для 11 классов по подготовке к ОРТ онлайн и оффлайн. Обучила более 300 студентов скорочтению оффлайн, а также провела 4 онлайн 10-дневных марафона по скорочтению по всему Кыргызстану. Преподавала английский язык детям в оффлайн-формате. Также создавала образовательный контент, повышая вовлеченность и узнаваемость бренда в социальных сетях. Отмечена грамотами за высокий уровень работы и вклад в развитие центра.'
    }
  },
    {
    period: '2020 - 2021',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
     en: 'Record Osh Analytical Educational Center',
     ru: 'Аналитический образовательный центр "Рекорд Ош"'
    },
    description: {
      en: 'Specialized in developing analytical thinking and advanced mathematics, including preparation for ORT, national olympiads, and university entrance exams. I have taught more than 150 students in offline format. One of my students successfully passed an entrance exam in the United States and was admitted to a bachelor’s program. My strongest student scored 219 points and received a gold certificate in 2021.',
      ru: 'Специализировалась на развитии аналитического мышления и продвинутой математике, включая подготовку к ОРТ, национальным олимпиадам и вступительным экзаменам в университеты. Обучила более 150 студентов в офлайн-формате. Один из моих студентов успешно сдал вступительный тест в США и поступил на бакалавриат. Мой самый сильный ученик набрал 219 баллов и получил золотой сертификат в 2021 году.'
    }
  },
  {
    period: '2019 - 2020',
    role: {
      en: 'Mathematics Teacher',
      ru: 'Преподаватель математики'
    },
    company: {
      en: 'Ilim-Nur Private School, Bishkek',
      ru: 'Частная школа Илим-Нур в городе Бишкек'
    },
    description: {
      en: 'Taught mathematics to students in grades 10–11, preparing them for international Olympiads and entrance exams for admission to universities abroad. Developed a specialized preparation program focused on international admissions, strong academic foundations, and exam strategies. Three of my students successfully gained admission to universities in the United States after completing the course.',
      ru: 'Преподавала математику ученикам 10–11 классов, готовя их к международным олимпиадам и вступительным экзаменам для поступления в зарубежные университеты. Разработала специализированную программу подготовки для международного поступления, ориентированную на сильную академическую базу и экзаменационные стратегии. Трое моих учеников успешно поступили в университеты США после прохождения курса.'
    }
  },
  {
    period: '2019',
    role: {
      en: 'Coordinator',
      ru: 'Координатор'
    },
    company: {
      en: 'SECOM Educational Center, Bishkek',
      ru: 'Образовательный центр SECOM, Бишкек'
    },
    description: {
      en: 'Coordinated educational programs, managed student admissions, and organized events, ensuring the smooth and efficient operation of the Bishkek branch. Also initiated and organized a meeting at Secom, bringing together top-performing students in Kyrgyzstan — gold certificate holders and former Olympiad participants — to create a platform for experience sharing and academic motivation.',
      ru: 'Координировала образовательные программы, занималась набором студентов и организацией мероприятий, обеспечивая стабильную работу филиала в Бишкеке. Также инициировала и организовала встречу в Секоме, собрав сильнейших школьников Кыргызстана — обладателей золотых сертификатов и бывших олимпиадников — для обмена опытом и мотивационного взаимодействия.'
    }
  }
];

export function renderExperience(): void {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;
  
  const lang = getCurrentLang();
  
  container.innerHTML = experienceData.map((exp, index) => {
    const displayPeriod = lang === 'ru' && exp.periodRu ? exp.periodRu : exp.period;
    const description = exp.description[lang as keyof typeof exp.description];
    // Replace line breaks with HTML breaks
    const formattedDescription = description.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    
    return `
    <div class="experience-item animate-on-scroll" style="animation-delay: ${index * 0.1}s">
      <div class="exp-period">${displayPeriod}</div>
      <div class="exp-content">
        <h3 class="exp-role">${exp.role[lang as keyof typeof exp.role]}</h3>
        <h4 class="exp-company">${exp.company[lang as keyof typeof exp.company]}</h4>
        <p class="exp-description">${formattedDescription}</p>
      </div>
    </div>
  `}).join('');
}
