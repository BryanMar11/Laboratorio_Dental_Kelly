window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    // Espera mínima de 2.5 segundos para que se vea el logo
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000); // Tiempo para quitarlo del DOM
    }, 2500);
});

// ==========================================================================
// 1. LÓGICA DEL MENÚ DESPLEGABLE MÓVIL
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active'); // <--- AGREGA ESTA LÍNEA
});

// Para cerrar el menú al hacer clic en un enlace (ya lo tenías)
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active'); // <--- AGREGA ESTA TAMBIÉN
    });
});

// ==========================================================================
// 2. ANIMACIÓN DE REVELADO AL SCROLL (Intersection Observer)
// ==========================================================================
const scrollElements = document.querySelectorAll('.hidden-scroll');

const revealOnScrollCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    root: null,
    threshold: 0.15 
};

const observer = new IntersectionObserver(revealOnScrollCallback, revealOptions);

scrollElements.forEach(el => observer.observe(el));

// ==========================================================================
// 3. LÓGICA DEL TRADUCTOR DINÁMICO (Español / Inglés)
// ==========================================================================
const translations = {
    es: {
        navInicio: "Inicio",
        navProcedimientos: "Procedimientos",
        navTestimonios: "Testimonios",
        navContacto: "Contáctenos",
        heroTitle: 'Devolvemos la confianza a tu sonrisa con <span class="highlight">Prótesis de Alta Calidad</span>',
        heroDesc: "Laboratorio de mecánica dental especializado en soluciones estéticas, duraderas y a la medida para odontólogos y pacientes.",
        heroBtn: "Cotizar por WhatsApp ➔",
        stat1Num: "+1000",
        stat1Txt: "Sonrisas Diseñadas",
        stat2Num: "15+",
        stat2Txt: "Procedimientos Especializados",
        
        procMainTitle: "Especialidades del Laboratorio",
        procLink: "Ver detalles ➔"
    },
    en: {
        navInicio: "Home",
        navProcedimientos: "Procedures",
        navTestimonios: "Testimonials",
        navContacto: "Contact Us",
        heroTitle: 'Restoring confidence to your smile with <span class="highlight">High-Quality Prosthetics</span>',
        heroDesc: "Dental laboratory specialized in aesthetic, durable, and custom solutions for dentists and patients.",
        heroBtn: "Quote via WhatsApp ➔",
        stat1Num: "+1000",
        stat1Txt: "Designed Smiles",
        stat2Num: "15+",
        stat2Txt: "Specialized Procedures",
        
        procMainTitle: "Laboratory Specialties",
        procLink: "View details ➔"
    }
};

function changeLanguage(lang) {
    // Menú
    document.getElementById('nav-inicio').textContent = translations[lang].navInicio;
    document.getElementById('nav-procedimientos').textContent = translations[lang].navProcedimientos;
    document.getElementById('nav-testimonios').textContent = translations[lang].navTestimonios;
    document.getElementById('nav-contacto').textContent = translations[lang].navContacto;
    
    // Hero
    document.getElementById('hero-title').innerHTML = translations[lang].heroTitle; 
    document.getElementById('hero-desc').textContent = translations[lang].heroDesc;
    document.getElementById('hero-btn').textContent = translations[lang].heroBtn;
    
    // Stats
    document.getElementById('stat-1-num').textContent = translations[lang].stat1Num;
    document.getElementById('stat-1-txt').textContent = translations[lang].stat1Txt;
    document.getElementById('stat-2-num').textContent = translations[lang].stat2Num;
    document.getElementById('stat-2-txt').textContent = translations[lang].stat2Txt;

    // Sección Procedimientos
    document.getElementById('proc-main-title').textContent = translations[lang].procMainTitle;

    // Actualizar todos los enlaces de "Ver detalles"
    const links = document.querySelectorAll('.card-link');
    links.forEach(link => {
        link.textContent = translations[lang].procLink;
    });

    // Toggle clase active en botones (asegúrate de que los IDs coincidan en el HTML)
    document.getElementById('btn-es').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById(`btn-${lang}`).classList.add('active');
}

// ==========================================
// LÓGICA PARA TARJETAS DE SERVICIOS
// ==========================================
function toggleService(clickedCard) {
    // Verificamos si la tarjeta que tocamos ya está abierta
    const isAlreadyActive = clickedCard.classList.contains('active');

    // Primero, cerramos TODAS las tarjetas para mantener el diseño limpio
    const allCards = document.querySelectorAll('.serv-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Si la tarjeta que tocamos NO estaba abierta, la abrimos.
    // (Si ya estaba abierta, simplemente se queda cerrada gracias al paso anterior).
    if (!isAlreadyActive) {
        clickedCard.classList.add('active');
    }
}