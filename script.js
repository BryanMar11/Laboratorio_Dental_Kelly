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

document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos los elementos del modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".close-modal");
    
    // Obtenemos TODAS las imágenes dentro de los casos clínicos
    const images = document.querySelectorAll(".case-image-wrapper img");

    // Recorremos cada imagen y le agregamos el evento de clic
    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Pasa la ruta de la imagen clickeada al modal
            captionText.innerHTML = this.alt; // Usa el texto alternativo (alt) como leyenda
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal si el usuario hace clic fuera de la imagen (en el fondo oscuro)
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Capturamos los botones de idioma
    const btnEs = document.querySelectorAll('.lang-btn')[0]; 
    const btnEn = document.querySelectorAll('.lang-btn')[1]; 

    // 2. Diccionario de traducciones al inglés
    // La clave es el selector CSS, el valor es el texto (o un array si hay varios elementos con la misma clase)
    const translationsEN = {
        // --- NAVEGACIÓN ---
        "#nav-inicio": "Home",
        "#nav-procedimientos": "Procedures",
        "#nav-sobre-mi": "About Me",
        "#nav-testimonios": "Testimonials",
        "#nav-contacto": "Contact Us",

        // --- HERO ---
        ".hero-content h1": "Restoring confidence to your smile with <span class='highlight'>High Quality Prosthetics</span>",
        ".hero-content p": "Specialists in dental aesthetics and oral rehabilitation. State-of-the-art technology and precision in every detail for natural results.",
        ".hero-content .btn-cta": "Schedule Consultation",

        // --- ESTADÍSTICAS ---
        ".stat-item p": ["Years of<br>Experience", "Smiles<br>Restored", "Quality<br>Guarantee"],

        // --- PROCEDIMIENTOS ---
        ".elegant-title": "Procedures",
        ".section-subtitle": "Discover our services and detailed rates",
        ".serv-title-overlay h3": ["Removable Prosthetics", "Aesthetics and Design", "Fixed Prosthetics", "Orthodontics & Clinical"],
        
        // --- TABLAS DE PRECIOS (IMÁGENES INTEGRADAS) ---
        // IMPORTANTE: Asegúrate de usar esta clase en los nombres de los servicios en tu HTML
        ".service-name": [
            // Removibles
            "Full Acrylic",
            "Semi-flexible Full",
            "High-Impact Full",
            "Bio-characterized Full",
            "Acrylic / Acker Partial",
            "Flexible Partial",
            "Retainers",
            // Estética y Diseño
            "Teeth Whitening",
            "Resin Mini Designs",
            "Complete Resin Designs",
            "White Fillings (from)",
            // Fija
            "Metal-Ceramic Crowns",
            "Zirconium Crowns (Metal-Free)",
            // Ortodoncia y Clínica
            "Orthodontics (Initial)",
            "Orthodontic Adjustments",
            "Repairs",
            "Night Guards (Bruxism)",
            "Dental Cleanings",
            "Basic Extractions"
        ],

        ".payment-label": "Payment methods:",
        ".payment-methods": "Cash, bank transfer and credit cards",

        // --- SOBRE MÍ ---
        ".top-subtitle": "Get to know the story",
        ".top-title": "Who Am I?",
        ".highlight-text": "Trajectory and Passion",
        ".about-text-content h2": "Beyond a prosthesis, <br>we create <span class='text-gradient'>smiles.</span>",
        ".about-text-content > p": "As a graduate of the Universidad Santiago de Cali, my professional focus merges a scientific academic base with an artistic vision of dental design. We do not manufacture prostheses; we sculpt pieces of high technical precision to restore the functionality and confidence that each patient deserves.",
        ".check-list li": [
            "Academic Excellence: Backed by the comprehensive training of the Universidad Santiago de Cali, applying scientific rigor in every rehabilitation.",
            "Dentist's Ally: I work in close collaboration with specialists to ensure that each prosthesis adapts perfectly to the patient's treatment plan.",
            "Aesthetic Commitment: Detailed focus on dental morphology, guaranteeing results that exceed functional and visual expectations."
        ],

        // --- PORTAFOLIO SLIDER ---
        ".header-badge": "Clinical Portfolio",
        ".ultra-title": "Precision that <br><span class='gradient-text'>Transforms Smiles</span>",
        ".scroll-text": "Swipe to see more",
        ".case-title-dark": [
            "Flexible Acker upper lateral incisor", 
            "Flexible upper Acker", 
            "Resin restoration", 
            "Resin veneers", 
            "Resin restoration", 
            "Resin restoration", 
            "High aesthetic resin veneers"
        ],
        ".case-desc-dark": [
            "High precision solution that integrates natural aesthetics with optimal and discreet retention.",
            "Highly adaptable structure for optimal retention and absolute comfort without visible metal clasps.",
            "We restore the harmony and natural shine of your smile in a minimally invasive way.",
            "Minimally invasive rehabilitation with high chromatic integration and superior durability.",
            "Advanced stratification technique that recovers the functional anatomy and natural aesthetics of the tooth.",
            "Invisible integration with dental tissue, restoring shape, shine, and natural tone with minimal intervention.",
            "Precise layer-by-layer modeling to harmonize shape, color, and texture with natural results."
        ],

        // --- VIDEOS ---
        ".dental-title": "Discover Our Work",
        ".dental-subtitle": "JOIN US TO SEE THE PROCESS BEHIND EACH TRANSFORMATION",
        ".video-action-text": ["The Laboratory", "Our Processes"],
        ".video-sub-text": ["Play Video", "Play Video"],
        "#switchVideoBtn span": "Watch another video",

        // --- TESTIMONIOS DINÁMICOS (PACIENTES) ---
        "#client-1 .client-badge": "Success Story",
        "#client-2 .client-badge": "Success Stories",
        "#client-2 .client-name": "Satisfied Patients",
        "#client-1 .client-review": '"For me, excellence is non-negotiable, and that was exactly what I found at Kelly Cabrera Dental Laboratory. I was looking for a change that lived up to my standards and the final result was impeccable. What I highlight most is their ability to capture the exact aesthetics you want, achieving amazing naturalness. Working with them was the right decision; now my smile reflects exactly the confidence and personality I have always projected."',
        "#client-2 .client-review": '"At Kelly Cabrera Dental Laboratory, our greatest satisfaction is seeing how a smile transforms the lives of those who trust our work. Over the years, many patients have passed through our hands and the common denominator in their stories is the same: the peace of mind of having found a place where technical precision meets exceptional human quality. Whether they seek naturalness, confidence when smiling, or a change that feels authentic, our patients agree that here we not only transform teeth, but we help project the best version of each person, ensuring that each result is as unique as the one who wears it."',
        ".switch-text": "See another case",

        // --- TESTIMONIOS SLIDER (TARJETAS BLANCAS) ---
        ".testimo-subtitle": "What they say about us",
        ".testimo-header h2": "Real Smiles,<br>Real Stories",
        ".paciente-date": ["Recently", "2 weeks ago", "A month ago"],
        ".testimo-text": [
            "A dental laboratory of complete trust. They strictly comply with delivery times and the quality of materials is excellent. Very professional throughout the process.",
            "The attention is excellent and the service of high quality, I was satisfied! Thank you Kelly!",
            "Very efficient when performing the work, he stands out reinforcing every detail."
        ],
        ".swipe-indicator span": "Swipe to see more ➔",

        // --- UBICACIÓN ---
        ".location-content .section-title": "Find Us",
        ".location-content .section-subtitle": "Visit our laboratory. We will be happy to welcome you with the best technology and care.",
        ".info-group h4": ["<span class='live-dot'></span> Our Address", "Business Hours"],
        ".info-group p": ["Carrera 31A #8-61 Floor 2 - Office 2<br>Cali, Valle del Cauca", "Monday to Friday: 9:00 AM - 4:00 PM<br>Saturdays: 9:00 AM - 2:00 PM"],
        ".premium-btn": "Get Directions",

        // --- FOOTER ---
        ".contact-col .footer-heading": ["Main Branch Cali", "Personalized Attention", "Business Hours"],
        ".contact-col .footer-text": [
            "Carrera 31A #8-61 Floor 2 - Office 2<br>Cali, Valle del Cauca", 
            "Exclusive Line:<br><strong>+57 302 708 4024</strong>", 
            "Monday to Friday 9:00 AM – 4:00 PM<br>Saturdays 9:00 AM – 2:00 PM"
        ],
        ".footer-col:nth-child(2) .footer-heading": "Help Center",
        ".faq-link": "Frequently Asked Questions",
        ".footer-col:nth-child(3) .footer-heading": "Connect",
        ".footer-col:nth-child(3) .footer-text": "Transforming technology into perfect smiles.",
        ".footer-copyright p": "© 2026 Kelly Cabrera Laboratorio Dental. All rights reserved. Exclusive design."
    };

    // 3. Función clave: Hacer un backup del HTML original en español
    const saveOriginalText = () => {
        Object.keys(translationsEN).forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                // Solo guarda si no tiene ya el atributo para evitar sobreescribir con inglés por error
                if (!el.hasAttribute('data-es')) {
                    el.setAttribute('data-es', el.innerHTML); 
                }
            });
        });
    };

    // 4. Función de ejecución: Cambia los textos
    const changeLanguage = (lang) => {
        Object.keys(translationsEN).forEach(selector => {
            const elements = document.querySelectorAll(selector);
            const translation = translationsEN[selector];

            elements.forEach((el, index) => {
                if (lang === 'en') {
                    // Si el diccionario tiene un array (ej: varios testimonios, stats, precios)
                    if (Array.isArray(translation) && translation[index]) {
                        el.innerHTML = translation[index];
                    } 
                    // Si es un string único
                    else if (typeof translation === 'string') {
                        el.innerHTML = translation;
                    }
                } else {
                    // Si seleccionan Español, devuelve el innerHTML a su estado original
                    if (el.hasAttribute('data-es')) {
                        el.innerHTML = el.getAttribute('data-es');
                    }
                }
            });
        });

        // Toggle para pintar el botón activo en la barra superior y cambiar el lang del documento
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
            document.documentElement.lang = "en";
        } else {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = "es";
        }
    };

    // Inicializamos: guardamos el español apenas carga la página
    saveOriginalText();

    // 5. Escuchadores de eventos para los clics
    if (btnEs && btnEn) {
        btnEs.addEventListener('click', (e) => {
            e.preventDefault();
            changeLanguage('es');
        });
        btnEn.addEventListener('click', (e) => {
            e.preventDefault();
            changeLanguage('en');
        });
    }
});