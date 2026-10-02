// js/modules/filter.js
export function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-feature[data-category]');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach(card => {
                const categories = (card.getAttribute('data-category') || '').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = '';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });

            if (window.ScrollTrigger) {
                ScrollTrigger.refresh();
            }
        });
    });
}
