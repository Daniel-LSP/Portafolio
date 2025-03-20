// Función para traducir automáticamente todos los textos visibles
async function translatePage(language) {
    try {
        // Cargar el archivo JSON con las traducciones del idioma seleccionado
        const response = await fetch(`locales/${language}.json`);
        const translations = await response.json();

        // Seleccionamos todos los elementos que contienen texto visible
        const elements = document.querySelectorAll('h1, h2, h3, p, a, div, span, button');

        elements.forEach(el => {
            // Obtenemos el texto actual del elemento
            const originalText = el.innerText.trim();

            // Si el texto original existe en el archivo de traducciones, lo reemplazamos
            if (originalText && translations[originalText]) {
                el.innerText = translations[originalText];
            }
        });
    } catch (error) {
        console.error('Error al traducir la página:', error);
    }
}

// Función para manejar el cambio de idioma
function initializeLanguageSelector() {
    const languageSelector = document.getElementById('languageSelector');
    languageSelector.addEventListener('change', function () {
        const selectedLanguage = this.value;
        translatePage(selectedLanguage); // Llamamos a la función de traducción
    });
}

// Función de búsqueda en las secciones
function initializeSearchBar() {
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', function () {
        const query = searchBar.value.toLowerCase();
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            if (section.innerText.toLowerCase().includes(query)) {
                section.style.display = 'block'; // Mostrar sección
            } else {
                section.style.display = 'none'; // Ocultar sección
            }
        });
    });
}

// Función para animar el título con aparición letra por letra
function animateTitle() {
    const titulo = document.getElementById('titulo');
    const texto = "Mi Página Personal"; // Texto del título

    texto.split('').forEach((letra, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letra;
        span.style.animationDelay = `${index * 0.2}s`; // Retardo entre letras
        titulo.appendChild(span);
    });
}

// Inicializamos todas las funciones necesarias al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    translatePage('es'); // Cargar idioma predeterminado
    initializeLanguageSelector(); // Configurar el selector de idioma
    initializeSearchBar(); // Configurar la barra de búsqueda
    animateTitle(); // Iniciar la animación del título
});




