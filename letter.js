/* ====== БАЗА НАВЫКОВ ======
   level: 2 = уверенно, 1 = базово/в процессе, 0 = не знаю (но есть смежное)
   kw    = слова, по которым ищем требование в тексте вакансии            */
const SKILLS = [
  { n: 'React', lvl: 2, kw: ['react', 'реакт'], proof: 'два SPA на React с продуманной архитектурой (Container/Presentational, Lifting State Up, Context API)' },
  { n: 'TypeScript', lvl: 2, kw: ['typescript', ' ts ', 'тайпскрипт'], proof: 'LexiCard полностью на TypeScript: типизированные пропсы, стейты и интерфейсы данных' },
  { n: 'JavaScript ES6+', lvl: 2, kw: ['javascript', 'js', 'es6', 'джаваскрипт'], proof: 'весь мой фронтенд написан на современном JS: async/await, деструктуризация, модули' },
  { n: 'HTML5 / CSS3', lvl: 2, kw: ['html', 'css', 'вёрстк', 'верстк', 'scss', 'sass', 'less'], proof: 'адаптивная вёрстка на Grid и Flex, CSS-анимации, темизация через CSS-переменные' },
  { n: 'Адаптив / кроссбраузерность', lvl: 2, kw: ['адаптив', 'responsive', 'кроссбраузер', 'mobile'], proof: 'мобильная вёрстка через media-queries во всех проектах' },
  { n: 'Vite', lvl: 2, kw: ['vite', 'вайт', 'сборщик', 'webpack', 'bundler'], proof: 'все проекты собраны на Vite' },
  { n: 'Git / GitHub', lvl: 2, kw: ['git', 'гит', 'github', 'gitlab', 'версион'], proof: 'веду разработку через ветки и осмысленные коммиты' },
  { n: 'REST API / fetch', lvl: 2, kw: ['rest', 'api', 'fetch', 'axios', 'http'], proof: 'интеграции с внешними API, включая обработку загрузки и ошибок' },
  { n: 'Деплой, CI/CD (Vercel)', lvl: 2, kw: ['deploy', 'деплой', 'ci/cd', 'ci', 'vercel', 'netlify', 'выкатк'], proof: 'настроен автодеплой на Vercel, проекты доступны онлайн по ссылке' },
  { n: 'Serverless-функции', lvl: 2, kw: ['serverless', 'lambda', 'cloud function', 'бессервер'], proof: 'написала serverless-функцию на Vercel как прокси к AI API со скрытием ключа' },
  { n: 'Интеграция AI / LLM', lvl: 2, kw: ['ai', 'llm', 'gpt', 'нейросет', 'openai', 'ml'], proof: 'подключила Groq API (llama-3.1) с проектированием промпта под строгий JSON-ответ' },
  { n: 'UI/UX, Figma', lvl: 2, kw: ['figma', 'фигма', 'ui', 'ux', 'дизайн', 'макет'], proof: 'собираю UI в Figma сама, есть насмотренность в анимациях и внимание к деталям' },
  { n: 'LocalStorage / Web API', lvl: 2, kw: ['localstorage', 'web api', 'браузерн'], proof: 'использую LocalStorage, Web Audio API и SpeechSynthesis в продакшн-проектах' },
  { n: 'Работа с БД (Supabase/PostgreSQL)', lvl: 1, kw: ['supabase', 'postgres', 'sql', 'бд', 'база данных', 'firebase'], proof: 'в проекте Wedding Invite реализовала запись форм в PostgreSQL через Supabase' },
  { n: 'Redux / Zustand', lvl: 1, kw: ['redux', 'zustand', 'mobx', 'стейт-менеджер', 'state management'], proof: 'управляю состоянием через Context API, стейт-менеджеры изучаю сейчас' },
  { n: 'Next.js', lvl: 1, kw: ['next.js', 'nextjs', 'next ', 'ssr', 'ssg'], proof: 'знакома с Vercel-экосистемой и серверными функциями, Next.js в активном изучении' },
  { n: 'Тестирование', lvl: 1, kw: ['jest', 'vitest', 'тест', 'testing', 'cypress', 'playwright'], proof: 'изучаю Vitest и Testing Library, готова писать тесты с первого дня' },
  { n: 'Node.js', lvl: 1, kw: ['node', 'express', 'nest'], proof: 'писала серверную логику в serverless-функциях на Node' },
  { n: 'Tailwind / Bootstrap', lvl: 1, kw: ['tailwind', 'bootstrap', 'material', 'antd', 'ui-кит', 'ui kit'], proof: 'CSS знаю глубоко, на любой UI-фреймворк перехожу за пару дней' },
  { n: 'C# / .NET', lvl: 1, kw: ['c#', 'c sharp', 'шарп', '.net', 'asp'], proof: 'писала на C# приложения и игры, четыре года преподавала C# — более 200 учеников' },
  { n: 'Unity', lvl: 1, kw: ['unity', 'юнити', 'геймдев', 'gamedev', 'game dev'], proof: 'разрабатывала игры и визуальные новеллы на Unity, вела курс по Unity в школе' },
  { n: 'C++', lvl: 1, kw: ['c++', 'си плюс', 'cpp', 'sfml'], proof: 'писала графические приложения на C++ с SFML и преподавала C++' },
  { n: 'Python', lvl: 1, kw: ['python', 'питон', 'пайтон', 'django', 'flask'], proof: 'использую Python для скриптов и автоматизации, преподавала его четыре года' },
  { n: 'PHP', lvl: 0, kw: ['php', 'laravel', 'битрикс', 'bitrix', 'wordpress'], proof: '' },
  { n: 'Vue / Angular / Svelte', lvl: 0, kw: ['vue', 'angular', 'svelte', 'nuxt'], proof: '' },
  { n: 'Docker / DevOps', lvl: 0, kw: ['docker', 'kubernetes', 'nginx', 'linux'], proof: '' },
  { n: 'GraphQL', lvl: 0, kw: ['graphql', 'apollo'], proof: '' },
  { n: 'Мобильная разработка', lvl: 0, kw: ['react native', 'flutter', 'android', 'ios', 'kotlin', 'swift'], proof: '' },
  { n: 'Английский язык', lvl: 1, kw: ['английск', 'english', 'intermediate', 'b1', 'b2'], proof: 'свободно читаю техническую документацию на английском' },
  { n: 'Ответственность, работа в команде', lvl: 2, kw: ['ответствен', 'команд', 'стрессоустойч', 'многозадачн', 'дедлайн', 'инициатив', 'самостоятельн'], proof: 'несколько лет волонтёрю на крупных мероприятиях — международных играх «Дети Азии», фестивале «Муус устар» и «Играх Манчаары», где работа в команде и надёжность критичны' },
  { n: 'Быстрая обучаемость', lvl: 2, kw: ['обучаем', 'быстро учи', 'осваива', 'развива', 'новые технолог', 'гибк'], proof: 'за последний год самостоятельно освоила TypeScript, serverless-функции, работу с БД и интеграцию LLM — новые задачи подхватываю на лету' },
  { n: 'Обучение / менторство', lvl: 2, kw: ['обучен', 'ментор', 'наставни', 'преподав', 'edtech', 'документаци', 'коммуникаб', 'команд'], proof: 'четыре года преподавала программирование и обучила более 200 учеников, писала методические материалы и вела проектные работы' }
];

const $ = id => document.getElementById(id);
const V = { role: '', company: '', hr: '', text: '' };
const LKEY = 'rezume.letter.v1';

/* ---------- сохранение полей ---------- */
['v-role', 'v-company', 'v-hr', 'v-text', 'v-tone'].forEach(id => {
  const el = $(id);
  el.addEventListener('input', persist);
});
document.querySelectorAll('.check input').forEach(c => c.addEventListener('change', () => { persist(); run(); }));
$('v-tone').addEventListener('change', run);

function persist() {
  const d = {};
  ['v-role', 'v-company', 'v-hr', 'v-text', 'v-tone'].forEach(id => d[id] = $(id).value);
  document.querySelectorAll('.check input').forEach(c => d[c.id] = c.checked);
  localStorage.setItem(LKEY, JSON.stringify(d));
}
function restore() {
  try {
    const d = JSON.parse(localStorage.getItem(LKEY) || '{}');
    Object.entries(d).forEach(([k, v]) => { const el = $(k); if (!el) return; el.type === 'checkbox' ? el.checked = v : el.value = v; });
  } catch { }
}

/* ---------- анализ ---------- */
function analyze() {
  const t = ' ' + $('v-text').value.toLowerCase().replace(/\s+/g, ' ') + ' ';
  const hit = s => s.kw.some(k => t.includes(k));
  const req = SKILLS.filter(hit);
  const have = req.filter(s => s.lvl === 2);
  const part = req.filter(s => s.lvl === 1);
  const miss = req.filter(s => s.lvl === 0);
  const total = req.length || 1;
  const score = Math.round(((have.length + part.length * 0.5) / total) * 100);
  return { req, have, part, miss, score };
}

function renderMatch(a) {
  const empty = a.req.length === 0;
  $('score').textContent = empty ? '—' : a.score + '%';
  $('ring').style.background = `conic-gradient(${a.score >= 70 ? '#5ce39a' : a.score >= 45 ? '#ffce5c' : '#ff7a7a'} ${a.score * 3.6}deg,#262c3d 0deg)`;

  const fill = (id, arr) => $(id).innerHTML = arr.length ? arr.map(s => `<li>${s.n}</li>`).join('') : '<li style="opacity:.4">—</li>';
  fill('list-have', a.have); fill('list-part', a.part); fill('list-miss', a.miss);

  if (empty) { $('verdict').textContent = 'Вставь текст вакансии слева и нажми «Проанализировать».'; $('advice').innerHTML = ''; return; }

  $('verdict').innerHTML = a.score >= 70
    ? '<b>Откликайся смело.</b> Ты закрываешь основную часть требований — это твоя вакансия.'
    : a.score >= 45
      ? '<b>Стоит откликнуться.</b> Половина требований закрыта, остальное реально добрать в процессе — так делают почти все. Не отсеивай себя сама, это работа рекрутера.'
      : '<b>Вакансия на вырост.</b> Совпадений мало, но отклик всё равно имеет смысл: иногда берут за потенциал. Просто не жди быстрого ответа и не считай отказ оценкой себя.';

  const li = [];
  if (a.miss.length) li.push(`Пробелы: <b>${a.miss.map(s => s.n).join(', ')}</b>. Не ври в письме — честно напиши «не работала, готова освоить к старту».`);
  if (a.part.length) li.push(`Подтянуть за пару вечеров перед собесом: <b>${a.part.map(s => s.n).join(', ')}</b>.`);
  li.push('В письме упоминай только то, что реально есть в вакансии — обобщённые письма видно сразу.');
  li.push('Обязательно приложи живые ссылки на проекты: работающая демка сильнее любого списка навыков.');
  $('advice').innerHTML = '<b>Рекомендации по этому отклику:</b><ul>' + li.map(x => `<li>${x}</li>`).join('') + '</ul>';
}

/* ---------- письмо ---------- */
function buildLetter(a) {
  const role = $('v-role').value.trim() || 'разработчика';
  const comp = $('v-company').value.trim();
  const hr = $('v-hr').value.trim();
  const tone = $('v-tone').value;
  const gamedev = $('v-gamedev').checked;
  const compIn = comp ? ` в компанию ${comp}` : '';
  const compTo = comp ? ` в ${comp}` : '';

  const greet = hr ? `${hr}, здравствуйте!` : 'Здравствуйте!';

  const intro = gamedev
    ? `Меня зовут Анжелина, откликаюсь на вакансию «${role}»${compIn}. Пишу на C#, C++ и Python, разрабатывала игры и визуальные новеллы на Unity (C#) и графические приложения на C++ с SFML, а четыре года преподавала программирование на этих языках и обучила более 200 учеников — то есть знаю их достаточно глубоко, чтобы объяснять другим.`
    : `Меня зовут Анжелина, откликаюсь на вакансию «${role}»${compIn}. Я frontend-разработчик: пишу на React и TypeScript, собираю проекты на Vite и довожу их до рабочего состояния в проде — от макета в Figma до деплоя на Vercel с автосборкой.`;

  const proofs = a.have.concat(a.part).filter(s => s.proof).slice(0, 5);
  const match = proofs.length
    ? `По вашим требованиям:\n` + proofs.map(s => `— ${s.n}: ${s.proof}.`).join('\n')
    : (gamedev
      ? `Из релевантного: разработка игр на Unity и C#, приложения на C++ (SFML), скрипты на Python, а также фронтенд на React + TypeScript с деплоем на Vercel.`
      : `Из релевантного: React + TypeScript, адаптивная вёрстка на CSS Grid/Flex, работа с REST API, Git и деплой на Vercel.`);

  const gaps = a.miss.length
    ? `\n\nЧестно о пробелах: с ${a.miss.map(s => s.n).join(' и ')} в проде я пока не работала. Я быстро учусь — за последний год самостоятельно освоила TypeScript, serverless-функции и работу с базой данных, так что готова закрыть это к старту или в первые недели.`
    : '';

  const portfolio = gamedev
    ? `\n\nЧто можно посмотреть:\n— LexiCard — приложение для изучения слов: React + TypeScript, AI-генерация контента через serverless-функцию, таймеры, звуки, геймификация. github.com/Evil-Pinguin/lexicard\n— EduQuiz Pro — платформа квизов с конструктором: my-edu-quiz.vercel.app\n— Игры и визуальные новеллы на Unity/C# и приложения на C++ (SFML), спрайты рисовала сама в Krita.`
    : `\n\nЧто можно посмотреть прямо сейчас:\n— LexiCard — приложение для изучения английских слов: React + TypeScript, генерация словарей через AI (serverless-функция на Vercel, ключ скрыт в env), режимы ответа, таймер, повтор ошибок, звуки и тёмная тема. github.com/Evil-Pinguin/lexicard\n— EduQuiz Pro — платформа квизов с конструктором вопросов, Context API, настраиваемый таймер, LocalStorage: my-edu-quiz.vercel.app\n— Wedding Invite — сайт-приглашение с формой RSVP и записью в PostgreSQL через Supabase.`;

  const teacher = $('v-teacher').checked
    ? `\n\nДо разработки я четыре года преподавала программирование в двух школах и обучила более 200 учеников: вела C#/Unity, C++, Python и веб, писала методические материалы и сопровождала проектные работы учеников. Это дало мне то, что редко встречается у разработчиков моего уровня: умение внятно объяснять решения на ревью, писать документацию, которую действительно читают, и смотреть на интерфейс глазами человека, который видит его впервые.`
    : '';

  const personal = `\n\nО себе как о сотруднике: новые задачи и технологии подхватываю на лету, довожу начатое до конца и отвечаю за результат. Несколько лет волонтёрю на крупных мероприятиях республики — международных играх «Дети Азии», фестивале «Муус устар» с самого первого сезона и «Играх Манчаары». Это работа в команде в условиях, где нельзя подвести и нужно быстро принимать решения.`;

  const vision = $('v-vision').checked
    ? `\n\nЯ вижу себя в этой должности: мне нравится доводить продукт до состояния, когда им удобно пользоваться, и я хочу расти именно как ${gamedev ? 'разработчик' : 'frontend-разработчик'} в команде${compTo}, где есть код-ревью и люди, у которых можно учиться. Я готова начинать с задач любого масштаба и брать на себя ответственность за результат, а не только за свой кусок кода.`
    : '';

  const reloc = $('v-relocate').checked ? ' Готова к релокации и к работе по московскому времени.' : ' Работаю удалённо, живу в Якутске, к работе по московскому времени готова.';

  const feedback = $('v-feedback').checked
    ? `\n\nЕсли по итогам рассмотрения решение будет отрицательным — пожалуйста, дайте короткую обратную связь: чего именно не хватило. Для меня это самый ценный ориентир, что подтянуть дальше, и я буду искренне благодарна даже за пару строк.`
    : '';

  const outro = `\n\nБуду рада обсудить задачи голосом или в переписке.${reloc}\n\nС уважением,\nНиколаева Анжелина Михайловна\nТелефон: +7 968 151-56-91\nEmail: Zloipingvin2000@gmail.com\nGitHub: github.com/Evil-Pinguin`;

  if (tone === 'short') {
    return `${greet}\n\n${intro}\n\n${match}${gaps}\n\nПортфолио: github.com/Evil-Pinguin — проекты задеплоены и открываются по ссылке.${personal}${vision}${feedback}${outro}`;
  }
  if (tone === 'warm') {
    return `${greet}\n\n${intro} Вакансия${compTo ? ' у вас' : ''} откликнулась мне тем, что здесь важен не просто «закрытый тикет», а продукт, которым приятно пользоваться — я как раз про это.\n\n${match}${gaps}${portfolio}${teacher}${personal}${vision}${feedback}${outro}`;
  }
  return `${greet}\n\n${intro}\n\n${match}${gaps}${portfolio}${teacher}${personal}${vision}${feedback}${outro}`;
}

/* ---------- запуск ---------- */
function run() {
  const a = analyze();
  renderMatch(a);
  $('out').value = buildLetter(a);
  updCount();
  persist();
}
function updCount() {
  const v = $('out').value;
  $('count').textContent = `${v.length} символов, ~${v.split(/\s+/).filter(Boolean).length} слов.`;
}
$('out').addEventListener('input', updCount);
$('btn-analyze').onclick = run;
$('btn-copy').onclick = async () => {
  try { await navigator.clipboard.writeText($('out').value); }
  catch { $('out').select(); document.execCommand('copy'); }
  const b = $('btn-copy'); b.textContent = 'Скопировано ✓';
  setTimeout(() => b.textContent = 'Скопировать', 1600);
};
$('btn-txt').onclick = () => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([$('out').value], { type: 'text/plain;charset=utf-8' }));
  a.download = 'cover-letter.txt'; a.click();
};

restore();
run();
