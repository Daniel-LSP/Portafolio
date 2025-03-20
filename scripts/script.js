
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

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const socialMenu = document.getElementById('social-menu');

    // Agregar evento para abrir/cerrar el menú al hacer clic
    hamburgerIcon.addEventListener('click', () => {
        socialMenu.classList.toggle('open'); // Alternar la clase "open"
    });
});

// Inicializamos todas las funciones necesarias al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    translatePage('es'); // Cargar idioma predeterminado
    initializeLanguageSelector(); // Configurar el selector de idioma
    initializeSearchBar(); // Configurar la barra de búsqueda
    animateTitle(); // Iniciar la animación del título
});

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

document.addEventListener('DOMContentLoaded', () => {
    const groupForm = document.getElementById('group-form');
    const groupList = document.getElementById('group-list');
    const groupCategory = document.getElementById('group-category');

    // Cargar los grupos guardados en localStorage al cargar la página
    loadGroups();

    // Manejar el envío del formulario
    groupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el refresco de la página

        // Obtener los valores del formulario
        const groupName = document.getElementById('group-name').value.trim();
        const groupDescription = document.getElementById('group-description').value.trim();
        const category = groupCategory.value;

        // Validar campos (asegurarnos de que se elija una categoría)
        if (!category) {
            alert("Por favor, selecciona una categoría.");
            return;
        }

        // Crear un nuevo objeto de grupo
        const newGroup = { name: groupName, description: groupDescription, category };

        // Añadir el grupo a la lista y al localStorage
        addGroup(newGroup);
        saveGroup(newGroup);

        // Limpia el formulario
        groupForm.reset();
    });

    // Función para añadir un grupo a la interfaz
    function addGroup(group) {
        // Verificar si ya existe una sección para la categoría
        let categorySection = document.querySelector(`[data-category="${group.category}"]`);
        if (!categorySection) {
            categorySection = document.createElement('div');
            categorySection.setAttribute('data-category', group.category);
            categorySection.innerHTML = `<h3 class="category">${group.category}</h3>`;
            groupList.appendChild(categorySection);
        }

        // Crear el elemento del grupo
        const groupElement = document.createElement('div');
        groupElement.classList.add('group-item');
        groupElement.innerHTML = `
            <h4>${group.name}</h4>
            <p>${group.description}</p>
            <button class="delete-button">Eliminar</button>
        `;

        // Añadir evento al botón de eliminar
        groupElement.querySelector('.delete-button').addEventListener('click', () => {
            groupElement.remove(); // Eliminar del DOM
            removeGroup(group); // Eliminar del localStorage
        });

        // Añadir el grupo al contenedor de su categoría
        categorySection.appendChild(groupElement);
    }

    // Guardar grupo en localStorage
    function saveGroup(group) {
        const groups = JSON.parse(localStorage.getItem('groups')) || [];
        groups.push(group);
        localStorage.setItem('groups', JSON.stringify(groups));
    }

    // Cargar grupos desde localStorage
    function loadGroups() {
        const groups = JSON.parse(localStorage.getItem('groups')) || [];
        groups.forEach(addGroup); // Añadir cada grupo a la interfaz
    }

    // Eliminar grupo del localStorage
    function removeGroup(groupToRemove) {
        const groups = JSON.parse(localStorage.getItem('groups')) || [];
        const updatedGroups = groups.filter(
            (group) =>
                group.name !== groupToRemove.name ||
                group.description !== groupToRemove.description ||
                group.category !== groupToRemove.category
        );
        localStorage.setItem('groups', JSON.stringify(updatedGroups));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a'); // Seleccionar enlaces de navegación
    const sections = document.querySelectorAll('section'); // Seleccionar todas las secciones
    const mainLayout = document.querySelector('.main-layout'); // Layout principal
    const contentArea = document.querySelector('.content'); // Donde va la información
    const searchBar = document.querySelector('.search-container'); // Buscador
    const hamburgerMenu = document.querySelector('.hamburger-menu'); // Menú hamburguesa

    // Lógica para mostrar solo la sección seleccionada y ocultar el resto
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Ocultar todo excepto los anuncios y la sección seleccionada
            const targetId = link.getAttribute('href').slice(1); // Obtener el id del destino
            const targetSection = document.getElementById(targetId);

            // Ocultar elementos no deseados
            searchBar.style.display = 'none';
            hamburgerMenu.style.display = 'none';
            contentArea.style.margin = '0'; // Ajustar espacio para centrar el contenido

            // Ocultar todas las secciones excepto la seleccionada
            sections.forEach(section => {
                section.style.display = 'none'; // Ocultar sección
            });

            if (targetSection) {
                targetSection.style.display = 'flex'; // Mostrar solo la sección seleccionada
            }
        });
    });
});
