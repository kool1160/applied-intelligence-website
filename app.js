document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  const closeNav = () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  navToggle.addEventListener('click', () => {
    const willOpen = !navLinks.classList.contains('is-open');
    navLinks.classList.toggle('is-open', willOpen);
    navToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', willOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeNav();
  });
}

const dock = document.querySelector('[data-mobile-dock]');
if (dock) {
  let lastY = window.scrollY;
  let stopTimer = null;
  let hidden = false;
  const isPhone = () => window.innerWidth <= 760;

  const showDock = () => {
    dock.classList.remove('is-hidden');
    hidden = false;
  };

  const hideDock = () => {
    dock.classList.add('is-hidden');
    hidden = true;
  };

  const queueShow = () => {
    clearTimeout(stopTimer);
    stopTimer = setTimeout(() => {
      if (isPhone()) showDock();
    }, 120);
  };

  const onScroll = () => {
    if (!isPhone()) {
      showDock();
      lastY = window.scrollY;
      return;
    }
    const y = window.scrollY;
    const delta = y - lastY;
    if (y < 40) {
      showDock();
    } else if (delta > 8 && !hidden) {
      hideDock();
    } else if (delta < -4) {
      showDock();
    }
    lastY = y;
    queueShow();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (!isPhone()) showDock();
  });
}
