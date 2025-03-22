const container = document.getElementById('scrollContainer');
const sections = document.querySelectorAll('.section'); // Todas las secciones
let currentSection = 0; // Índice de la sección actual

// Función para desplazarse a una sección con animación
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
  const times = [3000, 5000, 4000, 6000]; // Tiempo específico por sección (en milisegundos)
  if (currentSection < sections.length) {
    scrollToSection(currentSection); // Desplázate a la sección actual
    setTimeout(() => {
      currentSection++;
      autoScroll(); // Llama de nuevo para la siguiente sección
    }, times[currentSection] || 5000); // Tiempo predeterminado si no se especifica
  } else {
    currentSection = 0; // Reiniciar al inicio cuando termine
    autoScroll();
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
    scrollNext(); // Desplazar hacia la derecha con la flecha derecha
  } else if (event.key === 'ArrowLeft') {
    scrollPrev(); // Desplazar hacia la izquierda con la flecha izquierda
  }
});

// Partículas que siguen el cursor
const particles = [];
const maxParticles = 50;

document.addEventListener('mousemove', (event) => {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = `${event.pageX}px`;
  particle.style.top = `${event.pageY}px`;

  // Añadir partícula al DOM
  document.body.appendChild(particle);
  particles.push(particle);

  // Limitar el número de partículas activas
  if (particles.length > maxParticles) {
    const oldParticle = particles.shift();
    if (document.body.contains(oldParticle)) {
      document.body.removeChild(oldParticle);
    }
  }

  // Desaparecer partículas con transición
  setTimeout(() => {
    particle.style.opacity = '0';
    particle.addEventListener('transitionend', () => {
      if (document.body.contains(particle)) {
        document.body.removeChild(particle);
      }
    });
  }, 500);
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