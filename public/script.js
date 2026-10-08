const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

/* ---------- Tema ---------- */
function updateThemeLabel() {
  const isDark = root.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch { /* modo privado */ }
  updateThemeLabel();
});
updateThemeLabel();

/* ---------- Menú ---------- */
function setMenu(open) {
  nav.classList.toggle('nav--open', open);
  navButton.setAttribute('aria-expanded', String(open));
  navButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

navButton.addEventListener('click', () => {
  setMenu(navButton.getAttribute('aria-expanded') !== 'true');
});
nav.addEventListener('click', (e) => {
  if (e.target.closest('.nav__link')) setMenu(false); // cierra al elegir sección
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});