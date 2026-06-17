// Seleccionamos el botón y el menú
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Cuando se hace clic en el botón, se pone o se quita la clase 'active'
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Opcional: Cerrar el menú automáticamente cuando se da clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});