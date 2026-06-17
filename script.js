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
// 2. LÓGICA DEL TRADUCTOR DINÁMICO (Español / Inglés)
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
        stat2Num: "100%",
        stat2Txt: "Precisión Digital",
        stat3Num: "Garantía",
        stat3Txt: "En cada trabajo"
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
        stat2Num: "100%",
        stat2Txt: "Digital Precision",
        stat3Num: "Warranty",
        stat3Txt: "On every piece"
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
    document.getElementById('stat-3-num').textContent = translations[lang].stat3Num;
    document.getElementById('stat-3-txt').textContent = translations[lang].stat3Txt;

    // Controla cuál botón del selector de idiomas se ilumina como activo
    document.getElementById('btn-es').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    
    document.getElementById(`btn-${lang}`).classList.add('active');
}