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

