const KEY = 'rezume.data.v3';

const DEFAULT = {
  theme: 'gemini',
  name: 'Николаева Анжелина Михайловна',
  role: 'Frontend-разработчик (React, TypeScript)',
  city: 'Якутск · удалённо / релокация',
  email: 'Zloipingvin2000@gmail.com',
  phone: '+7 968 151-56-91',
  github: 'github.com/Evil-Pinguin',
  tg: '',
  photo: '',
  about: 'Frontend-разработчик: React + TypeScript, Vite, CSS3 (Grid/Flex/анимации). Делаю приложения целиком — от UI в Figma до деплоя на Vercel с CI/CD, включая serverless-функции и работу с Supabase и AI API. За плечами 4 года преподавания и педагогическое образование: умею объяснять сложное простыми словами, писать понятную документацию и продумывать UX так, чтобы пользователю было легко и приятно. Дополнительно: рисование и анимация в Krita, UI в Figma, видеомонтаж.',
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
      desc: 'Обучение детей программированию: C# и Unity, C++ (SFML), Python, основы веб-разработки, Roblox Studio, разработка визуальных новелл. Авторская методика обучения, разработка методических материалов, сопровождение проектных работ учеников, рисование спрайтов для игр.'
    },
    {
      title: 'Педагогический институт — высшее образование',
      meta: 'Диплом',
      desc: 'Педагогическое образование. Суперсилы для команды: умение объяснять, наставничество, структурная подача информации, эмпатия к пользователю.'
    }
  ]
};

const FIELDS = {
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
  const contacts = [data.city, data.email, data.phone, data.github, data.tg].filter(Boolean)
    .map(c => `<span>${esc(c)}</span>`).join('');

  const skills = data.skills.length ? `<section><h2>Навыки</h2>${data.skills.map(s => `
    <div class="skill"><div class="row"><b>${esc(s.name)}</b><span>${s.level || 0}%</span></div>
    <div class="bar"><i style="width:${Math.min(100, s.level || 0)}%"></i></div></div>`).join('')}</section>` : '';

  const projects = data.projects.length ? `<section><h2>Проекты</h2>${data.projects.map(pr => `
    <div class="entry"><div class="t">${esc(pr.title)}${pr.link ? ` — <a href="${esc(pr.link)}">${esc(pr.link)}</a>` : ''}</div>
    <div class="d">${esc(pr.desc)}</div>
    ${pr.tags ? `<div class="tags">${pr.tags.split(',').map(t => `<span>${esc(t.trim())}</span>`).join('')}</div>` : ''}</div>`).join('')}</section>` : '';

  const exp = data.exp.length ? `<section><h2>Опыт и образование</h2>${data.exp.map(e => `
    <div class="entry"><div class="t">${esc(e.title)}</div><div class="m">${esc(e.meta)}</div>
    <div class="d">${esc(e.desc)}</div></div>`).join('')}</section>` : '';

  p.innerHTML = `
    <div class="head">
      ${data.photo ? `<img class="avatar" src="${esc(data.photo)}" alt="">` : ''}
      <div><h1>${esc(data.name)}</h1><div class="role">${esc(data.role)}</div>
      <div class="contacts">${contacts}</div></div>
    </div>
    ${data.about ? `<section><h2>О себе</h2><p>${esc(data.about)}</p></section>` : ''}
    ${skills}${projects}${exp}`;
}

/* ---------- события ---------- */
document.getElementById('themes').addEventListener('click', e => {
  const b = e.target.closest('.tbtn'); if (!b) return;
  data.theme = b.dataset.theme; save(); markTheme(); render();
});
function markTheme() {
  document.querySelectorAll('.tbtn').forEach(b => b.classList.toggle('active', b.dataset.theme === data.theme));
}
document.querySelectorAll('.add').forEach(b => b.onclick = () => {
  const k = b.dataset.add;
  data[k].push(k === 'skills' ? { name: 'Новый навык', level: 50 } : Object.fromEntries(FIELDS[k].map(f => [f[0], ''])));
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

function boot() { bindSimple(); ['skills', 'projects', 'exp'].forEach(renderList); markTheme(); render(); }
boot();
