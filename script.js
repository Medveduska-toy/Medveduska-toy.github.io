const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
}));

const btnEn = document.getElementById('btn-en');
const btnEs = document.getElementById('btn-es');
const heroTitle = document.getElementById('hero-title');
const heroIntro = document.getElementById('hero-intro');
const exploreButton = document.getElementById('explore-button');

btnEs?.addEventListener('click', () => {
  document.documentElement.lang = 'es';
  heroTitle.innerHTML = 'Personajes hechos a mano<br>con alma.';
  heroIntro.innerHTML = 'Ositos de peluche únicos<br>y art toys, creados por<br>Ivana Anic.';
  exploreButton.innerHTML = 'DESCUBRE MI TRABAJO <span>→</span>';
});

btnEn?.addEventListener('click', () => {
  document.documentElement.lang = 'en';
  heroTitle.innerHTML = 'Handmade characters<br>with a soul.';
  heroIntro.innerHTML = 'One of a kind teddy bears<br>and art toys, created by<br>Ivana Anic.';
  exploreButton.innerHTML = 'EXPLORE MY WORK <span>→</span>';
});
