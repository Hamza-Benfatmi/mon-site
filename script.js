// Initialisation des animations
AOS.init({
    duration: 800,
    once: true
});

// Configuration des particules
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#4f46e5' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#4f46e5',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5
        }
    }
});

// Traductions dynamiques du contenu
const translationsData = {
    fr: {
        welcome: "Bienvenue !",
        typing: [
            "Étudiant en Master Électronique, Énergie Électrique et automatique",
            "Développeur Full Stack",
            "Passionné par les nouvelles technologies et l'intelligence artificielle"
        ],
        electronics: "Électronique & Systèmes Embarqués",
        electronicsDesc: "Spécialiste en conception de systèmes embarqués et robotique",
        software: "Développement Logiciel",
        softwareDesc: "Expert en développement d'applications web et mobiles",
        nav: {
            home: "Accueil",
            projects: "Projets",
            education: "Formation",
            certificates: "Certificats",
            experience: "Expérience",
            contact: "Contact"
        },
        form: {
            name: "Nom",
            email: "Email",
            message: "Message",
            send: "Envoyer"
        },
        chatbot: {
            title: "Assistant",
            placeholder: "Posez votre question..."
        }
    },
    en: {
        welcome: "Welcome!",
        typing: [
            "Master's Student in Electronics, Electrical Energy and Automation",
            "Full Stack Developer",
            "Passionate about new technologies and artificial intelligence"
        ],
        electronics: "Electronics & Embedded Systems",
        electronicsDesc: "Specialist in embedded systems design and robotics",
        software: "Software Development",
        softwareDesc: "Expert in web and mobile application development",
        nav: {
            home: "Home",
            projects: "Projects",
            education: "Education",
            certificates: "Certificates",
            experience: "Experience",
            contact: "Contact"
        },
        form: {
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send"
        },
        chatbot: {
            title: "Assistant",
            placeholder: "Ask your question..."
        }
    }
};

// Données multilingues dynamiques
const portfolioData = {
    fr: {
        education: [
            {
                year: '2024-2026',
                title: 'Master en Électronique, Énergie Électrique et automatique',
                school: 'Université Paris-Saclay'
            },
            {
                year: '2023-2024',
                title: "Licence en Électronique, Énergie Électrique et traitement de l'information",
                school: "Université d'Evry-Val-d'Essonne"
            },
            {
                year: '2021-2023',
                title: 'DUT en Systèmes Embarqués',
                school: 'Ecole Supérieure de Technologie | Fès-Maroc'
            }
        ],
        projects: {
            electronics: [
                {
                    title: "Développement d’un véhicule autonome et intelligent",
                    description: "Basé sur Raspberry Pi, avec évitement d’obstacles, reconnaissance de l’environnement via caméra embarquée et un système de communication avec une station de contrôle du trafic.",
                    technologies: ['Raspberry Pi', 'Caméra', 'Python', 'OpenCv','Yolo']
                },                
                {
                    title: "Construction d'un Robot",
                    description: "Projet réalisé en L3 à l'Université. Robot doté de multiples fonctionnalités (détection d'obstacles, suivi de lignes, lancement de balle, etc...).",
                    technologies: ['Carte Me Orion', 'Capteurs', 'Arduino IDE', 'RTOS', 'Moteurs Pas à Pas', 'Solidworks']
                },
                {
                    title: "IEEE 754 Floating Point Adder in VHDL",
                    description: "Implémentation d'un additionneur de nombres flottants basé sur la norme IEEE 754 en VHDL, permettant des calculs de haute précision en arithmétique flottante.",
                    technologies: ['VHDL', 'IEEE 754', 'Additionneur'],
                },
                {
                    title: "Robot Pompier Intelligent et Autonome",
                    description: "Développement d'un robot basé sur ESP32, capable de détecter les incendies et les obstacles.",
                    technologies: ['ESP32', 'Capteurs', 'Actionneurs', 'Java']
                },
                {
                    title: "Système de Surveillance Agricole Intelligent",
                    description: "Système intégrant des capteurs pour mesurer l'humidité, température et lumière, avec arrosage automatique via smartphone.",
                    technologies: ['Arduino', 'IoT', 'Capteurs', 'Actionneurs']
                },
                {
                    title: "Conception d'une Carte Électronique",
                    description: "Carte avec photorésistance pour allumer automatiquement une LED si la lumière est faible.",
                    technologies: ['ISIS', 'PCB Design']
                }
            ],
            software: [
                {
                    title: "Plateforme de Formation en Ligne et Application Mobile",
                    description: "Développement d’une plateforme e-learning avec application Flutter, backend Laravel et base PostgreSQL.",
                    technologies: ['Laravel', 'Flutter', 'HTML/CSS', 'JavaScript', 'PostgreSQL']
                },
                {
                    title: "Site Web E-commerce",
                    description: "Site avec front et back-office pour la gestion des commandes et utilisateurs en PHP/MySQL.",
                    technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL']
                },
                {
                    title: "Site de Réservation de Voitures",
                    description: "Site multilingue avec WooCommerce, UX optimisée et SEO.",
                    technologies: ['WordPress', 'WooCommerce', 'HTML/CSS', 'SEO']
                }
            ]
        },
        certificates: [
            { title: 'The complete Android 14 & Kotlin Development Masterclass', issuer: 'Udemy', date: '2024' },
            { title: 'Programmez en orienté objet avec C++', issuer: 'OpenClassrooms', date: '2024' },
            { title: 'Apprenez à programmer en C++ ', issuer: 'OpenClassrooms', date: '2023' },
            { title: "Développez un système embarqué critique pour l'avionique ", issuer: 'OpenClassrooms', date: '2023' },
            { title: "Certificate of attendance (Microcontrôleurs & IoT)", issuer: 'Orange', date: '2021' }
        ],
        experience: [
            {
                title: 'Stage | Londres, Royaume-Uni',
                company: 'Geek & Nerd LTD',
                period: 'Avril 2023 - Septembre 2023',
                description: 'Développement d’une application mobile de recettes basée sur l’intelligence artificielle.'
            },
            {
                title: 'Stage | Meknès, Maroc',
                company: 'Icon Solutions',
                period: 'Juin 2022 - Décembre 2022',
                description: "Application web pour télécommander un prototype de drone."
            }
        ]
    },
    en: {
        education: [
            {
                year: '2024-2026',
                title: 'Master in Electronics, Electrical Energy and Automation',
                school: 'Paris-Saclay University'
            },
            {
                year: '2023-2024',
                title: "Bachelor in Electronics, Electrical Energy and Information Processing",
                school: "Evry-Val-d'Essonne University"
            },
            {
                year: '2021-2023',
                title: 'DUT in Embedded Systems',
                school: 'Higher School of Technology | Fez-Morocco'
            }
        ],
        projects: {
            electronics: [
                {
                    title: "Development of an Autonomous and Intelligent Vehicle",
                    description: "Based on Raspberry Pi, with obstacle avoidance, environment recognition via onboard camera, and communication with a traffic control station.",
                    technologies: ['Raspberry Pi', 'Camera', 'Python', 'OpenCv','Yolo']
                },
                {
                    title: "Robot Construction",
                    description: "University project with obstacle detection, line tracking, ball launching, etc.",
                    technologies: ['Me Orion Board', 'Sensors', 'Arduino IDE', 'RTOS', 'Stepper Motors', 'Solidworks']
                },
                {
                    title: "IEEE 754 Floating Point Adder in VHDL",
                    description: "Implementation of a floating point adder based on the IEEE 754 standard in VHDL, enabling high precision floating point arithmetic calculations.",
                    technologies: ['VHDL', 'IEEE 754', 'Adder'],
                },                
                {
                    title: "Intelligent and Autonomous Firefighting Robot",
                    description: "ESP32 robot to detect fire and obstacles, controlled by a mobile app.",
                    technologies: ['ESP32', 'Sensors', 'Actuators', 'Java']
                },
                {
                    title: "Smart Agricultural Monitoring System",
                    description: "Soil moisture, temperature, and lighting sensors, with automatic irrigation.",
                    technologies: ['Arduino', 'IoT', 'Sensors', 'Actuators']
                },
                {
                    title: "Electronic Board Design",
                    description: "Board that activates LED using a photoresistor under low light.",
                    technologies: ['ISIS', 'PCB Design']
                }
            ],
            software: [
                {
                    title: "E-learning Platform and Mobile App",
                    description: "E-learning system with Flutter app, Laravel backend, PostgreSQL database.",
                    technologies: ['Laravel', 'Flutter', 'HTML/CSS', 'JavaScript', 'PostgreSQL']
                },
                {
                    title: "E-commerce Website",
                    description: "Website with user/order management, built with PHP/MySQL.",
                    technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL']
                },
                {
                    title: "Car Rental and Reservation Website",
                    description: "Multilingual website with WooCommerce, SEO and UX optimization.",
                    technologies: ['WordPress', 'WooCommerce', 'HTML/CSS', 'SEO']
                }
            ]
        },
        certificates: [
            { title: 'The complete Android 14 & Kotlin Development Masterclass', issuer: 'Udemy', date: '2024' },
            { title: 'Object-Oriented Programming with C++', issuer: 'OpenClassrooms', date: '2024' },
            { title: 'Learn to Program in C++', issuer: 'OpenClassrooms', date: '2023' },
            { title: "Develop a Critical Embedded System for Avionics", issuer: 'OpenClassrooms', date: '2023' },
            { title: "Certificate of attendance (Microcontrollers & IoT)", issuer: 'Orange', date: '2021' }
        ],
        experience: [
            {
                title: 'Internship | London, UK',
                company: 'Geek & Nerd LTD',
                period: 'April 2023 - September 2023',
                description: 'Mobile app development for recipes and meal prep with AI using Kotlin.'
            },
            {
                title: 'Internship | Meknes, Morocco',
                company: 'Icon Solutions',
                period: 'June 2022 - December 2022',
                description: "Web app to remotely control a drone prototype."
            }
        ]
    }
};

// 🎯 Variables globales
let currentLang = 'fr';

// 🎯 Fonctions
function updateStaticTexts() {
    const t = translationsData[currentLang];
    document.querySelector('.welcome-text').textContent = t.welcome;
    document.querySelector('#electronics-desc h3').textContent = t.electronics;
    document.querySelector('#electronics-desc p').textContent = t.electronicsDesc;
    document.querySelector('#software-desc h3').textContent = t.software;
    document.querySelector('#software-desc p').textContent = t.softwareDesc;

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const section = link.getAttribute('href').substring(1);
        link.textContent = t.nav[section];
    });

    document.getElementById('name').placeholder = t.form.name;
    document.getElementById('email').placeholder = t.form.email;
    document.getElementById('message').placeholder = t.form.message;
    document.querySelector('.submit-btn').textContent = t.form.send;
    document.querySelector('.chatbot-header span').textContent = t.chatbot.title;
    document.querySelector('.chatbot-input').placeholder = t.chatbot.placeholder;
}

function updateDynamicContent() {
    const data = portfolioData[currentLang];

    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';
    data.education.forEach(item => {
        timeline.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-content" data-aos="fade-up">
                    <h4>${item.year}</h4>
                    <h3>${item.title}</h3>
                    <p>${item.school}</p>
                </div>
            </div>
        `;
    });

    const electronicsGrid = document.querySelector('.electronics-content');
    const softwareGrid = document.querySelector('.software-content');
    electronicsGrid.innerHTML = '';
    softwareGrid.innerHTML = '';

    data.projects.electronics.forEach(project => {
        electronicsGrid.innerHTML += `
            <div class="project-item">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="technologies">${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
            </div>
        `;
    });

    data.projects.software.forEach(project => {
        softwareGrid.innerHTML += `
            <div class="project-item">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="technologies">${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
            </div>
        `;
    });

    const certGrid = document.querySelector('.certificates-grid');
    certGrid.innerHTML = '';
    data.certificates.forEach(cert => {
        certGrid.innerHTML += `
            <div class="certificate-item">
                <h4>${cert.title}</h4>
                <p>${cert.issuer}</p>
                <p>${cert.date}</p>
            </div>
        `;
    });

    const expGrid = document.querySelector('.experience-grid');
    expGrid.innerHTML = '';
    data.experience.forEach(exp => {
        expGrid.innerHTML += `
            <div class="experience-item">
                <h4>${exp.title}</h4>
                <h5>${exp.company}</h5>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `;
    });
}

let typingTimeout, erasingTimeout;
let textIndex = 0;
let charIndex = 0;

function startTypingAnimation() {
    const texts = translationsData[currentLang].typing;
    const typingElement = document.getElementById('typing-text');

    // Réinitialiser si déjà en cours
    clearTimeout(typingTimeout);
    clearTimeout(erasingTimeout);
    typingElement.textContent = '';
    textIndex = 0;
    charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typingElement.textContent += texts[textIndex][charIndex++];
            typingTimeout = setTimeout(type, 100);
        } else {
            erasingTimeout = setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = texts[textIndex].substring(0, --charIndex);
            erasingTimeout = setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            typingTimeout = setTimeout(type, 300);
        }
    }

    type();
}



// ⚙️ Langue et Theme
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    document.getElementById('langToggle').textContent = currentLang.toUpperCase();
    updateStaticTexts();
    updateDynamicContent();
    startTypingAnimation();  // Redémarrer l'animation après changement de langue
});


// ✅ Initialisation
document.addEventListener('DOMContentLoaded', () => {
    updateStaticTexts();
    updateDynamicContent();
    startTypingAnimation();
});

// 🔁 Gestion du switch entre profils (Électronique / Informatique)
const electronicsBtn = document.getElementById('electronicsBtn');
const softwareBtn = document.getElementById('softwareBtn');
const electronicsContent = document.querySelectorAll('.electronics-content');
const softwareContent = document.querySelectorAll('.software-content');

electronicsBtn.addEventListener('click', () => {
    electronicsBtn.classList.add('active');
    softwareBtn.classList.remove('active');
    electronicsContent.forEach(el => el.classList.add('active'));
    softwareContent.forEach(el => el.classList.remove('active'));
});

softwareBtn.addEventListener('click', () => {
    softwareBtn.classList.add('active');
    electronicsBtn.classList.remove('active');
    softwareContent.forEach(el => el.classList.add('active'));
    electronicsContent.forEach(el => el.classList.remove('active'));
});

// Chatbot
const chatbot = document.getElementById('chatbot');
const openChatbot = document.getElementById('openChatbot');
const closeChatbot = document.getElementById('closeChatbot');

openChatbot.addEventListener('click', () => {
    chatbot.style.display = 'flex';
    openChatbot.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
    chatbot.style.display = 'none';
    openChatbot.style.display = 'block';
});

const chatbotInput = document.querySelector('.chatbot-input');
const chatbotMessages = document.querySelector('.chatbot-messages');

chatbotInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
        const userMessage = chatbotInput.value.trim();
        addMessage("Vous", userMessage);
        chatbotInput.value = '';

        // Réponse simple automatique
        setTimeout(() => {
            const response = getChatbotResponse(userMessage);
            addMessage("Bot", response);
        }, 500);
    }
});

function addMessage(sender, text) {
    const msg = document.createElement('div');
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbotMessages.appendChild(msg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getChatbotResponse(message) {
    message = message.toLowerCase();
    if (message.includes("bonjour") || message.includes("salut")) {
        return currentLang === 'fr' ? "Bonjour ! Comment puis-je vous aider ?" : "Hello! How can I help you?";
    }
    if (message.includes("projet")) {
        return currentLang === 'fr' ? "J'ai plusieurs projets en électronique et en informatique." : "I have various projects in electronics and software.";
    }
    if (message.includes("email") || message.includes("contact")) {
        return currentLang === 'fr' ? "Vous pouvez me contacter via le formulaire de contact." : "You can reach me through the contact form.";
    }
    return currentLang === 'fr' ? "Désolé, je n'ai pas compris. 😅" : "Sorry, I didn’t understand. 😅";
}

const sendMessageBtn = document.getElementById('sendMessageBtn');

sendMessageBtn.addEventListener('click', () => {
    if (chatbotInput.value.trim() !== '') {
        const userMessage = chatbotInput.value.trim();
        addMessage("Vous", userMessage);
        chatbotInput.value = '';

        // Réponse simple automatique
        setTimeout(() => {
            const response = getChatbotResponse(userMessage);
            addMessage("Bot", response);
        }, 500);
    }
});

// Formulaire de contact
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Utilisation de mailto pour envoyer un e-mail
    const subject = "Nouveau message depuis mon site";
    const body = `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Créer un lien mailto avec les données
    const mailtoLink = `mailto:hamzabenfatmi10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Ouvre l'email dans le client de messagerie de l'utilisateur
    window.location.href = mailtoLink;

    // Optionnel : Réinitialiser le formulaire après l'envoi
    contactForm.reset();

    alert('Message envoyé avec succès!');
});




// Helper functions
function updateParticlesColor(color) {
    if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.color.value = color;
        window.pJSDom[0].pJS.particles.line_linked.color = color;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
    updateParticlesColor('#00ff9d');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    updateParticlesColor(isDark ? '#00ff9d' : '#4f46e5');
});