/**
 * Events Module
 * Carrega e renderiza os eventos a partir do arquivo data/events.json
 */

(function () {
    'use strict';

    /**
     * Gera o HTML de um card de evento a partir do objeto de dados
     */
    function createEventCard(event) {
        const featuredClass = event.featured ? ' event-card--featured' : '';
        const btnClass = event.linkStyle === 'primary' ? 'btn--primary' : 'btn--outline';

        const badgeHTML = event.featured
            ? '<div class="event-card__badge"><i class="fas fa-star"></i> Destaque</div>'
            : '';

        const speakerHTML = event.speaker
            ? `<span><i class="fas fa-user"></i> ${event.speaker}</span>`
            : '';

        return `
            <article class="event-card${featuredClass}">
                ${badgeHTML}
                <div class="event-card__date">
                    <span class="event-card__day">${event.day}</span>
                    <span class="event-card__month">${event.month}</span>
                </div>
                <div class="event-card__content">
                    <span class="event-card__type">
                        <i class="${event.typeIcon}"></i> ${event.type}
                    </span>
                    <h3 class="event-card__title">${event.title}</h3>
                    <p class="event-card__description">${event.description}</p>
                    <div class="event-card__meta">
                        <span><i class="fas fa-clock"></i> ${event.time}</span>
                        ${speakerHTML}
                    </div>
                    <a href="${event.link}" class="btn ${btnClass} btn--sm">
                        <i class="${event.linkIcon}"></i> ${event.linkText}
                    </a>
                </div>
            </article>
        `;
    }

    /**
     * Aplica as animações de scroll (IntersectionObserver) nos cards
     * renderizados dinamicamente, replicando o comportamento de initScrollEffects
     * do main.js para os elementos .event-card
     */
    function applyScrollAnimations() {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        var cards = document.querySelectorAll('#events-grid .event-card');
        cards.forEach(function (el, index) {
            el.style.opacity = '0';
            el.classList.add('stagger-' + ((index % 4) + 1));
            observer.observe(el);
        });
    }

    /**
     * Renderiza os eventos no grid
     */
    function renderEvents(events) {
        var grid = document.getElementById('events-grid');
        if (!grid) return;

        if (!events || events.length === 0) {
            grid.innerHTML = '<p class="events__empty">Nenhum evento disponível no momento.</p>';
            return;
        }

        grid.innerHTML = events.map(createEventCard).join('');

        // Re-aplica animações de scroll nos cards carregados dinamicamente
        applyScrollAnimations();
    }

    /**
     * Carrega os eventos do arquivo JSON
     */
    async function loadEvents() {
        var grid = document.getElementById('events-grid');
        if (!grid) return;

        try {
            var response = await fetch('data/events.json');

            if (!response.ok) {
                throw new Error('Erro ao carregar eventos: ' + response.status);
            }

            var data = await response.json();
            renderEvents(data.events);
        } catch (error) {
            console.error('Falha ao carregar eventos:', error);
            if (grid) {
                grid.innerHTML =
                    '<p class="events__error">' +
                    '<i class="fas fa-exclamation-triangle"></i> ' +
                    'Não foi possível carregar os eventos. Tente novamente mais tarde.' +
                    '</p>';
            }
        }
    }

    // Inicializa quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', loadEvents);
})();
