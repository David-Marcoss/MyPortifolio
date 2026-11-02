(() => {
  const mount = document.querySelector('#projects-list');
  if (!mount || typeof PROJECTS === 'undefined') return;
  const fallbackImage = 'img/projects/project-placeholder.svg';

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function ProjectTechBadge(technology) {
    return element('li', 'project-tech-badge', technology);
  }

  function technologies(project, expanded = false) {
    const list = element('ul', 'project-tech-list');
    list.setAttribute('aria-label', 'Tecnologias utilizadas');
    const visible = expanded ? project.technologies : project.technologies.slice(0, 5);
    visible.forEach(tech => list.append(ProjectTechBadge(tech)));
    if (!expanded && project.technologies.length > 5) {
      const rest = project.technologies.slice(5);
      const badge = ProjectTechBadge(`+${rest.length}`);
      badge.title = rest.join(', ');
      badge.setAttribute('aria-label', `Outras tecnologias: ${rest.join(', ')}`);
      list.append(badge);
    }
    return list;
  }

  function projectLinks(project) {
    const links = element('div', 'project-actions');
    [[project.projectUrl, 'Ver projeto'], [project.repositoryUrl, 'GitHub']].forEach(([url, label]) => {
      if (!url || !/^https:\/\//.test(url)) return;
      const link = element('a', 'project-button', label);
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${label}: ${project.name}`);
      links.append(link);
    });
    return links;
  }

  function ProjectDetails() {
    const dialog = element('dialog', 'project-dialog');
    dialog.setAttribute('aria-labelledby', 'project-details-title');
    const close = element('button', 'project-button project-dialog-close', 'Fechar');
    close.type = 'button';
    const content = element('div', 'project-dialog-content');
    dialog.append(close, content);
    document.body.append(dialog);
    let trigger;
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('project-modal-open');
      trigger?.focus();
    });

    return {
      open(project, button) {
        trigger = button;
        const details = project.details;
        const title = element('h2', '', project.name);
        title.id = 'project-details-title';
        content.replaceChildren(title, element('p', '', details.description));
        function section(titleText, values) {
          if (!values?.length) return;
          content.append(element('h3', '', titleText));
          const list = element('ul');
          values.forEach(value => list.append(element('li', '', value)));
          content.append(list);
        }
        content.append(element('h3', '', 'Problema que resolve'), element('p', '', details.problem));
        section('Principais funcionalidades', details.features);
        content.append(element('h3', '', 'Tecnologias utilizadas'), technologies(project, true));
        section('Minhas contribuições', details.contributions);
        section('Desafios técnicos e soluções', details.challenges);
        content.append(projectLinks(project));
        dialog.showModal();
        document.documentElement.classList.add('project-modal-open');
        close.focus();
      },
    };
  }

  const detailsView = ProjectDetails();

  function ProjectCard(project) {
    const card = element('article', `project-card${project.featured ? ' project-card-featured' : ''}`);
    card.setAttribute('aria-labelledby', `project-${project.id}`);
    const media = element('div', 'project-media');
    const image = element('img');
    image.alt = `Prévia do projeto ${project.name}`;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.width = 640;
    image.height = 360;
    image.addEventListener('error', () => {
      image.src = fallbackImage;
      image.alt = `Imagem indisponível: ${project.name}`;
    }, { once: true });
    image.src = project.image || fallbackImage;
    media.append(image);
    if (project.featured) media.append(element('span', 'project-featured-label', 'Em destaque'));
    const body = element('div', 'project-content');
    const name = element('h4', 'project-name', project.name);
    name.id = `project-${project.id}`;
    const description = element('p', 'project-description', project.description);
    body.append(name, description, technologies(project));
    const actions = projectLinks(project);
    if (project.details) {
      const button = element('button', 'project-button project-button-secondary', 'Ver detalhes');
      button.type = 'button';
      button.setAttribute('aria-label', `Ver detalhes: ${project.name}`);
      button.setAttribute('aria-haspopup', 'dialog');
      button.addEventListener('click', () => detailsView.open(project, button));
      actions.append(button);
    }
    body.append(actions);
    card.append(media, body);
    return card;
  }

  function FeaturedProjects(projects) {
    return [...projects.filter(project => project.featured), ...projects.filter(project => !project.featured)];
  }

  function ProjectsGrid(projects) {
    const grid = element('div', 'projects-grid');
    projects.forEach(project => grid.append(ProjectCard(project)));
    return grid;
  }

  function ProjectsSection() {
    const fragment = document.createDocumentFragment();
    [['professional', 'Profissionais'], ['personal', 'Pessoais']].forEach(([category, title]) => {
      const section = element('section', `projects-category projects-category-${category}`);
      const heading = element('h3', 'projects-category-title', title);
      heading.id = `projects-${category}`;
      section.setAttribute('aria-labelledby', heading.id);
      section.append(heading, ProjectsGrid(FeaturedProjects(PROJECTS.filter(project => project.category === category))));
      fragment.append(section);
    });
    mount.replaceChildren(fragment);
  }
  ProjectsSection();
})();
