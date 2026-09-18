const KEY = 'rezume.data.v1';

const DEFAULT = {
  theme: 'neon',
  name: 'Ваше Имя',
  role: 'Программист (C++ / C# / Python)',
  city: 'Россия',
  email: 'you@mail.com',
  phone: '+7 900 000-00-00',
  github: 'github.com/yourname',
  tg: '@yourname',
  photo: '',
  about: 'Разработчик. Уверенно пишу на C++ и C#, хорошо знаю Python. Верстаю и деплою сайты на Vercel. Быстро разбираюсь в новых технологиях, довожу задачи до рабочего результата.',
  skills: [
    { name: 'C++', level: 85 },
    { name: 'C#', level: 85 },
    { name: 'Python', level: 70 },
    { name: 'HTML / CSS / вёрстка', level: 75 },
    { name: 'JavaScript', level: 60 },
    { name: 'Git / GitHub', level: 70 },
    { name: 'Deploy: Vercel', level: 70 }
  ],
  projects: [
    { title: 'Генератор резюме', desc: 'Веб-приложение для сборки резюме в 5 стилях, экспорт в PDF. Задеплоено на Vercel.', tags: 'JavaScript, CSS, Vercel', link: '' }
  ],
  exp: [
    { title: 'Учебные и pet-проекты', meta: '2023 — настоящее время', desc: 'Разработка приложений на C++ и C#, автоматизация на Python, вёрстка сайтов и деплой на Vercel.' }
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
