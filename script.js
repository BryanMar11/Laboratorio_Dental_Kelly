// ==========================================================================
// 1. LÓGICA DEL MENÚ DESPLEGABLE MÓVIL
// ==========================================================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==========================================================================
// 2. ANIMACIÓN DE REVELADO AL SCROLL (Intersection Observer Mejorado)
// ==========================================================================
// Seleccionamos TODOS los elementos que tengan la clase 'hidden-scroll'
const scrollElements = document.querySelectorAll('.hidden-scroll');

const revealOnScrollCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Añade la clase visible cuando el elemento entra en pantalla
            entry.target.classList.add('visible');
            // Deja de observarlo para no consumir memoria
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    root: null,
    threshold: 0.15 // Se activa cuando el 15% de la tarjeta es visible
};

const observer = new IntersectionObserver(revealOnScrollCallback, revealOptions);

// Le decimos al observador que vigile cada elemento individualmente
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
        
        // Textos de la nueva sección
        procMainTitle: "Especialidades del Laboratorio",
        proc1Title: "Coronas y Puentes",
        proc2Title: "Prótesis Removibles",
        proc3Title: "Carillas (Zirconio / Disilicato)",
        proc4Title: "Estructuras sobre Implantes",
        proc5Title: "Placas y Férulas de Bruxismo",
        proc6Title: "Aparatología Ortodóntica",
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
        
        // Textos de la nueva sección en inglés
        procMainTitle: "Laboratory Specialties",
        proc1Title: "Crowns and Bridges",
        proc2Title: "Removable Prosthetics",
        proc3Title: "Veneers (Zirconia / Disilicate)",
        proc4Title: "Implant Structures",
        proc5Title: "Occlusal Splints & Night Guards",
        proc6Title: "Orthodontic Appliances",
        procLink: "View details ➔"
    }
};

function changeLanguage(lang) {
    document.getElementById('nav-inicio').textContent = translations[lang].navInicio;
    document.getElementById('nav-procedimientos').textContent = translations[lang].navProcedimientos;
    document.getElementById('nav-testimonios').textContent = translations[lang].navTestimonios;
    document.getElementById('nav-contacto').textContent = translations[lang].navContacto;
    
    document.getElementById('hero-title').innerHTML = translations[lang].heroTitle; 
    document.getElementById('hero-desc').textContent = translations[lang].heroDesc;
    document.getElementById('hero-btn').textContent = translations[lang].heroBtn;
    
    document.getElementById('stat-1-num').textContent = translations[lang].stat1Num;
    document.getElementById('stat-1-txt').textContent = translations[lang].stat1Txt;
    document.getElementById('stat-2-num').textContent = translations[lang].stat2Num;
    document.getElementById('stat-2-txt').textContent = translations[lang].stat2Txt;

    // Traducir los nuevos elementos de la sección procedimientos
    document.getElementById('proc-main-title').textContent = translations[lang].procMainTitle;
    document.getElementById('proc-1-title').textContent = translations[lang].proc1Title;
    document.getElementById('proc-2-title').textContent = translations[lang].proc2Title;
    document.getElementById('proc-3-title').textContent = translations[lang].proc3Title;
    document.getElementById('proc-4-title').textContent = translations[lang].proc4Title;
    document.getElementById('proc-5-title').textContent = translations[lang].proc5Title;
    document.getElementById('proc-6-title').textContent = translations[lang].proc6Title;

    // Actualizar todos los enlaces de "Ver detalles"
    const links = document.querySelectorAll('.card-link');
    links.forEach(link => {
        link.textContent = translations[lang].procLink;
    });

    document.getElementById('btn-es').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById(`btn-${lang}`).classList.add('active');
}