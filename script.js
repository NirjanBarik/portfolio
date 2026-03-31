        // Preloader
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = 0;
            setTimeout(() => preloader.remove(), 500);
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        // Optional: close menu when a link is clicked (for better UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Scroll reveal
        const sections = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));

        // Particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            particlesContainer.appendChild(particle);
        }