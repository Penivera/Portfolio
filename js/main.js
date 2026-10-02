import { initSmoothScrolling } from './modules/scroll.js';
import { initAnimations } from './modules/animations.js';
import { initTheme } from './modules/theme.js';
import { initProjectFilters } from './modules/filter.js';

function init() {
    initTheme();
    initProjectFilters();

    const lenis = initSmoothScrolling();
    initAnimations();

    // Connect Lenis to GSAP ticker
    if (window.ScrollTrigger && window.gsap) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
