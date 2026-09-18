const KEY = 'rezume.data.v15';

const DEFAULT = {
  theme: 'pro',
  preset: 'universal',
  name: 'Николаева Анжелина Михайловна',
  role: 'Разработчик ПО · Преподаватель IT · Аналитик образовательных данных',
  city: 'Якутск · удалённо / релокация',
  email: 'Zloipingvin2000@gmail.com',
  phone: '+7 968 151-56-91',
  github: 'github.com/Evil-Pinguin',
  tg: '',
  photo: '',
  about: 'Беру продукт и довожу до работающего результата, без передачи между тремя специалистами. Пишу на пяти языках: C#, C++, Python, JavaScript, TypeScript. Делала игры на Unity, приложения на SFML, веб-сервисы с базой данных и голосового ассистента. Визуальную часть вытягиваю сама: Figma, Krita, видеомонтаж. Уверенно пользуюсь ИИ в работе и встраиваю его в свои продукты. Под личные и рабочие задачи пишу инструменты сама, от то-ду листа до голосового ассистента. За 4 года преподавания обучила больше 200 учеников. Новое схватываю быстро, начатое довожу до конца.',
  achievements: [
    { text: 'Обучила больше 200 учеников за 4 года в двух школах. Методики писала сама, десятки проектных работ довела до защиты.' },
    { text: 'Пишу на пяти языках: C#, C++, Python, JavaScript, TypeScript. Между стеками переключаюсь спокойно, от геймдева до веба и автоматизации.' },
    { text: 'Сделала и выпустила 4 приложения полного цикла - от архитектуры до автодеплоя. Все работают онлайн. Закрываю то, что обычно делят на троих: дизайн, разработку и документацию.' },
    { text: 'Уверенно работаю с ИИ: встроила нейросеть в свой продукт через serverless-функцию с валидацией ответа, умею формулировать запросы и проверять результат, а не принимать на веру.' },
    { text: 'Пишу инструменты под себя, когда готового решения нет: то-ду лист, генератор резюме, голосовой ассистент. Рутину предпочитаю автоматизировать, а не терпеть.' },
    { text: 'Готовила учеников к научным конференциям, среди моих учениц есть победительницы муниципальной олимпиады по биологии и экологии.' },
    { text: 'Волонтёр на играх «Дети Азии», фестивале «Муус устар» с первого сезона и «Играх Манчаары». Команда там, где подвести нельзя.' }
  ],
  skills: [
    { name: 'C# / .NET, Unity', level: 75 },
    { name: 'C++ / SFML', level: 65 },
    { name: 'Python', level: 70 },
    { name: 'TypeScript / JavaScript', level: 80 },
    { name: 'React, Vite, HTML/CSS', level: 82 },
    { name: 'SQL / PostgreSQL', level: 60 },
    { name: 'REST API, serverless, LLM', level: 75 },
    { name: 'Git, CI/CD, деплой', level: 75 },
    { name: 'Тестирование и отладка', level: 70 },
    { name: 'Работа с ИИ: промптинг, интеграция, ускорение задач', level: 88 },
    { name: 'Автоматизация быта и работы, свои инструменты', level: 85 },
    { name: 'Linux, работа в терминале', level: 55 },
    { name: 'Figma - интерфейсы', level: 70 },
    { name: 'Krita - графика и анимация', level: 80 },
    { name: 'Видеомонтаж, Roblox Studio', level: 75 },
    { name: 'Преподавание и менторство', level: 90 },
    { name: 'Быстрое обучение новому', level: 95 },
    { name: 'Ответственность, работа в команде', level: 95 }
  ],
  projects: [
    {
      title: 'LexiCard - платформа изучения языка с AI-генерацией контента',
      desc: 'Приложение полного цикла: React и TypeScript на клиенте, serverless-функция на сервере, нейросеть для генерации учебных наборов. Повтор ошибок по методике интервальных повторений, синтез речи, таймер, тёмная тема. Методика построена на преподавательском опыте.',
      tags: 'React, TypeScript, Serverless, LLM API, методика обучения',
      link: 'github.com/Evil-Pinguin/lexicard'
    },
    {
      title: 'EduQuiz Pro - конструктор и платформа тестирования',
      desc: 'Два режима: прохождение теста и конструктор вопросов. Context API, настраиваемый таймер, валидация форм, сбор и подсчёт результатов. Задеплоено с автосборкой.',
      tags: 'React, JavaScript, Context API, аналитика результатов',
      link: 'my-edu-quiz.vercel.app'
    },
    {
      title: 'Игры и визуальные новеллы - Unity (C#), SFML (C++)',
      desc: 'Игровая логика, сцены, интерфейс. Спрайты и анимацию рисовала сама в Krita. Использовались как учебные материалы на занятиях.',
      tags: 'C#, Unity, C++, SFML, Krita, геймдизайн',
      link: ''
    },
    {
      title: 'Aurora - голосовой помощник для компьютера',
      desc: 'Ассистент в духе Джарвиса: запуск задач голосом и командами, автоматизация рутины за компьютером. Сценарий взаимодействия продуман так, чтобы работало без инструкции.',
      tags: 'Python, автоматизация, голосовой интерфейс, UX',
      link: ''
    },
    {
      title: 'Личные веб-инструменты: то-ду лист, генератор резюме и другие',
      desc: 'Пишу небольшие приложения под свои задачи, когда готовое не подходит. То-ду лист под свой режим дня, генератор резюме с шаблонами под разные вакансии, утилиты для бытовой рутины. Каждое доводится до рабочего состояния и реально используется.',
      tags: 'JavaScript, React, автоматизация, UX',
      link: ''
    },
    {
      title: 'Обучающий сайт по Linux',
      desc: 'Учебная платформа по основам Linux: программа курса, подача от простого к сложному, практические задания. Методика и вёрстка полностью мои.',
      tags: 'HTML, CSS, JavaScript, Linux, методика',
      link: ''
    },
    {
      title: 'Wedding Invite - веб-сервис с формой и базой данных',
      desc: 'React и TypeScript с PostgreSQL через Supabase. Форма с валидацией, асинхронной записью в базу и обработкой ошибок.',
      tags: 'React, TypeScript, Supabase, PostgreSQL',
      link: ''
    }
  ].slice(0, 5),
  pitch: [
    { v: '6 лет', l: 'в IT и педагогике' },
    { v: '5', l: 'языков программирования' },
    { v: '200+', l: 'обученных учеников' },
    { v: '6', l: 'проектов доведено до конца' }
  ],
  hobby: 'Рисование и цифровая графика · Пишу программы под свои бытовые задачи · Создание сайтов · Разработка авторских методик · Слежу за развитием ИИ и новыми инструментами · Наращивание ногтей · Рукоделие · Хорошо разбираюсь в интернет-культуре и мемах',
  exp: [
    {
      title: 'Преподаватель программирования и информатики - 2 школы дополнительного образования',
      meta: '4 года',
      desc: 'Обучила больше 200 учеников: C# и Unity, C++ (SFML), Python, веб-разработка, Roblox Studio, визуальные новеллы. Авторские методики и материалы писала сама. Вела проектные работы до научных конференций, мои ученицы побеждали на муниципальной олимпиаде по биологии и экологии.'
    },
    {
      title: 'Волонтёр международных и республиканских мероприятий',
      meta: 'Регулярно, несколько лет',
      desc: 'Игры «Дети Азии», фестиваль «Муус устар» с первого сезона, «Игры Манчаары». Координация на площадках и сопровождение участников: задачи меняются на ходу, решать надо сразу.'
    },
    {
      title: 'Разработчик программного обеспечения (проектная работа)',
      meta: '2024 - настоящее время',
      desc: 'Полный цикл: архитектура, типизация, внешние и AI-API, serverless-функции, PostgreSQL. Дальше тесты, CI/CD, выпуск в продакшн и документация.'
    },
    {
      title: 'Педагогический институт - высшее образование',
      meta: 'Диплом',
      desc: 'Методология обучения, проектирование систем оценивания, анализ результатов.'
    }
  ]
};

/* ====== ПРЕСЕТЫ ПОД КОНКРЕТНЫЕ ВАКАНСИИ ====== */
const HEAD = {
  name: 'Николаева Анжелина Михайловна',
  city: 'Якутск · удалённо / релокация',
  email: 'Zloipingvin2000@gmail.com',
  phone: '+7 968 151-56-91',
  github: 'github.com/Evil-Pinguin',
  tg: '', photo: ''
};

const PRESETS = {
  universal: { label: 'Мультипрофиль: разработчик + преподаватель', data: () => structuredClone(DEFAULT) },

  frontend: {
    label: 'Frontend-разработчик',
    data: () => ({
      ...structuredClone(DEFAULT),
      role: 'Frontend-разработчик (React, TypeScript)',
      pitch: [
        { v: '200+', l: 'обученных учеников' },
        { v: '4', l: 'приложения в проде' },
        { v: '5', l: 'языков программирования' },
        { v: '100%', l: 'проектов задеплоено' }
      ],
      about: 'Frontend-разработчик с широким техническим бэкграундом: React, TypeScript, Vite, адаптивная вёрстка, REST и AI-API, serverless-функции, PostgreSQL, автодеплой на Vercel. До веба писала на C#, Unity и C++, так что программирование понимаю глубже, чем на уровне одного фреймворка. Четыре года преподавала, обучила больше 200 учеников, поэтому умею объяснить своё решение на ревью и написать документацию, которую реально читают. Интерфейсы собираю сама в Figma, графику рисую в Krita.',
      skills: [
        { name: 'React (хуки, Context API, архитектура компонентов)', level: 80 },
        { name: 'TypeScript (строгая типизация, интерфейсы)', level: 70 },
        { name: 'JavaScript ES6+', level: 80 },
        { name: 'HTML5 / CSS3 (Grid, Flex, анимации, адаптив)', level: 85 },
        { name: 'Vite, сборка и оптимизация', level: 75 },
        { name: 'REST API, fetch, async/await', level: 75 },
        { name: 'Serverless-функции, интеграция LLM', level: 75 },
        { name: 'SQL / PostgreSQL (Supabase)', level: 60 },
        { name: 'Git / GitHub, CI/CD, Vercel', level: 75 },
        { name: 'C#, Unity, C++, Python', level: 65 },
        { name: 'Figma, Krita, UI/UX', level: 70 },
        { name: 'Работа с ИИ: промптинг и интеграция', level: 88 },
        { name: 'Автоматизация, свои инструменты', level: 85 },
        { name: 'Быстрое обучение, ответственность', level: 95 }
      ]
    })
  },

  research: {
    label: 'Специалист по количественным исследованиям',
    data: () => ({
      ...structuredClone(DEFAULT),
      theme: 'pro',
      role: 'Специалист по количественным исследованиям / аналитик данных',
      pitch: [
        { v: '200+', l: 'человек в выборке' },
        { v: '4 года', l: 'работы с данными' },
        { v: '2', l: 'платформы сбора данных' },
        { v: 'Python', l: 'SQL, PostgreSQL' }
      ],
  hobby: 'Рисование и цифровая графика · Программирование · Создание сайтов · Разработка методик · Рукоделие · Наращивание ногтей · Интернет-культура и мемы',
      achievements: [
        { text: '4 года собирала и интерпретировала количественные данные по выборке более 200 учеников: диагностические срезы по группам, анализ типовых ошибок, корректировка программы по результатам.' },
        { text: 'Самостоятельно разработала две платформы тестирования со сбором ответов, подсчётом точности и визуализацией прогресса - инструменты сбора данных под собственные задачи.' },
        { text: 'Готовила аналитическую отчётность для администрации и защищала выводы перед аудиторией.' },
        { text: 'Сопровождала исследовательские работы учеников до выступлений на научных конференциях, среди них есть победительницы муниципальной олимпиады по биологии и экологии.' },
        { text: 'Работаю с данными в Python и SQL (PostgreSQL), оформляю результаты в наглядные отчёты и инфографику.' }
      ],
      about: 'Аналитик с педагогическим образованием и опытом работы с данными об обучении. Четыре года преподавала в двух школах, через меня прошли данные больше 200 учеников: составляла тесты и методики, собирала результаты, разбирала их и по итогам перестраивала программу. По сути это и есть работа с количественными данными о поведении людей. Технически: Python, SQL и PostgreSQL, JavaScript. Сама сделала две платформы тестирования, EduQuiz Pro и LexiCard, со сбором статистики ответов, метриками точности и визуализацией прогресса. Умею превращать цифры в понятные выводы и спокойно защищать их перед аудиторией, четыре года у доски этому учат хорошо.',
      skills: [
        { name: 'Python (обработка и анализ данных)', level: 65 },
        { name: 'SQL / PostgreSQL (Supabase)', level: 60 },
        { name: 'Excel / Google Sheets, сводные таблицы', level: 70 },
        { name: 'Проектирование анкет и тестов', level: 85 },
        { name: 'Сбор и интерпретация результатов', level: 80 },
        { name: 'Визуализация данных (графики, дашборды)', level: 60 },
        { name: 'JavaScript / React (прототипы и дашборды)', level: 80 },
        { name: 'Презентация выводов, отчёты, защита результатов', level: 85 },
        { name: 'Статистика: выборка, доли, динамика показателей', level: 55 },
        { name: 'Figma, Krita - оформление отчётов и инфографики', level: 70 },
        { name: 'Работа с ИИ для обработки и проверки данных', level: 85 },
        { name: 'Автоматизация рутины, свои инструменты', level: 85 },
        { name: 'Работа с ИИ в обучении и подготовке материалов', level: 88 },
        { name: 'Автоматизация рутины, свои инструменты', level: 85 },
        { name: 'Быстрое обучение, ответственность', level: 95 }
      ],
      projects: [
        { title: 'EduQuiz Pro - платформа тестирования со сбором результатов', desc: 'Разработала конструктор тестов и режим прохождения: фиксация ответов, подсчёт правильных/неправильных, прогресс, хранение результатов. По сути - инструмент сбора количественных данных об аудитории. Задеплоено, работает онлайн.', tags: 'React, JavaScript, аналитика ответов, LocalStorage', link: 'my-edu-quiz.vercel.app' },
        { title: 'LexiCard - приложение с метриками обучения', desc: 'Считает точность ответов, собирает ошибочные элементы в отдельную выборку для повторного прохождения (spaced repetition), выводит честную итоговую статистику и историю выученного. Генерация наборов данных через AI API.', tags: 'React, TypeScript, метрики, Serverless, Groq API', link: 'github.com/Evil-Pinguin/lexicard' },
        { title: 'Методическая аналитика в школе', desc: 'Четыре года: разработка контрольных и диагностических работ, сбор и обработка результатов по выборке 200+ учеников, анализ типовых ошибок и корректировка программы по итогам. Подготовка отчётов для администрации.', tags: 'анализ результатов, отчётность, методология', link: '' }
      ],
      exp: [
        { title: 'Преподаватель информатики и программирования - 2 школы ДО', meta: '4 года', desc: 'Диагностика уровня более 200 учеников, разработка тестов и критериев оценивания, сбор и анализ результатов по группам, корректировка программы по данным. Отчётность, методические материалы, сопровождение проектных работ.' },
        { title: 'Волонтёр международных и республиканских мероприятий', meta: 'Регулярно, несколько лет', desc: 'Международные игры «Дети Азии», фестиваль «Муус устар» с первого сезона, «Игры Манчаары». Координация на площадках, сопровождение участников, работа в команде и оперативное решение задач в меняющейся обстановке.' },
        { title: 'Разработчик аналитических веб-приложений (pet-проекты)', meta: '2024 - настоящее время', desc: 'Разработка платформ тестирования со сбором и визуализацией метрик, работа с PostgreSQL через Supabase, обработка данных на Python и JavaScript.' },
        { title: 'Педагогический институт - высшее образование', meta: 'Диплом', desc: 'Педагогика. Методология обучения, оценивание, работа с результатами и статистикой успеваемости.' }
      ]
    })
  },

  qa: {
    label: 'QA Engineer (Junior/Middle)',
    data: () => ({
      ...structuredClone(DEFAULT),
      theme: 'pro',
      role: 'QA Engineer (ручное тестирование, frontend)',
      pitch: [
        { v: '4', l: 'продукта протестировано' },
        { v: '200+', l: 'разборов ошибок' },
        { v: '4 года', l: 'работы с деталями' },
        { v: 'Dev', l: 'опыт разработчика' }
      ],
      achievements: [
        { text: 'Тестирую собственные продукты полным циклом: функциональные и негативные сценарии, граничные значения, адаптив, кроссбраузерность, регресс перед релизом.' },
        { text: 'Нахожу и устраняю дефекты асинхронной логики - гонки состояний, незавершённые таймеры, утечки эффектов при размонтировании.' },
        { text: 'Проверяю интеграции с REST API: коды ответов, обработка ошибок сети, некорректные и пустые данные.' },
        { text: '4 года педагогической практики и работы с 200+ учениками: точное описание проблемы по шагам, детальный разбор ошибок, письменная обратная связь - базовый навык баг-репорта.' }
      ],
      about: 'Начинающий QA-инженер, но с реальным опытом разработки. Знаю, как приложение устроено внутри, поэтому понимаю, где оно скорее всего сломается. Писала фронтенд на React и TypeScript, работала с API, DevTools и консолью, ловила баги в асинхронной логике: таймеры, гонки состояний, утечки эффектов. Это как раз классика дефектов. Четыре года преподавания и 200+ учеников дали главное для тестировщика: дотошность и умение описать проблему так, чтобы её воспроизвели с первого раза. Смотрю на продукт глазами человека, который видит его впервые.',
      skills: [
        { name: 'Ручное функциональное тестирование', level: 70 },
        { name: 'Тест-кейсы, чек-листы, баг-репорты', level: 70 },
        { name: 'Тестирование API (fetch, REST, коды ответов)', level: 70 },
        { name: 'DevTools: Network, Console, адаптив', level: 80 },
        { name: 'Кроссбраузерное и мобильное тестирование', level: 75 },
        { name: 'SQL (выборки, проверка данных)', level: 55 },
        { name: 'Git / GitHub', level: 75 },
        { name: 'JavaScript / TypeScript (чтение и правка кода)', level: 80 },
        { name: 'Автотесты: Vitest, Testing Library - изучаю', level: 40 },
        { name: 'Внимательность к деталям, UX-экспертиза', level: 90 },
        { name: 'Работа с ИИ для генерации тест-данных', level: 85 },
        { name: 'Автоматизация рутины, свои инструменты', level: 85 },
        { name: 'Работа с ИИ в обучении и подготовке материалов', level: 88 },
        { name: 'Автоматизация рутины, свои инструменты', level: 85 },
        { name: 'Быстрое обучение, ответственность', level: 95 }
      ],
      projects: [
        { title: 'LexiCard - самостоятельное тестирование продукта', desc: 'Проверяла сценарии: таймаут ответа, автопереход, повторное прохождение ошибок, регистр и пробелы во вводе, поведение при пустом и некорректном ответе API, адаптив до 480px, переключение тем. Находила и чинила дефекты асинхронности (незавершённые таймеры при размонтировании).', tags: 'функциональное тестирование, API, адаптив, регресс', link: 'github.com/Evil-Pinguin/lexicard' },
        { title: 'EduQuiz Pro - валидация форм и граничные значения', desc: 'Тестировала конструктор вопросов: валидация пустых полей, граничные значения таймера, сохранение состояния после перезагрузки, конфликт ручного ответа и автосброса таймера.', tags: 'граничные значения, валидация, регресс', link: 'my-edu-quiz.vercel.app' },
        { title: 'Wedding Invite - тестирование формы и БД', desc: 'Проверка отправки формы в PostgreSQL: состояния загрузки, обработка ошибок сети, корректность записи данных в таблицу, повторная отправка.', tags: 'формы, БД, негативные сценарии', link: '' }
      ],
      exp: [
        { title: 'Frontend-разработчик / самостоятельное QA (pet-проекты)', meta: '2024 - настоящее время', desc: 'Полный цикл: разработка, тестирование и выпуск веб-приложений. Проверка функциональности, адаптива, работы с API, отладка через DevTools, ведение списка дефектов.' },
        { title: 'Волонтёр международных и республиканских мероприятий', meta: 'Регулярно, несколько лет', desc: 'Международные игры «Дети Азии», фестиваль «Муус устар» с первого сезона, «Игры Манчаары». Координация на площадках, сопровождение участников, работа в команде и оперативное решение задач в меняющейся обстановке.' },
        { title: 'Преподаватель информатики - 2 школы ДО', meta: '4 года', desc: 'Разработка критериев оценивания и проверочных работ для 200+ учеников, детальный разбор ошибок, письменная обратная связь. Навык точно описывать проблему и воспроизводить её по шагам.' },
        { title: 'Педагогический институт - высшее образование', meta: 'Диплом', desc: 'Педагогическое образование.' }
      ]
    })
  },

  teacher: {
    label: 'Преподаватель IT / методист',
    data: () => ({
      ...structuredClone(DEFAULT),
      role: 'Преподаватель программирования · Методист IT-направления',
      pitch: [
        { v: '200+', l: 'обученных учеников' },
        { v: '4 года', l: 'преподавания' },
        { v: '5', l: 'направлений обучения' },
        { v: '100%', l: 'материалов авторские' }
      ],
  hobby: 'Рисование и цифровая графика · Разработка авторских методик · Создание сайтов · Программирование как хобби · Рукоделие · Наращивание ногтей · Свободно ориентируюсь в интернет-культуре и мемах - общий язык с подростками',
      about: 'Преподаватель программирования с педагогическим образованием и практикой действующего разработчика. Для EdTech и допобразования сочетание редкое. За 4 года обучила больше 200 учеников: C#/Unity, C++, Python, веб-разработка, Roblox Studio. Пишу авторские методики и материалы, веду проектные работы до защиты. Продолжаю программировать сама, поэтому на занятиях даю живые практики, а не теорию из учебника. Учебную графику, спрайты и видео тоже делаю сама, в Krita и Figma.',
      achievements: [
        { text: 'Обучила более 200 учеников программированию за 4 года в двух школах дополнительного образования.' },
        { text: 'Разработала авторские методики и полный комплект учебных материалов по 5 направлениям: C#/Unity, C++, Python, веб-разработка, Roblox Studio.' },
        { text: 'Довела десятки ученических проектов до защиты, выступая научным руководителем и техническим наставником.' },
        { text: 'Готовила учеников к научным конференциям и предметным олимпиадам. Среди моих учениц есть победительницы муниципальной олимпиады по биологии и экологии.' },
        { text: 'Разработала обучающий сайт по основам Linux: программа курса, подача от простого к сложному, практические задания и вёрстка - всё своими силами.' },
        { text: 'Создаю учебный контент под ключ: методичка, презентация, графика и спрайты в Krita, видеоразбор - без привлечения дизайнера и монтажёра.' },
        { text: 'Как действующий разработчик выпустила 4 приложения в прод, что позволяет преподавать реальные инженерные практики: архитектура, Git, тестирование, деплой.' },
        { text: 'Волонтёр международных игр «Дети Азии», фестиваля «Муус устар» с первого сезона и «Игр Манчаары» - опыт работы с большими детскими и молодёжными аудиториями.' }
      ],
      skills: [
        { name: 'Преподавание программирования (дети, подростки)', level: 95 },
        { name: 'Разработка методических материалов и программ', level: 90 },
        { name: 'Проектирование тестов и систем оценивания', level: 85 },
        { name: 'Наставничество, подготовка к конференциям и олимпиадам', level: 92 },
        { name: 'C# / Unity - разработка игр', level: 75 },
        { name: 'C++ (SFML), Python', level: 70 },
        { name: 'Веб: HTML, CSS, JavaScript, React', level: 80 },
        { name: 'Roblox Studio, визуальные новеллы', level: 75 },
        { name: 'Krita - учебная графика, спрайты, анимация', level: 80 },
        { name: 'Figma, видеомонтаж - учебный контент', level: 75 },
        { name: 'Публичные выступления, работа с аудиторией', level: 90 },
        { name: 'Работа с ИИ в обучении и подготовке материалов', level: 88 },
        { name: 'Автоматизация рутины, свои инструменты', level: 85 },
        { name: 'Быстрое обучение, ответственность', level: 95 }
      ],
      projects: [
        { title: 'Обучающий сайт по Linux', desc: 'Учебная платформа по основам Linux: структура курса, подача материала от простого к сложному, практические задания. Методическая часть и вёрстка полностью мои.', tags: 'HTML, CSS, JavaScript, Linux, методика', link: '' },
        { title: 'Aurora - голосовой помощник для компьютера', desc: 'Программа-ассистент в духе Джарвиса для упрощения повседневной работы за компьютером: голосовые команды, автоматизация рутины, понятный сценарий взаимодействия.', tags: 'Python, автоматизация, голосовой интерфейс', link: '' },
        { title: 'LexiCard - приложение для изучения слов', desc: 'Учебное приложение на React и TypeScript с генерацией словарей через нейросеть, режимом повтора ошибок по методике интервальных повторений и озвучкой. Методическая часть построена на преподавательском опыте.', tags: 'React, TypeScript, AI, методика обучения', link: 'github.com/Evil-Pinguin/lexicard' },
        { title: 'EduQuiz Pro - конструктор тестов', desc: 'Платформа создания и прохождения квизов с редактором вопросов, таймером и сбором результатов. Используется как инструмент проверки знаний.', tags: 'React, JavaScript, тестирование знаний', link: 'my-edu-quiz.vercel.app' }
      ],
      exp: [
        { title: 'Преподаватель программирования - 2 школы дополнительного образования', meta: '4 года', desc: 'Более 200 учеников. Направления: C#/Unity, C++ (SFML), Python, веб-разработка, Roblox Studio, визуальные новеллы. Авторские методики, учебные материалы, диагностика уровня групп, анализ результатов, корректировка программы, сопровождение проектных работ до защиты, создание учебной графики.' },
        { title: 'Волонтёр международных и республиканских мероприятий', meta: 'Регулярно, несколько лет', desc: 'Международные игры «Дети Азии», фестиваль «Муус устар» с первого сезона, «Игры Манчаары». Координация на площадках, сопровождение участников, работа в команде и оперативное решение задач в меняющейся обстановке.' },
        { title: 'Разработчик ПО (практикующий)', meta: '2024 - настоящее время', desc: 'Разработка и выпуск веб-приложений на React и TypeScript с серверной частью, базой данных и AI-интеграцией. Поддерживает актуальность преподаваемого материала.' },
        { title: 'Педагогический институт - высшее образование', meta: 'Диплом', desc: 'Педагогика: методология обучения, дидактика, проектирование систем оценивания.' }
      ]
    })
  }
};

const FIELDS = {
  pitch: [['v', 'Цифра', 'text'], ['l', 'Подпись', 'text']],
  achievements: [['text', 'Достижение (одна строка)', 'area']],
  skills: [['name', 'Навык', 'text'], ['level', 'Уровень %', 'number']],
  projects: [['title', 'Название', 'text'], ['desc', 'Описание', 'area'], ['tags', 'Теги (через запятую)', 'text'], ['link', 'Ссылка', 'text']],
  exp: [['title', 'Заголовок', 'text'], ['meta', 'Период / место', 'text'], ['desc', 'Описание', 'area']]
};

let data = load();

function load() {
  try { return Object.assign(structuredClone(DEFAULT), JSON.parse(localStorage.getItem(KEY) || '{}')); }
  catch { return structuredClone(DEFAULT); }
}
function save() { localStorage.setItem(KEY, JSON.stringify(data)); }
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));


/* выделяем жирным цифры и ключевые технологии в тексте */
const KEYWORDS = ['C#','C\\+\\+','TypeScript','JavaScript','Python','React','Unity','SFML','Vite','PostgreSQL','Supabase','SQL','Figma','Krita','Roblox Studio','Serverless','serverless','LLM','Groq API','REST','Git','CI/CD','Vercel','Node','DevTools','Context API','Container/Presentational','Web Audio API','SpeechSynthesis','LocalStorage','pandas','Postman','Vitest','Testing Library'];
function accent(str) {
  let out = esc(str);
  // числа с пояснением: 200 учеников, 4 года, 5 языков, 4 приложения
  const UNITS = 'учеников|ученика|года|лет|год|языках|языками|языка|приложения|приложений|приложение|проекта|проектов|проект|школах|школы|направлениям|направлений|человек|месяцев';
  out = out.replace(new RegExp('((?:более\\s+)?\\d+\\+?\\s*(?:' + UNITS + '))(?![а-яa-z])', 'gi'), '<strong>$1</strong>');
  out = out.replace(/(десятк[а-я]+\s+[а-я]+)/gi, '<strong>$1</strong>');
  out = out.replace(/((?:пять|пятью|четыре|четырьмя|шесть)\s+язык[а-я]+)/gi, '<strong>$1</strong>');
  KEYWORDS.forEach(k => {
    out = out.replace(new RegExp('(?<![\\\\w>])(' + k + ')(?![\\\\w<])', 'g'), '<strong>$1</strong>');
  });
  return out;
}

/* ---------- форма ---------- */
function bindSimple() {
  ['name', 'role', 'city', 'email', 'phone', 'github', 'tg', 'photo', 'about', 'hobby'].forEach(k => {
    const el = document.getElementById('f-' + k);
    el.value = data[k] || '';
    el.addEventListener('input', () => { data[k] = el.value; save(); render(); });
  });
}

function renderList(key) {
  const box = document.getElementById('list-' + key);
  box.innerHTML = '';
  data[key].forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = '<button class="del" title="Удалить">×</button>' + FIELDS[key].map(([f, label, type]) =>
      `<label>${label}${type === 'area'
        ? `<textarea data-f="${f}" rows="2">${esc(item[f] || '')}</textarea>`
        : `<input data-f="${f}" type="${type}" value="${esc(item[f] ?? '')}">`}</label>`).join('');
    div.querySelectorAll('[data-f]').forEach(inp => inp.addEventListener('input', () => {
      const f = inp.dataset.f;
      item[f] = inp.type === 'number' ? Math.max(0, Math.min(100, +inp.value || 0)) : inp.value;
      save(); render();
    }));
    div.querySelector('.del').onclick = () => { data[key].splice(i, 1); save(); renderList(key); render(); };
    box.appendChild(div);
  });
}

/* ---------- превью ---------- */
function render() {
  const p = document.getElementById('paper');
  p.className = 'paper theme-' + data.theme;
  document.documentElement.setAttribute('data-t', data.theme);
  document.body.setAttribute('data-t', data.theme);

  const ct = [];
  if (data.phone) ct.push(['Телефон', data.phone]);
  if (data.email) ct.push(['Email', data.email]);
  if (data.github) ct.push(['GitHub', data.github]);
  if (data.tg) ct.push(['Telegram', data.tg]);
  if (data.city) ct.push(['Локация', data.city]);

  const contactsInline = ct.map(([, v]) => `<span>${esc(v)}</span>`).join('<em>·</em>');

  const ach = (data.achievements || []).filter(a => a.text);
  const achBlock = ach.length ? `<section class="s-ach"><h2>Ключевые достижения</h2>
    <ul class="bullets">${ach.map(a => `<li>${accent(a.text)}</li>`).join('')}</ul></section>` : '';

  const exp = data.exp.length ? `<section><h2>Опыт работы и образование</h2>${data.exp.map(e => `
    <div class="entry"><div class="erow"><div class="t">${esc(e.title)}</div><div class="m">${esc(e.meta)}</div></div>
    <div class="d">${accent(e.desc)}</div></div>`).join('')}</section>` : '';

  const projects = data.projects.length ? `<section><h2>Проекты</h2>${data.projects.map(pr => `
    <div class="entry"><div class="erow"><div class="t">${esc(pr.title)}</div>
    ${pr.link ? `<div class="m link">${esc(pr.link)}</div>` : ''}</div>
    <div class="d">${accent(pr.desc)}</div>
    ${pr.tags ? `<div class="tags">${pr.tags.split(',').filter(t => t.trim()).map(t => `<span>${esc(t.trim())}</span>`).join('')}</div>` : ''}</div>`).join('')}</section>` : '';

  const skills = data.skills.length ? `<section><h2>Навыки</h2>${data.skills.map(s => `
    <div class="skill"><div class="row"><b>${esc(s.name)}</b><span>${s.level || 0}%</span></div>
    <div class="bar"><i style="width:${Math.min(100, s.level || 0)}%"></i></div></div>`).join('')}</section>` : '';

  const hobbyBlock = data.hobby ? `<section class="s-hobby"><h2>Интересы</h2>
    <div class="hobbies">${data.hobby.split(/[·;]/).map(x => x.trim()).filter(Boolean).map(x => `<span>${esc(x)}</span>`).join('')}</div></section>` : '';

  const contactsCol = ct.length ? `<section class="s-contacts"><h2>Контакты</h2>
    ${ct.map(([k, v]) => `<div class="cline"><span class="ck">${k}</span><span class="cv">${esc(v)}</span></div>`).join('')}</section>` : '';

  p.innerHTML = `
    <header class="head">
      ${data.photo ? `<img class="avatar" src="${esc(data.photo)}" alt="">` : ''}
      <div class="htext">
        <h1>${esc(data.name)}</h1>
        <div class="role">${esc(data.role)}</div>
        <div class="contacts">${contactsInline}</div>
      </div>
    </header>
    <div class="rule"></div>
    ${(data.pitch || []).filter(x => x.v).length ? `<section class="s-pitch"><div class="pitch">${data.pitch.filter(x => x.v).map(x => `<div class="pi"><div class="pv">${esc(x.v)}</div><div class="pl">${esc(x.l)}</div></div>`).join('')}</div></section>` : ''}
    ${data.about ? `<section class="s-about"><h2>Профиль</h2><p>${accent(data.about)}</p></section>` : ''}
    <div class="cols2">
      <div class="colmain">${achBlock}${exp}${projects}</div>
      <aside class="colside">${skills}${hobbyBlock}${contactsCol}</aside>
    </div>`;
  autofit();
}

/* ====== АВТОПОДГОНКА ПОД СТРАНИЦЫ ======
   Подбираем масштаб так, чтобы контент занимал целое число страниц
   и последняя страница была заполнена максимально плотно.        */
let fitTimer = null;
function autofit() {
  if (data.fit === 'off') { document.getElementById('paper').style.setProperty('--fit', 1); return; }
  clearTimeout(fitTimer);
  fitTimer = setTimeout(doFit, 60);
}
function doFit() {
  const p = document.getElementById('paper');
  const cs = getComputedStyle(p);
  // реальный масштаб: ширина листа = 210mm, значит 1mm = width/210 px
  const pxPerMm = (p.getBoundingClientRect().width || 794) / 210;
  const PAGE = 297 * pxPerMm;              // высота A4 в тех же единицах
  const pad = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
  const usable = PAGE - pad;
  const prevMin = p.style.minHeight;
  p.style.minHeight = '0';                 // иначе min-height A4 мешает замеру

  let best = 1, bestScore = -1;
  for (let k = 0; k <= 38; k++) {
    const f = 0.72 + k * 0.01;   // 0.72 ... 1.10
    p.style.setProperty('--fit', f.toFixed(3));
    const h = p.scrollHeight - pad;
    if (h <= 0) continue;
    const pages = Math.max(1, Math.ceil(h / usable - 0.015));
    const fill = h / (pages * usable);     // плотность заполнения последней страницы
    if (fill > 1.001) continue;
    // сильный штраф за незаполненность: главное - убрать полупустые страницы
    const score = fill * 220 - (pages - 1) * 26 + f * 6;
    if (score > bestScore) { bestScore = score; best = f; }
  }
  p.style.setProperty('--fit', best.toFixed(3));
  const h = p.scrollHeight - pad;
  const pages = Math.max(1, Math.ceil(h / usable - 0.02));
  p.style.minHeight = prevMin || '';
  const info = document.getElementById('fitinfo');
  if (info) info.textContent = `Страниц: ${pages} · заполнение ${Math.round((h / (pages * usable)) * 100)}% · масштаб ${Math.round(best * 100)}%`;
}

/* ---------- события ---------- */
document.getElementById('preset').addEventListener('change', e => {
  const p = PRESETS[e.target.value]; if (!p) return;
  if (!confirm('Заменить содержимое резюме на шаблон «' + p.label + '»? Текущие правки будут потеряны.')) { e.target.value = data.preset || 'frontend'; return; }
  data = Object.assign(p.data(), HEAD, { preset: e.target.value });
  save(); boot();
});

document.getElementById('themes').addEventListener('click', e => {
  const b = e.target.closest('.tbtn'); if (!b) return;
  data.theme = b.dataset.theme; save(); markTheme(); render();
});
function markTheme() {
  document.querySelectorAll('.tbtn').forEach(b => b.classList.toggle('active', b.dataset.theme === data.theme));
}
document.querySelectorAll('.add').forEach(b => b.onclick = () => {
  const k = b.dataset.add;
  data[k].push(k === 'skills' ? { name: 'Новый навык', level: 50 } : k === 'achievements' ? { text: '' } : k === 'pitch' ? { v: '', l: '' } : Object.fromEntries(FIELDS[k].map(f => [f[0], ''])));
  save(); renderList(k); render();
});
document.getElementById('btn-print').onclick = () => { doFit(); setTimeout(() => window.print(), 120); };
window.addEventListener('beforeprint', () => { if (data.fit !== 'off') doFit(); });
window.addEventListener('afterprint', () => { if (data.fit !== 'off') doFit(); });
document.getElementById('btn-export').onclick = () => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  a.download = 'rezume.json'; a.click();
};
document.getElementById('btn-import').onclick = () => document.getElementById('file-import').click();
document.getElementById('file-import').onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  try { data = Object.assign(structuredClone(DEFAULT), JSON.parse(await f.text())); save(); boot(); }
  catch { alert('Не удалось прочитать JSON'); }
};
document.getElementById('btn-reset').onclick = () => {
  if (confirm('Сбросить все данные?')) { data = structuredClone(DEFAULT); save(); boot(); }
};

function boot() { document.getElementById('preset').value = data.preset || 'frontend'; bindSimple(); ['pitch', 'achievements', 'skills', 'projects', 'exp'].forEach(renderList); markTheme(); render(); }
boot();

/* мобильное меню */
const burger = document.getElementById('burger');
if (burger) {
  burger.onclick = () => document.getElementById('panel').classList.toggle('open');
  document.getElementById('paper').addEventListener('click', () => document.getElementById('panel').classList.remove('open'));
}

/* загрузка фото файлом -> dataURL (сжимаем до 500px) */
const bp = document.getElementById('btn-photo');
if (bp) {
  bp.onclick = () => document.getElementById('file-photo').click();
  document.getElementById('btn-photo-del').onclick = () => {
    data.photo = ''; document.getElementById('f-photo').value = ''; save(); render();
  };
  document.getElementById('file-photo').onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();
      img.onload = () => {
        const S = 500, side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2, sy = Math.min(img.height * 0.04, img.height - side);
        const cv = document.createElement('canvas'); cv.width = cv.height = S;
        cv.getContext('2d').drawImage(img, sx, Math.max(0, sy), side, side, 0, 0, S, S);
        data.photo = cv.toDataURL('image/jpeg', 0.85);
        document.getElementById('f-photo').value = '';
        save(); render();
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(f);
  };
}

/* переключатель автоподгонки */
const fm = document.getElementById('fitmode');
if (fm) {
  fm.value = data.fit || 'auto';
  fm.onchange = () => { data.fit = fm.value; save(); render(); };
}
