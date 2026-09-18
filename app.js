const KEY = 'rezume.data.v6';

const DEFAULT = {
  theme: 'pro',
  name: 'Николаева Анжелина Михайловна',
  role: 'Frontend-разработчик (React, TypeScript)',
  city: 'Якутск · удалённо / релокация',
  email: 'Zloipingvin2000@gmail.com',
  phone: '+7 968 151-56-91',
  github: 'github.com/Evil-Pinguin',
  tg: '',
  photo: '',
  about: 'Frontend-разработчик: React + TypeScript, Vite, CSS3 (Grid/Flex/анимации). Делаю приложения целиком — от UI в Figma до деплоя на Vercel с CI/CD, включая serverless-функции и работу с Supabase и AI API. За плечами 4 года преподавания и более 200 обученных учеников: умею объяснять сложное простыми словами, писать понятную документацию и продумывать UX так, чтобы пользователю было легко и приятно. Дополнительно: рисование и анимация в Krita, UI в Figma, видеомонтаж.',
  achievements: [
    { text: 'Спроектировала и вывела в прод 4 веб-приложения на React: от макета в Figma до автодеплоя на Vercel — все доступны онлайн по ссылке.' },
    { text: 'Внедрила архитектуру Container/Presentational и строгую типизацию TypeScript, что сократило количество ошибок рендеринга и упростило поддержку кода.' },
    { text: 'Реализовала fullstack-интеграцию с LLM через serverless-функцию: ключи изолированы в окружении, ответ модели валидируется и приводится к строгому JSON.' },
    { text: 'Настроила CI/CD на Vercel: каждый push в main автоматически собирается и выкатывается в продакшн.' },
    { text: 'Обучила более 200 учеников программированию за 4 года в двух школах: авторская методика, методические материалы, сопровождение проектных работ.' }
  ],
  skills: [
    { name: 'React (хуки, Context API, Lifting State Up)', level: 80 },
    { name: 'TypeScript (interface, типизация пропсов и стейтов)', level: 70 },
    { name: 'JavaScript ES6+', level: 80 },
    { name: 'HTML5 / CSS3 (Grid, Flex, анимации, адаптив)', level: 85 },
    { name: 'Vite', level: 75 },
    { name: 'Git / GitHub (git flow)', level: 75 },
    { name: 'Vercel: деплой, CI/CD, Serverless Functions', level: 75 },
    { name: 'REST API, fetch, async/await', level: 75 },
    { name: 'Supabase (PostgreSQL, CRUD, .env)', level: 60 },
    { name: 'Web API: Audio, SpeechSynthesis, LocalStorage', level: 70 },
    { name: 'Figma / Krita / видеомонтаж', level: 65 },
    { name: 'C#, Unity, C++ (SFML), Python — база', level: 50 }
  ],
  projects: [
    {
      title: 'LexiCard — изучение английских слов по карточкам',
      desc: 'Fullstack pet-проект. Архитектура Container/Presentational: App.tsx держит бизнес-логику, вёрстка — в типизированных компонентах (StartScreen, Flashcard, ResultScreen, SettingsMenu). AI-генерация словарей: Vercel Serverless Function обращается к Groq API (llama-3.1-8b-instant), ключ спрятан в env. Два режима ответа и два направления перевода, таймер на useEffect + setTimeout с очисткой, повтор ошибок (spaced repetition), озвучка через SpeechSynthesis, звуки на Web Audio API, конфетти, тёмная/светлая тема через CSS-переменные, LocalStorage, адаптив.',
      tags: 'React, TypeScript, Vite, CSS3, Vercel Serverless, Groq API, LocalStorage',
      link: 'github.com/Evil-Pinguin/lexicard'
    },
    {
      title: 'EduQuiz Pro — платформа квизов с конструктором',
      desc: 'Два режима: прохождение теста и редактор вопросов. Lifting State Up, Context API для тёмной темы, продвинутый таймер на setInterval с настройкой длительности, отключением и цветом по проценту оставшегося времени. Валидация форм, прогресс-бар, сохранение вопросов и настроек в LocalStorage, адаптивная вёрстка, деплой на Vercel.',
      tags: 'React, JavaScript ES6+, Context API, CSS3, Vercel',
      link: 'my-edu-quiz.vercel.app'
    },
    {
      title: 'Wedding Invite — сайт-приглашение с RSVP',
      desc: 'Fullstack на React + TS + Supabase. Hero, обратный отсчёт (setInterval с clearInterval), таймлайн дня, CSS Grid галерея. Форма RSVP с контролируемыми инпутами, типизацией, async/await записью в PostgreSQL, состояниями загрузки и ошибки, конфетти при подтверждении. Ключи в .env, переменные окружения на Vercel.',
      tags: 'React, TypeScript, Supabase, PostgreSQL, CSS3, Vercel',
      link: ''
    },
    {
      title: 'Поиск фильмов',
      desc: 'React-приложение с работой с внешним API: поиск, загрузка и отображение данных, обработка состояний загрузки.',
      tags: 'React, REST API, CSS',
      link: ''
    }
  ],
  exp: [
    {
      title: 'Frontend-разработчик (pet-проекты, коммерческого уровня)',
      meta: '2024 — настоящее время',
      desc: 'Самостоятельная разработка SPA на React + TypeScript: проектирование архитектуры, типизация, интеграция с REST и AI API, serverless-функции, БД Supabase, деплой и CI/CD на Vercel, написание README и документации.'
    },
    {
      title: 'Преподаватель информатики / программирования — 2 школы ДО',
      meta: '4 года',
      desc: 'Обучила более 200 учеников программированию: C# и Unity, C++ (SFML), Python, основы веб-разработки, Roblox Studio, разработка визуальных новелл. Авторская методика обучения, разработка методических материалов, сопровождение проектных работ, рисование спрайтов для игр.'
    },
    {
      title: 'Педагогический институт — высшее образование',
      meta: 'Диплом',
      desc: 'Педагогическое образование. Суперсилы для команды: умение объяснять, наставничество, структурная подача информации, эмпатия к пользователю.'
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
  frontend: { label: 'Frontend-разработчик', data: () => structuredClone(DEFAULT) },

  research: {
    label: 'Специалист по количественным исследованиям',
    data: () => ({
      ...structuredClone(DEFAULT),
      theme: 'pro',
      role: 'Специалист по количественным исследованиям / аналитик данных',
      achievements: [
        { text: '4 года собирала и интерпретировала количественные данные по выборке более 200 учеников: диагностические срезы по группам, анализ типовых ошибок, корректировка программы по результатам.' },
        { text: 'Самостоятельно разработала две платформы тестирования со сбором ответов, подсчётом точности и визуализацией прогресса — инструменты сбора данных под собственные задачи.' },
        { text: 'Готовила аналитическую отчётность для администрации и защищала выводы перед аудиторией.' },
        { text: 'Работаю с данными в Python и SQL (PostgreSQL), оформляю результаты в наглядные отчёты и инфографику.' }
      ],
      about: 'Аналитик с педагогическим образованием и опытом работы с данными об обучении. Четыре года преподавала в двух школах и работала с данными более 200 учеников: проектировала тесты и методики, собирала и интерпретировала результаты, на их основе перестраивала программу — это и есть работа с количественными данными о поведении людей. Технически: Python, SQL/PostgreSQL, JavaScript; самостоятельно разработала две платформы тестирования (EduQuiz Pro и LexiCard) со сбором статистики ответов, метриками точности и визуализацией прогресса. Умею превращать цифры в понятные выводы и защищать их перед аудиторией — этому меня научили четыре года у доски.',
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
        { name: 'Figma, Krita — оформление отчётов и инфографики', level: 70 }
      ],
      projects: [
        { title: 'EduQuiz Pro — платформа тестирования со сбором результатов', desc: 'Разработала конструктор тестов и режим прохождения: фиксация ответов, подсчёт правильных/неправильных, прогресс, хранение результатов. По сути — инструмент сбора количественных данных об аудитории. Задеплоено, работает онлайн.', tags: 'React, JavaScript, аналитика ответов, LocalStorage', link: 'my-edu-quiz.vercel.app' },
        { title: 'LexiCard — приложение с метриками обучения', desc: 'Считает точность ответов, собирает ошибочные элементы в отдельную выборку для повторного прохождения (spaced repetition), выводит честную итоговую статистику и историю выученного. Генерация наборов данных через AI API.', tags: 'React, TypeScript, метрики, Serverless, Groq API', link: 'github.com/Evil-Pinguin/lexicard' },
        { title: 'Методическая аналитика в школе', desc: 'Четыре года: разработка контрольных и диагностических работ, сбор и обработка результатов по выборке 200+ учеников, анализ типовых ошибок и корректировка программы по итогам. Подготовка отчётов для администрации.', tags: 'анализ результатов, отчётность, методология', link: '' }
      ],
      exp: [
        { title: 'Преподаватель информатики и программирования — 2 школы ДО', meta: '4 года', desc: 'Диагностика уровня более 200 учеников, разработка тестов и критериев оценивания, сбор и анализ результатов по группам, корректировка программы по данным. Отчётность, методические материалы, сопровождение проектных работ.' },
        { title: 'Разработчик аналитических веб-приложений (pet-проекты)', meta: '2024 — настоящее время', desc: 'Разработка платформ тестирования со сбором и визуализацией метрик, работа с PostgreSQL через Supabase, обработка данных на Python и JavaScript.' },
        { title: 'Педагогический институт — высшее образование', meta: 'Диплом', desc: 'Педагогика. Методология обучения, оценивание, работа с результатами и статистикой успеваемости.' }
      ]
    })
  },

  qa: {
    label: 'QA Engineer (Junior/Middle)',
    data: () => ({
      ...structuredClone(DEFAULT),
      theme: 'pro',
      role: 'QA Engineer (ручное тестирование, frontend)',
      achievements: [
        { text: 'Тестирую собственные продукты полным циклом: функциональные и негативные сценарии, граничные значения, адаптив, кроссбраузерность, регресс перед релизом.' },
        { text: 'Нахожу и устраняю дефекты асинхронной логики — гонки состояний, незавершённые таймеры, утечки эффектов при размонтировании.' },
        { text: 'Проверяю интеграции с REST API: коды ответов, обработка ошибок сети, некорректные и пустые данные.' },
        { text: '4 года педагогической практики и работы с 200+ учениками: точное описание проблемы по шагам, детальный разбор ошибок, письменная обратная связь — базовый навык баг-репорта.' }
      ],
      about: 'Начинающий QA-инженер с реальным опытом разработки: знаю, как приложение устроено изнутри, поэтому понимаю, где оно ломается. Писала фронтенд на React + TypeScript, работала с API, DevTools и консолью браузера, отлаживала асинхронную логику (таймеры, гонки состояний, утечки эффектов) — это классические источники дефектов. Педагогический опыт (4 года, 200+ учеников) дал главный навык тестировщика: дотошность, умение чётко описать проблему и воспроизвести её по шагам. Проверяю продукт глазами пользователя, который видит его впервые.',
      skills: [
        { name: 'Ручное функциональное тестирование', level: 70 },
        { name: 'Тест-кейсы, чек-листы, баг-репорты', level: 70 },
        { name: 'Тестирование API (fetch, REST, коды ответов)', level: 70 },
        { name: 'DevTools: Network, Console, адаптив', level: 80 },
        { name: 'Кроссбраузерное и мобильное тестирование', level: 75 },
        { name: 'SQL (выборки, проверка данных)', level: 55 },
        { name: 'Git / GitHub', level: 75 },
        { name: 'JavaScript / TypeScript (чтение и правка кода)', level: 80 },
        { name: 'Автотесты: Vitest, Testing Library — изучаю', level: 40 },
        { name: 'Внимательность к деталям, UX-экспертиза', level: 90 }
      ],
      projects: [
        { title: 'LexiCard — самостоятельное тестирование продукта', desc: 'Проверяла сценарии: таймаут ответа, автопереход, повторное прохождение ошибок, регистр и пробелы во вводе, поведение при пустом и некорректном ответе API, адаптив до 480px, переключение тем. Находила и чинила дефекты асинхронности (незавершённые таймеры при размонтировании).', tags: 'функциональное тестирование, API, адаптив, регресс', link: 'github.com/Evil-Pinguin/lexicard' },
        { title: 'EduQuiz Pro — валидация форм и граничные значения', desc: 'Тестировала конструктор вопросов: валидация пустых полей, граничные значения таймера, сохранение состояния после перезагрузки, конфликт ручного ответа и автосброса таймера.', tags: 'граничные значения, валидация, регресс', link: 'my-edu-quiz.vercel.app' },
        { title: 'Wedding Invite — тестирование формы и БД', desc: 'Проверка отправки формы в PostgreSQL: состояния загрузки, обработка ошибок сети, корректность записи данных в таблицу, повторная отправка.', tags: 'формы, БД, негативные сценарии', link: '' }
      ],
      exp: [
        { title: 'Frontend-разработчик / самостоятельное QA (pet-проекты)', meta: '2024 — настоящее время', desc: 'Полный цикл: разработка, тестирование и выпуск веб-приложений. Проверка функциональности, адаптива, работы с API, отладка через DevTools, ведение списка дефектов.' },
        { title: 'Преподаватель информатики — 2 школы ДО', meta: '4 года', desc: 'Разработка критериев оценивания и проверочных работ для 200+ учеников, детальный разбор ошибок, письменная обратная связь. Навык точно описывать проблему и воспроизводить её по шагам.' },
        { title: 'Педагогический институт — высшее образование', meta: 'Диплом', desc: 'Педагогическое образование.' }
      ]
    })
  }
};

const FIELDS = {
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

/* ---------- форма ---------- */
function bindSimple() {
  ['name', 'role', 'city', 'email', 'phone', 'github', 'tg', 'photo', 'about'].forEach(k => {
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

  const ct = [];
  if (data.phone) ct.push(['Телефон', data.phone]);
  if (data.email) ct.push(['Email', data.email]);
  if (data.github) ct.push(['GitHub', data.github]);
  if (data.tg) ct.push(['Telegram', data.tg]);
  if (data.city) ct.push(['Локация', data.city]);

  const contactsInline = ct.map(([, v]) => `<span>${esc(v)}</span>`).join('<em>·</em>');

  const ach = (data.achievements || []).filter(a => a.text);
  const achBlock = ach.length ? `<section class="s-ach"><h2>Ключевые достижения</h2>
    <ul class="bullets">${ach.map(a => `<li>${esc(a.text)}</li>`).join('')}</ul></section>` : '';

  const exp = data.exp.length ? `<section><h2>Опыт работы и образование</h2>${data.exp.map(e => `
    <div class="entry"><div class="erow"><div class="t">${esc(e.title)}</div><div class="m">${esc(e.meta)}</div></div>
    <div class="d">${esc(e.desc)}</div></div>`).join('')}</section>` : '';

  const projects = data.projects.length ? `<section><h2>Проекты</h2>${data.projects.map(pr => `
    <div class="entry"><div class="erow"><div class="t">${esc(pr.title)}</div>
    ${pr.link ? `<div class="m link">${esc(pr.link)}</div>` : ''}</div>
    <div class="d">${esc(pr.desc)}</div>
    ${pr.tags ? `<div class="tags">${pr.tags.split(',').filter(t => t.trim()).map(t => `<span>${esc(t.trim())}</span>`).join('')}</div>` : ''}</div>`).join('')}</section>` : '';

  const skills = data.skills.length ? `<section><h2>Навыки</h2>${data.skills.map(s => `
    <div class="skill"><div class="row"><b>${esc(s.name)}</b><span>${s.level || 0}%</span></div>
    <div class="bar"><i style="width:${Math.min(100, s.level || 0)}%"></i></div></div>`).join('')}</section>` : '';

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
    ${data.about ? `<section class="s-about"><h2>Профиль</h2><p>${esc(data.about)}</p></section>` : ''}
    <div class="cols2">
      <div class="colmain">${achBlock}${exp}${projects}</div>
      <aside class="colside">${skills}${contactsCol}</aside>
    </div>`;
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
  data[k].push(k === 'skills' ? { name: 'Новый навык', level: 50 } : k === 'achievements' ? { text: '' } : Object.fromEntries(FIELDS[k].map(f => [f[0], ''])));
  save(); renderList(k); render();
});
document.getElementById('btn-print').onclick = () => window.print();
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

function boot() { document.getElementById('preset').value = data.preset || 'frontend'; bindSimple(); ['achievements', 'skills', 'projects', 'exp'].forEach(renderList); markTheme(); render(); }
boot();

/* мобильное меню */
const burger = document.getElementById('burger');
if (burger) {
  burger.onclick = () => document.getElementById('panel').classList.toggle('open');
  document.getElementById('paper').addEventListener('click', () => document.getElementById('panel').classList.remove('open'));
}
