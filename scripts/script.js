// Función para cargar el archivo JSON según el idioma seleccionado
async function loadTranslations(language) {
    try {
        const response = await fetch(`locales/${language}.json`);
        const translations = await response.json();

        // Actualizar los textos dinámicamente
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[key]) {
                el.innerText = translations[key]; // Actualizar texto
                if (el.placeholder) {
                    el.placeholder = translations[key]; // Actualizar placeholder
                }
            }
        });
    } catch (error) {
        console.error('Error cargando traducciones:', error);
    }
}

// Manejar el cambio de idioma
const languageSelector = document.getElementById('languageSelector');
languageSelector.addEventListener('change', function () {
    const selectedLanguage = this.value;
    loadTranslations(selectedLanguage);
});

// Búsqueda en las secciones
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', function () {
    const query = searchBar.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

// Animación del título (aparición letra por letra)
const titulo = document.getElementById('titulo');
const texto = "Mi Página Personal"; // Texto del título
texto.split('').forEach((letra, index) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = letra;
    span.style.animationDelay = `${index * 0.2}s`; // Retardo entre letras
    titulo.appendChild(span);
});

// Cargar idioma predeterminado al inicio
loadTranslations('es');


