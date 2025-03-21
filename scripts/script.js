const container = document.getElementById('scrollContainer');

  // Funciones para el desplazamiento con teclado y botones
  function scrollNext() {
    container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  }

  function scrollPrev() {
    container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }

  // Añadir evento de teclado
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      scrollNext(); // Desplazar hacia la derecha con la flecha derecha
    } else if (event.key === 'ArrowLeft') {
      scrollPrev(); // Desplazar hacia la izquierda con la flecha izquierda
    }
  });

  // Scroll automático
  setInterval(() => {
    container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  }, 5000);

  const particles = [];
  const maxParticles = 50;

  const menuTrigger = document.getElementById('menu-trigger');
  const menu = document.getElementById('menu');

  // Mostrar el menú cuando el cursor está sobre el botón
  menuTrigger.addEventListener('mouseover', () => {
      menu.style.display = 'flex';
  });

  // Cerrar el menú cuando el cursor se aparta
  menu.addEventListener('mouseleave', () => {
      menu.style.display = 'none';
  });
  
  document.addEventListener("mousemove", (event) => {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${event.pageX}px`;
      particle.style.top = `${event.pageY}px`;

      // Añadir la partícula al DOM y al array
      document.body.appendChild(particle);
      particles.push(particle);

      // Eliminar partículas viejas para evitar saturar la página
      if (particles.length > maxParticles) {
          const oldParticle = particles.shift();
          document.body.removeChild(oldParticle);
      }

      // Desaparece después de un tiempo
      setTimeout(() => {
          particle.style.opacity = "0";
          particle.addEventListener("transitionend", () => {
              if (document.body.contains(particle)) {
                  document.body.removeChild(particle);
              }
          });
      }, 500);
  });
