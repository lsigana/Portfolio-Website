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
    { x: "0%", opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15 }
);
