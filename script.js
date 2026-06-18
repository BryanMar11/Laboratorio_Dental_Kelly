// ==========================================================================
// 1. LÓGICA DEL MENÚ DESPLEGABLE MÓVIL
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Abrir / Cerrar menú al dar clic en la hamburguesa
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar el menú automáticamente al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// ==========================================================================
// 2. NUEVO: ANIMACIÓN DE REVELADO AL SCROLL (Intersection Observer)
// ==========================================================================
// Seleccionamos la barra de estadísticas
const statsBar = document.querySelector('.stats-bar');

// Definimos la función que se ejecuta cuando el elemento entra en pantalla
const revealOnScrollCallback = (entries, observer) => {
    entries.forEach((entry) => {
        // ¿El elemento está entrando en el viewport?
        if (entry.isIntersecting) {
            // Le añadimos la clase de CSS que activa la animación suave
            statsBar.classList.add('visible');
            
            // Ya no necesitamos vigilarlo más, así ahorramos recursos
            observer.unobserve(entry.target);
        }
    });
};

// Configuramos las opciones del observador
const revealOptions = {
    root: null,        // Usa el viewport del navegador
    threshold: 0.2    // Se activa cuando el 20% del elemento es visible
};

// Creamos el observador con la función y opciones anteriores
const observer = new IntersectionObserver(revealOnScrollCallback, revealOptions);

// Ponemos al observador a vigilar el contenedor principal de la barra
const statsSection = document.getElementById('stats-section');
if (statsSection) {
    observer.observe(statsSection);
}


// ==========================================================================
// 3. LÓGICA DEL TRADUCTOR DINÁMICO (Español / Inglés)
// ==========================================================================
const translations = {
    es: {
        navInicio: "Inicio",
        navQuienes: "Quiénes somos",
        navTestimonios: "Testimonios",
        navContacto: "Contáctenos",
        heroTitle: 'Devolvemos la confianza a tu sonrisa con <span class="highlight">Prótesis de Alta Calidad</span>',
        heroDesc: "Laboratorio de mecánica dental especializado en soluciones estéticas, duraderas y a la medida para odontólogos y pacientes.",
        heroBtn: "Cotizar por WhatsApp ➔",
        stat1Num: "+1000",
        stat1Txt: "Sonrisas Diseñadas",
        stat2Num: "15+",
        stat2Txt: "Procedimientos Especializados"
    },
    en: {
        navInicio: "Home",
        navQuienes: "About Us",
        navTestimonios: "Testimonials",
        navContacto: "Contact Us",
        heroTitle: 'Restoring confidence to your smile with <span class="highlight">High-Quality Prosthetics</span>',
        heroDesc: "Dental laboratory specialized in aesthetic, durable, and custom solutions for dentists and patients.",
        heroBtn: "Quote via WhatsApp ➔",
        stat1Num: "+1000",
        stat1Txt: "Designed Smiles",
        stat2Num: "15+",
        stat2Txt: "Specialized Procedures"
    }
};

function changeLanguage(lang) {
    // Intercambia los contenidos de texto usando los IDs asignados
    document.getElementById('nav-inicio').textContent = translations[lang].navInicio;
    document.getElementById('nav-quienes').textContent = translations[lang].navQuienes;
    document.getElementById('nav-testimonios').textContent = translations[lang].navTestimonios;
    document.getElementById('nav-contacto').textContent = translations[lang].navContacto;
    
    // innerHTML se usa aquí para conservar la etiqueta <span> que da el color dorado al título
    document.getElementById('hero-title').innerHTML = translations[lang].heroTitle; 
    document.getElementById('hero-desc').textContent = translations[lang].heroDesc;
    document.getElementById('hero-btn').textContent = translations[lang].heroBtn;
    
    document.getElementById('stat-1-num').textContent = translations[lang].stat1Num;
    document.getElementById('stat-1-txt').textContent = translations[lang].stat1Txt;
    document.getElementById('stat-2-num').textContent = translations[lang].stat2Num;
    document.getElementById('stat-2-txt').textContent = translations[lang].stat2Txt;

    // Controla cuál botón del selector de idiomas se ilumina como activo
    document.getElementById('btn-es').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    
    document.getElementById(`btn-${lang}`).classList.add('active');
}