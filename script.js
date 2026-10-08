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
const btnJa = document.getElementById('btn-ja');
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
btnJa?.addEventListener('click', () => {
  document.documentElement.lang = 'ja';
  heroTitle.innerHTML = '心を込めて生まれた<br>ハンドメイドの仲間たち。';
  heroIntro.innerHTML = '世界にひとつだけのテディベアと<br>アートトイ。Ivana Anic が<br>心を込めて制作しています。';
  exploreButton.innerHTML = '作品を見る <span>→</span>';
});

const pressDescription = document.getElementById('press-description');
const pressButton = document.getElementById('press-button');

btnEs?.addEventListener('click', () => {
  if (pressDescription) {
    pressDescription.innerHTML = 'Mi trabajo ha aparecido<br>en revistas internacionales.';
  }
  if (pressButton) {
    pressButton.innerHTML = 'VER PUBLICACIONES <span>→</span>';
  }
});

btnEn?.addEventListener('click', () => {
  if (pressDescription) {
    pressDescription.innerHTML = 'My work has been featured<br>in international magazines.';
  }
  if (pressButton) {
    pressButton.innerHTML = 'VIEW ALL PRESS <span>→</span>';
  }
});

btnJa?.addEventListener('click', () => {
  if (pressDescription) {
    pressDescription.innerHTML = '私の作品は<br>海外の雑誌で紹介されています。';
  }
  if (pressButton) {
    pressButton.innerHTML = '掲載誌を見る <span>→</span>';
  }
});
// Remember the selected language across pages
function saveLanguage(lang) {
  localStorage.setItem('medveduska-language', lang);
}

btnEn?.addEventListener('click', () => saveLanguage('en'));
btnEs?.addEventListener('click', () => saveLanguage('es'));
btnJa?.addEventListener('click', () => saveLanguage('ja'));
