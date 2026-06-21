// ========================================
// Main JavaScript - Game Developer Portfolio
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    Navigation.init();
    HeroAnimation.init();
    ScrollAnimations.init();
    SkillBars.init();
    ContactForm.init();
    Particles.init();
});

// ========================================
// Navigation Module
// ========================================

const Navigation = {
    init: function() {
        this.navbar = document.querySelector('.navbar');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.bindEvents();
        this.updateActiveLink();
    },
    
    bindEvents: function() {
        // Scroll event for navbar
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.navToggle.classList.toggle('active');
                this.navMenu.classList.toggle('active');
            });
        }
        
        // Close mobile menu on link click
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
        
        // Update active link on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveLink();
        });
    },
    
    updateActiveLink: function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
};

// ========================================
// Hero Animation Module
// ========================================

const HeroAnimation = {
    init: function() {
        this.hero = document.querySelector('.hero');
        if (this.hero) {
            this.createParticles();
            this.animateStats();
        }
    },
    
    createParticles: function() {
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            this.hero.appendChild(particle);
        }
    },
    
    animateStats: function() {
        const stats = document.querySelectorAll('.stat-number');
        
        const animateStat = (stat) => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    stat.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }, 16);
        };
        
        // Trigger animation when hero is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stats.forEach(stat => animateStat(stat));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        if (this.hero) {
            observer.observe(this.hero);
        }
    }
};

// ========================================
// Scroll Animations Module
// ========================================

const ScrollAnimations = {
    init: function() {
        this.animatedElements = document.querySelectorAll('.animate-on-scroll');
        this.bindEvents();
    },
    
    bindEvents: function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        this.animatedElements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
};

// ========================================
// Skill Bars Module
// ========================================

const SkillBars = {
    init: function() {
        this.skillSections = document.querySelectorAll('.skills');
        this.bindEvents();
    },
    
    bindEvents: function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkills(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        this.skillSections.forEach(section => {
            observer.observe(section);
        });
    },
    
    animateSkills: function(section) {
        const progressBars = section.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 300);
        });
    }
};

// ========================================
// Contact Form Module
// ========================================

const ContactForm = {
    init: function() {
        this.form = document.querySelector('.contact-form');
        if (this.form) {
            this.bindEvents();
        }
    },
    
    bindEvents: function() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    },
    
    handleSubmit: function() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!this.validateForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = this.form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage();
            this.form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    },
    
    validateForm: function(data) {
        if (!data.name || data.name.trim() === '') {
            this.showError('Please enter your name');
            return false;
        }
        
        if (!data.email || !this.isValidEmail(data.email)) {
            this.showError('Please enter a valid email');
            return false;
        }
        
        if (!data.message || data.message.trim() === '') {
            this.showError('Please enter your message');
            return false;
        }
        
        return true;
    },
    
    isValidEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    showError: function(message) {
        alert(message);
    },
    
    showSuccessMessage: function() {
        alert('Thank you! Your message has been sent successfully.');
    }
};

// ========================================
// Particles Background Module
// ========================================

const Particles = {
    init: function() {
        this.canvas = document.getElementById('particles-canvas');
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.resize();
            this.createParticles();
            this.animate();
            this.bindEvents();
        }
    },
    
    resize: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    
    createParticles: function() {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 1 - 0.5,
                speedY: Math.random() * 1 - 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    },
    
    animate: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.y > this.canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 243, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    },
    
    bindEvents: function() {
        window.addEventListener('resize', () => {
            this.resize();
        });
    }
};

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Typing Effect for Hero Title
// ========================================

const TypingEffect = {
    init: function(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    },
    
    type: function() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        let typeSpeed = 100;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
};

// Initialize typing effect if element exists
const heroTitleElement = document.querySelector('.hero-title .txt-wrapper');
if (heroTitleElement) {
    TypingEffect.init(heroTitleElement, ['Game Developer', 'Unity Expert', 'Unreal Engine Master', 'Creative Coder'], 3000);
}

// ========================================
// Project Filter (Optional Feature)
// ========================================

const ProjectFilter = {
    init: function() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        
        if (this.filterButtons.length > 0) {
            this.bindEvents();
        }
    },
    
    bindEvents: function() {
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = btn.getAttribute('data-filter');
                this.filterProjects(filter);
                
                // Update active button
                this.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    },
    
    filterProjects: function(filter) {
        this.projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
};

// Initialize project filter
ProjectFilter.init();

console.log('🎮 Game Developer Portfolio Loaded Successfully!');
