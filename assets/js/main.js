(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  const header = document.querySelector('.site-header');
  const scrollTop = document.querySelector('.scroll-top');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function setMenu(open) {
    if (!toggle || !menu) {
      return;
    }
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open.toString());
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');

    if (open) {
      const firstLink = menu.querySelector('a');
      if (firstLink) {
        firstLink.focus({ preventScroll: true });
      }
    } else {
      toggle.focus({ preventScroll: true });
    }
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.contains('is-open');
      setMenu(!isOpen);
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setMenu(false);
      }
    });

    menu.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setMenu(false);
      }
    });
  }

  let ticking = false;

  function onScroll() {
    if (ticking) {
      return;
    }
    window.requestAnimationFrame(function () {
      const scrollY = window.scrollY;

      if (header) {
        header.classList.toggle('is-scrolled', scrollY > 50);
      }

      if (scrollTop) {
        scrollTop.classList.toggle('is-visible', scrollY > 400);
      }

      ticking = false;
    });
    ticking = true;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (scrollTop) {
    scrollTop.addEventListener('click', function () {
      const behavior = reducedMotion.matches ? 'auto' : 'smooth';
      window.scrollTo({ top: 0, behavior: behavior });
    });
  }

  const galleryCards = document.querySelectorAll('.gallery__card');
  const galleryModal = document.getElementById('gallery-modal');

  if (galleryModal && galleryCards.length) {
    const modalImage = galleryModal.querySelector('.gallery-modal__image');
    const modalTitle = galleryModal.querySelector('.gallery-modal__title');
    const modalDesc = galleryModal.querySelector('.gallery-modal__desc');

    galleryCards.forEach(function (card) {
      card.addEventListener('click', function () {
        if (modalImage) {
          modalImage.src = card.dataset.src || '';
          modalImage.alt = card.dataset.title || '';
        }
        if (modalTitle) modalTitle.textContent = card.dataset.title || '';
        if (modalDesc) modalDesc.textContent = card.dataset.desc || '';
        galleryModal.showModal();
      });
    });

    galleryModal.addEventListener('click', function (event) {
      const rect = galleryModal.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        galleryModal.close();
      }
    });
  }
})();
