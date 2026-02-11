/* ===================================================
   AGENTS CAROUSEL - Carregamento dinâmico via JSON
   =================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const agentsTrack = document.getElementById('agents-track');
    const prevBtn = document.getElementById('agents-prev');
    const nextBtn = document.getElementById('agents-next');
    const dotsContainer = document.getElementById('agents-dots');

    if (!agentsTrack || !prevBtn || !nextBtn || !dotsContainer) return;

    let agents = [];
    let currentIndex = 0;
    let cardsPerView = getCardsPerView();

    function getCardsPerView() {
        const viewport = document.querySelector('.agents-carousel__viewport');
        if (!viewport) return 1;
        const viewportWidth = viewport.offsetWidth;
        const gap = 32; // 2rem
        const cardWidth = 350;
        // Quantos cards cabem no viewport
        const count = Math.floor((viewportWidth + gap) / (cardWidth + gap));
        return Math.max(1, count);
    }

    // Carregar agentes do JSON
    async function loadAgents() {
        try {
            const response = await fetch('data/agents.json');
            if (!response.ok) throw new Error('Erro ao carregar agentes');
            agents = await response.json();
            renderAgents();
            renderDots();
            updateCarousel();
            initCardAnimations();
        } catch (error) {
            console.error('Erro ao carregar agentes:', error);
            agentsTrack.innerHTML = `
                <div class="agents__error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Não foi possível carregar os agentes. Tente novamente mais tarde.</p>
                </div>
            `;
        }
    }

    function renderAgents() {
        let html = '';

        agents.forEach(agent => {
            const isAvailable = agent.status === 'available';
            const badgeClass = isAvailable ? '' : ' agent-card__badge--soon';
            const linkClass = isAvailable ? '' : ' agent-card__link--disabled';
            const linkIcon = isAvailable
                ? '<i class="fas fa-arrow-right"></i>'
                : '<i class="fas fa-clock"></i>';

            html += `
                <article class="agent-card" data-agent-id="${agent.id}">
                    <div class="agent-card__header">
                        <div class="agent-card__icon">
                            <i class="${agent.icon}"></i>
                        </div>
                        <span class="agent-card__badge${badgeClass}">${agent.statusLabel}</span>
                    </div>
                    <h3 class="agent-card__title">${agent.title}</h3>
                    <p class="agent-card__description">${agent.description}</p>
                    <ul class="agent-card__features">
                        ${agent.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                    </ul>
                    <a href="${agent.link}" class="agent-card__link${linkClass}">
                        ${agent.linkText} ${linkIcon}
                    </a>
                </article>
            `;
        });

        // Card CTA "Contribua" — sempre ao final
        html += `
            <article class="agent-card agent-card--cta">
                <div class="agent-card__icon agent-card__icon--cta">
                    <i class="fas fa-plus"></i>
                </div>
                <h3 class="agent-card__title">Contribua com seu Agente</h3>
                <p class="agent-card__description">
                    Tem uma ideia de agente? Contribua com o projeto e ajude a comunidade!
                </p>
                <a href="https://github.com/microsoft/copilotagentbox" target="_blank" class="btn btn--primary btn--sm">
                    <i class="fab fa-github"></i> Contribuir
                </a>
            </article>
        `;

        agentsTrack.innerHTML = html;
    }

    function getTotalCards() {
        return agents.length + 1; // +1 para o card CTA
    }

    function getMaxIndex() {
        return Math.max(0, getTotalCards() - cardsPerView);
    }

    function renderDots() {
        const maxIdx = getMaxIndex();
        let dotsHtml = '';
        for (let i = 0; i <= maxIdx; i++) {
            dotsHtml += `<button class="agents-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Ir para slide ${i + 1}"></button>`;
        }
        dotsContainer.innerHTML = dotsHtml;

        dotsContainer.querySelectorAll('.agents-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.dataset.index);
                updateCarousel();
            });
        });
    }

    function updateCarousel() {
        const maxIdx = getMaxIndex();

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIdx) currentIndex = maxIdx;

        const cards = agentsTrack.querySelectorAll('.agent-card');
        if (cards.length === 0) return;

        const gap = parseFloat(getComputedStyle(agentsTrack).gap) || 24;
        const cardWidth = cards[0].offsetWidth;
        const offset = currentIndex * (cardWidth + gap);

        agentsTrack.style.transform = `translateX(-${offset}px)`;

        // Estado dos botões
        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex >= maxIdx);

        // Atualizar dots
        dotsContainer.querySelectorAll('.agents-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Navegação com botões
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < getMaxIndex()) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Suporte a swipe / touch
    let startX = 0;
    let isDragging = false;

    agentsTrack.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    agentsTrack.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex < getMaxIndex()) {
                currentIndex++;
            } else if (diff < 0 && currentIndex > 0) {
                currentIndex--;
            }
            updateCarousel();
        }
        isDragging = false;
    }, { passive: true });

    // Recalcular ao redimensionar a janela
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                cardsPerView = newCardsPerView;
                currentIndex = 0;
                renderDots();
            }
            updateCarousel();
        }, 200);
    });

    // Navegação por teclado
    const carouselEl = document.querySelector('.agents-carousel');
    if (carouselEl) {
        carouselEl.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                if (currentIndex > 0) { currentIndex--; updateCarousel(); }
            } else if (e.key === 'ArrowRight') {
                if (currentIndex < getMaxIndex()) { currentIndex++; updateCarousel(); }
            }
        });
    }

    // Aplica animações de scroll nos cards renderizados dinamicamente
    function initCardAnimations() {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        agentsTrack.querySelectorAll('.agent-card').forEach((el, index) => {
            el.style.opacity = '0';
            el.classList.add(`stagger-${(index % 4) + 1}`);
            observer.observe(el);
        });
    }

    // Inicializar
    loadAgents();
});
