gsap.registerPlugin(ScrollTrigger);
// GSAP animation with proper initial state
gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top 65%", // Start when .hero is 65% in viewport
        end: "bottom center",
        toggleActions: "play reverse play reverse",
    }
})
.fromTo(".lines", 
    { x: "100%", opacity: 0 },  // Starting state
    { x: "0%", opacity: 1, duration: 2, ease: "power3.out", stagger: 0.15 }
);
// Scroll reveal for sections
const revealElements = document.querySelectorAll('.section, .skills-grid, .profile-img');

revealElements.forEach((element) => {
    gsap.fromTo(element,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
});
// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
const resumeSections = document.querySelectorAll('.resume-section');

resumeSections.forEach((section, index) => {
    gsap.fromTo(section,
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            delay: index * 0.2
        }
    );
});

// Animate skill items
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach((item, index) => {
    gsap.fromTo(item,
        {
            opacity: 0,
            scale: 0.8
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            delay: index * 0.1
        }
    );
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});