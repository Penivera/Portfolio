import { initSmoothScrolling } from './modules/scroll.js';
import { initAnimations } from './modules/animations.js';

function init() {
    const lenis = initSmoothScrolling();
    initAnimations();

    // Connect Lenis to GSAP ticker
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
