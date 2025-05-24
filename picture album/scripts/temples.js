// temples.js

// ✅ Footer date logic
const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

if (yearSpan) {
  yearSpan.textContent = currentYear;
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = `Last modified: ${lastModified}`;
}

// ==== Menu Hamburguer ====
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const navMenu = document.querySelector('#primaryNav');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');

  // Alternar entre o ícone de hambúrguer e o 'X'
  if (hamburgerBtn.textContent === '☰') {
    hamburgerBtn.textContent = '✖';
  } else {
    hamburgerBtn.textContent = '☰';
  }
});
