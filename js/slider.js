const carrusel = document.querySelector('.carrusel');
const slides = document.querySelectorAll('.tarjetas');
const puntos = document.querySelectorAll('.punto');

let indiceActual = 0;

puntos.forEach((punto, indice) => {
  punto.addEventListener('click', () => {
    indiceActual = indice;
    actualizarCarrusel();
  });
});

function actualizarCarrusel() {
  slides.forEach((tarjetas, indice) => {
    tarjetas.style.opacity = indice === indiceActual ? 1 : 0;
  });
  puntos.forEach((punto, indice) => {
    punto.classList.toggle('active', indice === indiceActual);
  });
}

actualizarCarrusel();