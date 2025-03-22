const container = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('.section');
let currentSection = 0; // Índice de la sección actual

// Función para desplazarse a una sección
function scrollToSection(index) {
  const sectionWidth = window.innerWidth;
  container.scrollTo({ left: index * sectionWidth, behavior: 'smooth' });

  // Remover la clase 'active' de todas las secciones
  sections.forEach((section) => section.classList.remove('active'));

  // Agregar la clase 'active' a la sección actual
  if (sections[index]) {
    sections[index].classList.add('active');
  }
}

// Lógica para desplazamiento automático con tiempos personalizados
function autoScroll() {
  const timePerSection = 30000; // Tiempo de 30 segundos por sección
  if (currentSection < sections.length) {
    scrollToSection(currentSection);
    setTimeout(() => {
      currentSection++;
      autoScroll();
    }, timePerSection);
  } else {
    // Reiniciar al inicio
    currentSection = 0;
    scrollToSection(currentSection);
    setTimeout(autoScroll, timePerSection);
  }
}

// Inicia el scroll automático
autoScroll();

// Navegación manual
function scrollNext() {
  if (currentSection < sections.length - 1) {
    currentSection++;
    scrollToSection(currentSection);
  }
}

function scrollPrev() {
  if (currentSection > 0) {
    currentSection--;
    scrollToSection(currentSection);
  }
}

// Añadir evento de teclado
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    scrollNext();
  } else if (event.key === 'ArrowLeft') {
    scrollPrev();
  }
});

// Menú desplegable
const menuTrigger = document.getElementById('menu-trigger');
const menu = document.getElementById('menu');

if (menuTrigger && menu) {
  menuTrigger.addEventListener('mouseenter', () => {
    menu.style.display = 'flex';
  });

  menu.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
  });
}