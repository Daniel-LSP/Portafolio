 // Función para mostrar/ocultar el menú de idiomas
document.getElementById('languageLabel').onclick = function() {
    var langSelect = document.getElementById('languageSelect');
    langSelect.style.display = langSelect.style.display === 'none' || langSelect.style.display === '' ? 'block' : 'none';
};

// Función para mostrar/ocultar la barra de búsqueda
document.getElementById('searchLabel').onclick = function() {
    var searchDiv = document.getElementById('simplSearch');
    searchDiv.style.display = searchDiv.style.display === 'none' || searchDiv.style.display === '' ? 'block' : 'none';
    document.getElementById('searchInput').focus(); // Para que el campo de búsqueda tenga foco al abrir
};

// Opcional: para enviar la búsqueda al presionar Enter
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('searchform').submit();
    }
});