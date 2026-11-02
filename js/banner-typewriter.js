(() => {
  const paragraph = document.querySelector('.banner-typewriter');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!paragraph || reducedMotion.matches) return;

  paragraph.setAttribute('aria-label', paragraph.textContent.replace(/\s+/g, ' ').trim());

  const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const characters = [];
  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    for (const character of node.textContent) {
      const span = document.createElement('span');
      span.className = 'typing-character';
      span.textContent = character;
      span.setAttribute('aria-hidden', 'true');
      fragment.appendChild(span);
      characters.push(span);
    }
    node.replaceWith(fragment);
  });

  let index = 0;
  let timer;
  const finish = () => {
    clearTimeout(timer);
    characters.forEach((character) => {
      character.classList.add('is-visible');
      character.classList.remove('is-cursor');
    });
  };

  const type = () => {
    if (index > 0) characters[index - 1].classList.remove('is-cursor');
    while (index < characters.length && /\s/.test(characters[index].textContent)) {
      characters[index++].classList.add('is-visible');
    }
    if (index === characters.length) return;
    characters[index++].classList.add('is-visible', 'is-cursor');
    timer = setTimeout(type, index === characters.length ? 500 : 45);
  };

  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) finish();
  });
  type();
})();
