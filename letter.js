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
  { n: 'C# / .NET', lvl: 1, kw: ['c#', 'c sharp', 'шарп', '.net', 'asp'], proof: 'писала на C# приложения и игры, четыре года преподавала C# - более 200 учеников' },
  { n: 'Unity', lvl: 2, kw: ['unity', 'юнити', 'геймдев', 'gamedev', 'game dev', 'игров'], proof: 'разрабатывала игры и визуальные новеллы на Unity полным циклом - логика, сцены, интерфейс, и четыре года преподавала Unity' },
  { n: '2D-графика и анимация', lvl: 2, kw: ['2d', 'спрайт', 'анимац', 'график', 'художн', 'арт', 'krita', 'photoshop'], proof: 'рисую и анимирую спрайты сама в Krita, весь визуал моих игр мой' },
  { n: 'Геймдизайн', lvl: 1, kw: ['геймдизайн', 'game design', 'механик', 'сценар', 'нарратив', 'диалог'], proof: 'делала визуальные новеллы со сценарной структурой и ветвлением диалогов' },
  { n: 'Мобильные игры / F2P', lvl: 0, kw: ['free-to-play', 'f2p', 'монетизац', 'мобильн игр', 'ios/android игр'], proof: '' },
  { n: 'C++', lvl: 1, kw: ['c++', 'си плюс', 'cpp', 'sfml'], proof: 'писала графические приложения на C++ с SFML и преподавала C++' },
  { n: 'Python', lvl: 1, kw: ['python', 'питон', 'пайтон', 'django', 'flask'], proof: 'использую Python для скриптов и автоматизации, преподавала его четыре года' },
  { n: 'PHP', lvl: 0, kw: ['php', 'laravel', 'битрикс', 'bitrix', 'wordpress'], proof: '' },
  { n: 'Vue / Angular / Svelte', lvl: 0, kw: ['vue', 'angular', 'svelte', 'nuxt'], proof: '' },
  { n: 'Docker / DevOps', lvl: 0, kw: ['docker', 'kubernetes', 'nginx', 'linux'], proof: '' },
  { n: 'GraphQL', lvl: 0, kw: ['graphql', 'apollo'], proof: '' },
  { n: 'Мобильная разработка', lvl: 0, kw: ['react native', 'flutter', 'android', 'ios', 'kotlin', 'swift'], proof: '' },
  { n: 'Linux', lvl: 1, kw: ['linux', 'линукс', 'ubuntu', 'bash', 'терминал'], proof: 'разработала обучающий сайт по основам Linux, работаю в терминале' },
  { n: 'Автоматизация процессов', lvl: 2, kw: ['автоматизац', 'скрипт', 'бот', 'ассистент', 'оптимизац процесс', 'рутин'], proof: 'написала Aurora - голосового помощника для компьютера и набор личных веб-инструментов, чтобы не делать рутину руками' },
  { n: 'Работа с ИИ', lvl: 2, kw: ['ии', 'ai', 'gpt', 'llm', 'нейросет', 'промпт', 'chatgpt', 'copilot'], proof: 'использую ИИ каждый день в разработке и встроила модель в свой продукт через serverless-функцию с валидацией ответа' },
  { n: 'Английский язык', lvl: 1, kw: ['английск', 'english', 'intermediate', 'b1', 'b2'], proof: 'свободно читаю техническую документацию на английском' },
  { n: 'Ответственность, работа в команде', lvl: 2, kw: ['ответствен', 'команд', 'стрессоустойч', 'многозадачн', 'дедлайн', 'инициатив', 'самостоятельн'], proof: 'несколько лет волонтёрю на крупных мероприятиях - международных играх «Дети Азии», фестивале «Муус устар» и «Играх Манчаары», где работа в команде и надёжность критичны' },
  { n: 'Быстрая обучаемость', lvl: 2, kw: ['обучаем', 'быстро учи', 'осваива', 'развива', 'новые технолог', 'гибк'], proof: 'за последний год самостоятельно освоила TypeScript, serverless-функции, работу с БД и интеграцию LLM - новые задачи подхватываю на лету' },
  { n: 'Обучение / менторство', lvl: 2, kw: ['обучен', 'ментор', 'наставни', 'преподав', 'edtech', 'документаци', 'коммуникаб'], proof: 'четыре года преподавала программирование и обучила больше 200 учеников, писала методические материалы, вела проектные работы до научных конференций, мои ученицы побеждали на муниципальной олимпиаде' }
];

const $ = id => document.getElementById(id);
const V = { role: '', company: '', hr: '', text: '' };
const LKEY = 'rezume.letter.v1';

/* ---------- сохранение полей ---------- */
['v-role', 'v-company', 'v-hr', 'v-text', 'v-tone', 'v-prof', 'v-len'].forEach(id => {
  const el = $(id);
  el.addEventListener('input', persist);
});
document.querySelectorAll('.check input').forEach(c => c.addEventListener('change', () => { persist(); run(); }));
$('v-tone').addEventListener('change', run);
['v-prof', 'v-len'].forEach(id => { const el = $(id); if (el) el.addEventListener('change', run); });

function persist() {
  const d = {};
  ['v-role', 'v-company', 'v-hr', 'v-text', 'v-tone', 'v-prof', 'v-len'].forEach(id => d[id] = $(id).value);
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
  $('score').textContent = empty ? '-' : a.score + '%';
  $('ring').style.background = `conic-gradient(${a.score >= 70 ? '#5ce39a' : a.score >= 45 ? '#ffce5c' : '#ff7a7a'} ${a.score * 3.6}deg,#262c3d 0deg)`;

  const fill = (id, arr) => $(id).innerHTML = arr.length ? arr.map(s => `<li>${s.n}</li>`).join('') : '<li style="opacity:.4">-</li>';
  fill('list-have', a.have); fill('list-part', a.part); fill('list-miss', a.miss);

  if (empty) { $('verdict').textContent = 'Вставь текст вакансии слева и нажми «Проанализировать».'; $('advice').innerHTML = ''; return; }

  $('verdict').innerHTML = a.score >= 70
    ? '<b>Откликайся смело.</b> Ты закрываешь основную часть требований - это твоя вакансия.'
    : a.score >= 45
      ? '<b>Стоит откликнуться.</b> Половина требований закрыта, остальное реально добрать в процессе - так делают почти все. Не отсеивай себя сама, это работа рекрутера.'
      : '<b>Вакансия на вырост.</b> Совпадений мало, но отклик всё равно имеет смысл: иногда берут за потенциал. Просто не жди быстрого ответа и не считай отказ оценкой себя.';

  const li = [];
  if (a.miss.length) li.push(`Пробелы: <b>${a.miss.map(s => s.n).join(', ')}</b>. Не ври в письме - честно напиши «не работала, готова освоить к старту».`);
  if (a.part.length) li.push(`Подтянуть за пару вечеров перед собесом: <b>${a.part.map(s => s.n).join(', ')}</b>.`);
  li.push('В письме упоминай только то, что реально есть в вакансии - обобщённые письма видно сразу.');
  li.push('Обязательно приложи живые ссылки на проекты: работающая демка сильнее любого списка навыков.');
  $('advice').innerHTML = '<b>Рекомендации по этому отклику:</b><ul>' + li.map(x => `<li>${x}</li>`).join('') + '</ul>';
}

/* ---------- письмо ---------- */
const PROF = {
  analyst: {
    intro: 'Последние 4 года я выстраивала систему оценивания результатов для 200+ учеников в двух образовательных организациях в Якутске: проектировала методологию, собирала и анализировала данные о прогрессе, корректировала подход по итогам. Инструменты сбора данных строила сама на SQL и Python.',
    skills: 'SQL и Python для обработки данных, проектирование анкет и систем оценивания, работа с выборками от 200 наблюдений, аналитическая отчётность.',
    links: '- EduQuiz Pro, платформа тестирования со сбором и подсчётом результатов: my-edu-quiz.vercel.app\n- LexiCard, приложение с метриками точности и статистикой прогресса: github.com/Evil-Pinguin/lexicard',
    vision: 'Мне интересно перейти от образовательных данных к продуктовым исследованиям: умею поставить измеримую гипотезу, собрать данные и довести анализ до практического вывода.',
    city: ' Живу в Якутске, релокация не требуется.'
  },
  gamedev: {
    intro: 'Разрабатываю игры на Unity (C#) и C++/SFML полным циклом: игровая логика, сцены, интерфейс. Спрайты и анимацию рисую сама в Krita, то есть закрываю связку программист плюс 2D-художник. Делала визуальные новеллы со сценарной структурой и ветвлением диалогов.',
    skills: 'Unity и C#, C++/SFML, игровая архитектура, 2D-графика и анимация в Krita, Roblox Studio. Четыре года преподавала геймдев и обучила больше 200 учеников.',
    links: '- Игры и визуальные новеллы на Unity (C#) и C++ (SFML): логика, интерфейс, спрайты и анимация мои.\n- LexiCard с геймификацией: таймер, звуковая обратная связь, повтор ошибок: github.com/Evil-Pinguin/lexicard',
    vision: 'Хочу расти как Unity-разработчик в команде, где делают живые продукты и есть у кого учиться.',
    city: ' Живу в Якутске, релокация не требуется.'
  },
  frontend: {
    intro: 'Пишу на React и TypeScript, собираю проекты на Vite и довожу их до продакшна: от макета в Figma до деплоя на Vercel с автосборкой. Работала с REST и AI-API, serverless-функциями и PostgreSQL.',
    skills: 'React, TypeScript, адаптивная вёрстка, REST API, serverless, PostgreSQL, Git и CI/CD. Интерфейсы проектирую сама в Figma.',
    links: '- LexiCard: React и TypeScript, AI-генерация контента через serverless-функцию: github.com/Evil-Pinguin/lexicard\n- EduQuiz Pro: платформа квизов с конструктором вопросов: my-edu-quiz.vercel.app',
    vision: 'Хочу расти как frontend-разработчик в команде, где есть код-ревью и люди, у которых можно учиться.',
    city: ''
  },
  qa: {
    intro: 'Тестирую продукты полным циклом и понимаю, где они ломаются, потому что сама их пишу. Работала с API и DevTools, ловила дефекты асинхронной логики: гонки состояний, незавершённые таймеры, утечки эффектов.',
    skills: 'Функциональное и негативное тестирование, тест-кейсы и баг-репорты, проверка API, DevTools, кроссбраузерность и адаптив, SQL, чтение и правка кода.',
    links: '- LexiCard: проверка таймаутов, граничных значений ввода, поведения при некорректном ответе API: github.com/Evil-Pinguin/lexicard\n- EduQuiz Pro: валидация форм и граничные значения: my-edu-quiz.vercel.app',
    vision: 'Хочу расти в QA: мне нравится доводить продукт до состояния, когда им удобно пользоваться.',
    city: ''
  },
  teacher: {
    intro: 'Четыре года преподавала программирование в двух школах и обучила больше 200 учеников: C#/Unity, C++, Python, веб-разработка, Roblox Studio. Методики и материалы писала сама, вела проектные работы до защиты на научных конференциях.',
    skills: 'Авторские методики и учебные материалы, проектирование систем оценивания, наставничество, подготовка к олимпиадам и конференциям. Учебную графику и видео делаю сама.',
    links: '- Обучающий сайт по основам Linux: программа курса, материалы и вёрстка мои.\n- LexiCard: приложение для изучения слов с методикой интервальных повторений: github.com/Evil-Pinguin/lexicard',
    vision: 'Хочу развиваться в EdTech: совмещать преподавание с разработкой учебных продуктов.',
    city: ''
  }
};

function buildLetter(a) {
  const role = $('v-role').value.trim() || 'разработчика';
  const comp = $('v-company').value.trim();
  const hr = $('v-hr').value.trim();
  const key = ($('v-prof') && $('v-prof').value) || 'frontend';
  const P = PROF[key];
  const len = ($('v-len') && $('v-len').value) || 'short';

  const greet = hr ? `${hr}, здравствуйте!` : 'Здравствуйте!';
  const compIn = comp ? ` в ${comp}` : '';

  const sign = `\n\nС уважением,\nНиколаева Анжелина Михайловна\n+7 968 151-56-91 · Zloipingvin2000@gmail.com\ngithub.com/Evil-Pinguin`;

  // --- очень короткое: 3 предложения ---
  if (len === 'mini') {
    return `${greet}\n\nМеня зовут Анжелина, откликаюсь на вакансию «${role}»${compIn}. ${P.intro.split('. ')[0]}. Мои проекты открыты по ссылке: github.com/Evil-Pinguin.${P.city}${sign}`;
  }

  // --- совпадения по вакансии: максимум 3 пункта ---
  const proofs = a.have.concat(a.part).filter(s => s.proof).slice(0, 3);
  const match = proofs.length
    ? `\n\nПо вашим требованиям:\n` + proofs.map(s => `- ${s.n}: ${s.proof}.`).join('\n')
    : `\n\nИз релевантного: ${P.skills}`;

  const gaps = a.miss.length
    ? `\n\nЧестно про пробелы: с ${a.miss.slice(0, 2).map(s => s.n).join(' и ')} в проде не работала, но учусь быстро и готова закрыть к старту.`
    : '';

  const vision = $('v-vision').checked ? `\n\n${P.vision}` : '';
  const feedback = $('v-feedback').checked
    ? `\n\nЕсли решение будет отрицательным, буду благодарна за пару строк обратной связи: это лучший ориентир, что подтянуть.`
    : '';
  const reloc = P.city || ($('v-relocate').checked
    ? ' Готова к релокации.'
    : ' Работаю удалённо из Якутска, к московскому времени готова.');

  // --- короткое (по умолчанию): 4 абзаца ---
  if (len === 'short') {
    return `${greet}\n\nМеня зовут Анжелина, откликаюсь на вакансию «${role}»${compIn}. ${P.intro}${match}${gaps}\n\nПроекты можно открыть прямо сейчас:\n${P.links}${vision}${feedback}\n\nБуду рада обсудить детали.${reloc}${sign}`;
  }

  // --- подробное ---
  return `${greet}\n\nМеня зовут Анжелина, откликаюсь на вакансию «${role}»${compIn}. ${P.intro}\n\nКлючевые навыки: ${P.skills}${match}${gaps}\n\nПроекты:\n${P.links}\n\nОтдельно отмечу: четыре года преподавания дали умение объяснять решения на ревью и писать документацию, которую читают. Новые задачи подхватываю быстро, начатое довожу до конца.${vision}${feedback}\n\nБуду рада обсудить детали.${reloc}${sign}`;
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
