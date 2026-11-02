(() => {
  const items = Array.from(document.querySelectorAll('.timeline-item'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!items.length || reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.replace('is-pending', 'is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px -48px 0px' });

  items.forEach((item) => {
    // Keep cards already visible on load readable without waiting for a scroll.
    if (item.getBoundingClientRect().top < window.innerHeight - 48) return;
    item.classList.add('is-pending');
    observer.observe(item);
  });

  reducedMotion.addEventListener('change', (event) => {
    if (!event.matches) return;
    observer.disconnect();
    items.forEach((item) => item.classList.remove('is-pending', 'is-revealed'));
  });
})();
