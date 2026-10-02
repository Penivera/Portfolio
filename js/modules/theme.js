// js/modules/theme.js
export function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {}
    }

    toggle.addEventListener('click', () => {
        const current = getTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });
}
