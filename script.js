let indice = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

function mostrarSlide() {
  slides.forEach(slide => {
    slide.classList.remove('activo');
    });

  slides[indice].classList.add('activo');
}
// Inicial
mostrarSlide();

// Autoplay
setInterval(() => {
  indice = (indice + 1) % total;
  mostrarSlide();
}, 5000);

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});
