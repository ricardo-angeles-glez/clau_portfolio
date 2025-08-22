// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuToggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
        menuToggle.classList.remove('active');
    });
});

// Scroll suave
document.querySelectorAll('nav ul li a, .btn-hero').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de barras de habilidades al hacer scroll
function animateSkills() {
    const skills = document.querySelectorAll('.skill-progress');
    const triggerPoint = window.innerHeight * 0.8;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerPoint) {
            skill.style.width = skill.getAttribute('data-progress');
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Modal de imágenes
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('click', e => {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;
        modalCaption.textContent = e.target.alt;
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Filtros de proyectos
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase active al botón clickeado
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projects.forEach(proj => {
            if(filter === 'all' || proj.getAttribute('data-category') === filter){
                proj.style.display = 'block';
                setTimeout(() => {
                    proj.style.opacity = '1';
                    proj.style.transform = 'translateY(0)';
                }, 10);
            } else {
                proj.style.opacity = '0';
                proj.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    proj.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Formulario de contacto
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name && email && message){
        formMsg.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
        formMsg.style.color = "green";
        form.reset();
        setTimeout(() => formMsg.textContent = "", 5000);
    } else {
        formMsg.textContent = "Por favor completa todos los campos.";
        formMsg.style.color = "red";
    }
});

// Animación de elementos al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill, .project-card, .about-content, .contact-content');
    const triggerPoint = window.innerHeight * 0.85;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if(elementTop < triggerPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar opacidad y posición de elementos
document.querySelectorAll('.skill, .project-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Efecto de escritura en el título
function typeWriterEffect() {
    const title = document.querySelector('.hero-title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const speed = 100;
    
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar efectos cuando la página cargue
window.addEventListener('load', () => {
    typeWriterEffect();
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});