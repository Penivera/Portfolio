// js/modules/animations.js
export function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Progress bar
    gsap.to('.progress-bar', {
        width: '100%', ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true }
    });

    // Narrative moments  reveal text blocks
    gsap.utils.toArray('.moment').forEach((moment) => {
        const texts = moment.querySelectorAll('.reveal-text');
        if (texts.length) {
            gsap.to(texts, {
                y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
                scrollTrigger: { trigger: moment, start: 'top 75%', toggleActions: 'play none none reverse' }
            });
        }
    });

    // Section headers
    document.querySelectorAll('.section-header.reveal-text, .more-projects-header.reveal-text, .experiments-section.reveal-text, .currently-section .reveal-text, .conversation-content.reveal-text').forEach((el) => {
        gsap.to(el.querySelectorAll('.reveal-text').length ? el.querySelectorAll('.reveal-text') : el, {
            y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
        });
    });

    // Workshop items  staggered reveal
    gsap.utils.toArray('.reveal-item').forEach((item, i) => {
        gsap.to(item, {
            y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none reverse' }
        });
    });
}
