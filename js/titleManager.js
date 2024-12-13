const pageTitles = {
    'index.html': 'Inicio',
    'login.html': 'Acceder',
    'register.html': 'Registrarse',
    'comidas-por-pais.html': 'Recetas por País',
    'comidas-por-categoria.html': 'Recetas por Categoría',
    'comidas-por-ocasion.html': 'Recetas por Ocasión'
};

function setDynamicTitle() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageTitle = pageTitles[currentPage] || 'Recetas del Mundo';
    document.title = `${pageTitle} | Recetas del Mundo`;
}

document.addEventListener('DOMContentLoaded', setDynamicTitle);
