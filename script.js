/**
 * AÏDA DIENG — PORTFOLIO JAVASCRIPT INTERACTIF & MULTILINGUE
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 0. Système Multilingue (FR / EN) ---
    const translations = {
        fr: {
            'nav.home': 'Accueil',
            'nav.about': 'À propos',
            'nav.skills': 'Compétences',
            'nav.projects': 'Projets',
            'nav.contact': 'Contact',
            'nav.chat': 'Discutons',

            'hero.badge': 'PORTFOLIO PROFESSIONNEL',
            'hero.iam': 'JE SUIS',
            'hero.role': 'DÉVELOPPEUSE WEB',
            'hero.summary': "Passionnée par la conception d'interfaces web modernes, élégantes et centrées sur l'utilisateur.",
            'hero.btnProjects': 'Voir mes projets',
            'hero.btnContact': 'Me contacter',
            'hero.stat1Val': 'L3',
            'hero.stat1Text': 'Informatique & Dév',
            'hero.stat2Val': '3+',
            'hero.stat2Text': 'Projets Réalisés',
            'hero.stat3Val': 'UNCHK',
            'hero.stat3Text': 'Saint-Louis, Sénégal',
            'hero.scrollHint': 'Découvrir',

            'about.label': 'À PROPOS DE MOI',
            'about.title': 'Mon parcours & Ma vision',
            'about.subtitle': 'Découvrez qui je suis, ma passion pour le développement web et mes atouts pour vos projets.',
            'about.lead': 'Étudiante en <strong>Licence 3</strong> en Informatique de Développement et d’Applications à l’<strong>Université Cheikh Hamidou Kane (UNCHK)</strong>.',
            'about.p1': "Passionnée par le monde du numérique et les nouvelles technologies, j'ai développé au cours de mon parcours une solide expertise dans la conception et le déploiement de sites et d'interfaces web.",
            'about.p2': "Mon approche allie <strong>rigueur technique</strong> et <strong>sensibilité esthétique</strong>. Je m'attache à produire un code structuré, accessible et conforme aux standards modernes, tout en accordant une attention méticuleuse à l'expérience utilisateur (UI/UX).",
            'about.ctaContact': 'Me contacter',
            'about.ctaProjects': 'Découvrir mes réalisations',
            'about.card1Title': 'Développement Front-End',
            'about.card1Desc': "Création d'interfaces web réactives, intuitives et fidèles aux maquettes, optimisées pour tous les écrans.",
            'about.card2Title': 'Rigueur & Organisation',
            'about.card2Desc': 'Code propre, structuré et maintenable, respect des délais et maîtrise du versioning avec Git & GitHub.',
            'about.card3Title': 'Veille & Innovation',
            'about.card3Desc': 'Veille technologique continue et apprentissage constant pour maîtriser les outils et frameworks modernes.',

            'skills.label': 'MES COMPÉTENCES',
            'skills.title': 'Technologies & Outils Maîtrisés',
            'skills.subtitle': 'Un ensemble de compétences techniques et méthodologiques acquises à travers ma formation et mes projets concrets.',

            'projects.label': 'MES RÉALISATIONS',
            'projects.title': 'Projets Sélectionnés',
            'projects.subtitle': 'Une vitrine de mes travaux pratiques, alliant créativité, technique et souci du détail.',

            'contact.label': 'CONTACTEZ-MOI',
            'contact.title': 'Travaillons Ensemble',
            'contact.intro': 'Vous avez un projet web à concrétiser, une opportunité de stage ou vous souhaitez simplement échanger ? Je suis à votre écoute !',
            'contact.locLabel': 'Localisation',
            'contact.locVal': 'Saint-Louis, Sénégal',
            'contact.formSubmit': 'Envoyer le message'
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',

            'hero.badge': 'PROFESSIONAL PORTFOLIO',
            'hero.iam': 'I AM',
            'hero.role': 'WEB DEVELOPER',
            'hero.summary': 'Passionate about building modern, elegant, and user-centric web interfaces.',
            'hero.btnProjects': 'View My Projects',
            'hero.btnContact': 'Contact Me',
            'hero.stat1Val': 'BSc 3',
            'hero.stat1Text': 'Computer Science',
            'hero.stat2Val': '3+',
            'hero.stat2Text': 'Completed Projects',
            'hero.stat3Val': 'UNCHK',
            'hero.stat3Text': 'Saint-Louis, Senegal',
            'hero.scrollHint': 'Discover',

            'about.label': 'ABOUT ME',
            'about.title': 'My Journey & My Vision',
            'about.subtitle': 'Discover who I am, my passion for web development, and what I bring to your projects.',
            'about.lead': 'Student in <strong>Bachelor 3</strong> in Application Development at <strong>Cheikh Hamidou Kane University (UNCHK)</strong>.',
            'about.p1': 'Driven by digital innovation and new technologies, I have developed solid expertise in designing and deploying modern websites and user-friendly interfaces.',
            'about.p2': 'My approach combines <strong>technical rigor</strong> and <strong>aesthetic sensitivity</strong>. I focus on delivering clean, accessible, and standards-compliant code while paying meticulous attention to user experience (UI/UX).',
            'about.ctaContact': 'Contact Me',
            'about.ctaProjects': 'Explore My Projects',
            'about.card1Title': 'Front-End Development',
            'about.card1Desc': 'Crafting responsive, intuitive, and pixel-perfect web interfaces optimized for all device screens.',
            'about.card2Title': 'Rigor & Organization',
            'about.card2Desc': 'Clean, structured, and maintainable code, disciplined deadlines, and Git & GitHub version control.',
            'about.card3Title': 'Learning & Innovation',
            'about.card3Desc': 'Continuous technology monitoring and constant learning to master cutting-edge web tools and frameworks.',

            'skills.label': 'MY SKILLS',
            'skills.title': 'Technologies & Tools',
            'skills.subtitle': 'A set of technical and methodological skills developed through academic training and hands-on projects.',

            'projects.label': 'MY PORTFOLIO',
            'projects.title': 'Featured Projects',
            'projects.subtitle': 'A showcase of practical work combining creativity, engineering, and attention to detail.',

            'contact.label': 'CONTACT ME',
            'contact.title': "Let's Work Together",
            'contact.intro': 'Do you have a web project, an internship opportunity, or simply want to connect? Feel free to reach out!',
            'contact.locLabel': 'Location',
            'contact.locVal': 'Saint-Louis, Senegal',
            'contact.formSubmit': 'Send Message'
        }
    };

    let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        document.documentElement.lang = lang;

        // Traduction des textes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Mise à jour de l'indicateur du bouton
        const langToggleCode = document.getElementById('current-lang-code');
        if (langToggleCode) {
            langToggleCode.textContent = lang === 'fr' ? 'EN' : 'FR';
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');
    langSwitcher?.addEventListener('click', () => {
        const nextLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(nextLang);
    });

    // Initialisation de la langue
    setLanguage(currentLang);


    // --- 1. Gestion du Header & Navbar au Défilement ---
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            if (backToTop) backToTop.style.opacity = '1';
        } else {
            if (backToTop) backToTop.style.opacity = '0.7';
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- 2. Menu Mobile Drawer ---
    const menuToggle = document.getElementById('menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        const isOpen = navWrapper.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const openMenu = () => {
        menuToggle?.classList.add('open');
        navWrapper?.classList.add('open');
        mobileOverlay?.classList.add('active');
        menuToggle?.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        menuToggle?.classList.remove('open');
        navWrapper?.classList.remove('open');
        mobileOverlay?.classList.remove('active');
        menuToggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    menuToggle?.addEventListener('click', toggleMenu);
    mobileOverlay?.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // --- 3. Active Link Scroll Spy ---
    const sections = document.querySelectorAll('section[id]');

    const scrollSpy = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                correspondingLink?.classList.add('active');
            } else {
                correspondingLink?.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', scrollSpy, { passive: true });

    // --- 4. Intersection Observer pour Reveal Fluide au Scroll ---
    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealElements = document.querySelectorAll('.skill-card, .project-card, .about-card, .contact-item-card');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        revealObserver.observe(el);
    });

    // --- 5. Gestionnaire de Formulaire de Contact ---
    window.handleContactSubmit = () => {
        const nameInput = document.getElementById('form-name');
        const emailInput = document.getElementById('form-email');
        const subjectInput = document.getElementById('form-subject');
        const messageInput = document.getElementById('form-message');
        const submitBtn = document.getElementById('form-submit-btn');
        const statusBox = document.getElementById('form-status');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        // Animation du bouton
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> <span>Envoi en cours...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> <span>Message Envoyé !</span>';
            submitBtn.style.background = '#2e7d32';
            
            if (statusBox) {
                statusBox.className = 'form-status success';
                statusBox.style.display = 'block';
                statusBox.innerHTML = `Merci <strong>${nameInput.value}</strong> ! Votre message a été bien transmis à Aïda Dieng. Elle vous répondra sous 24h.`;
            }

            // Réinitialiser le formulaire
            document.getElementById('contact-form')?.reset();

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 4000);
        }, 1000);
    };
});
