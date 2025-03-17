document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Muestra un mensaje de respuesta
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerText = `Gracias, ${name}. Tu mensaje ha sido enviado.`;
    responseMessage.classList.remove('hidden');

    // Limpia el formulario
    this.reset();
});
