const $ = id => document.getElementById(id);
const KEY = 'rezume.cv.photo.v1';
const TITLE = document.title;

function showPhoto(src) {
  $('photo-img').src = src || '';
  $('photo-box').hidden = !src;
  $('btn-photo-del').hidden = !src;
  $('btn-photo').textContent = src ? 'Заменить фото' : 'Загрузить фото';
}

try { showPhoto(localStorage.getItem(KEY)); } catch (e) {}

$('btn-photo').addEventListener('click', () => $('file-photo').click());

$('file-photo').addEventListener('change', e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    // квадратная обрезка по центру, 600x600 — чтобы фото было чётким в PDF и не раздувало localStorage
    const S = 600, side = Math.min(img.width, img.height);
    const cv = document.createElement('canvas');
    cv.width = cv.height = S;
    cv.getContext('2d').drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, S, S);
    const data = cv.toDataURL('image/jpeg', 0.9);
    URL.revokeObjectURL(url);
    showPhoto(data);
    try { localStorage.setItem(KEY, data); } catch (err) {}
  };
  img.onerror = () => { URL.revokeObjectURL(url); alert('Не удалось открыть это изображение'); };
  img.src = url;
});

$('btn-photo-del').addEventListener('click', () => {
  showPhoto('');
  try { localStorage.removeItem(KEY); } catch (e) {}
});

// «Скачать PDF»: открывается окно печати, выбрать «Сохранить как PDF».
// Имя файла берётся из title страницы.
$('btn-pdf').addEventListener('click', () => window.print());
window.addEventListener('beforeprint', () => { document.title = 'Николаева_Анжелина_Резюме'; });
window.addEventListener('afterprint', () => { document.title = TITLE; });
