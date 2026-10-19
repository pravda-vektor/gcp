
(function () {
  const button = document.querySelector('[data-menu-toggle]');
  const panel = document.querySelector('[data-mobile-panel]');
  if (button && panel) {
    button.addEventListener('click', () => {
      const open = panel.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const target = document.querySelector(btn.getAttribute('data-copy'));
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.innerText);
        const old = btn.textContent;
        btn.textContent = 'Copiado';
        setTimeout(() => btn.textContent = old, 1200);
      } catch (_) {}
    });
  });

  const materiaSearch = document.querySelector('[data-materia-search]');
  const materiaCategory = document.querySelector('[data-materia-category]');
  const materiaItems = Array.from(document.querySelectorAll('[data-materia-item]'));
  const materiaGroups = Array.from(document.querySelectorAll('[data-materia-group]'));
  const materiaStatus = document.querySelector('[data-materia-status]');

  if (materiaItems.length && (materiaSearch || materiaCategory)) {
    const normalize = (value) =>
      (value || '')
        .toLocaleLowerCase('es')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const applyMateriaFilter = () => {
      const term = normalize(materiaSearch ? materiaSearch.value.trim() : '');
      const category = materiaCategory ? materiaCategory.value : 'all';
      let visible = 0;

      materiaItems.forEach((item) => {
        const haystack = normalize(
          [item.textContent, item.getAttribute('data-keywords')].filter(Boolean).join(' ')
        );
        const categories = (item.getAttribute('data-category') || '').split(/\s+/);
        const matchesTerm = !term || haystack.includes(term);
        const matchesCategory = category === 'all' || categories.includes(category);
        const show = matchesTerm && matchesCategory;
        item.hidden = !show;
        if (show) visible += 1;
      });

      materiaGroups.forEach((group) => {
        const hasVisible = Array.from(group.querySelectorAll('[data-materia-item]'))
          .some((item) => !item.hidden);
        group.hidden = !hasVisible;
      });

      if (materiaStatus) {
        materiaStatus.textContent =
          visible === 1 ? '1 contenido encontrado.' : `${visible} contenidos encontrados.`;
      }
    };

    materiaSearch?.addEventListener('input', applyMateriaFilter);
    materiaCategory?.addEventListener('change', applyMateriaFilter);
    applyMateriaFilter();
  }

  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');

  const getTheme = () =>
    document.documentElement.getAttribute('data-theme') ||
    (themeMedia.matches ? 'dark' : 'light');

  const updateThemeToggle = () => {
    if (!themeToggle) return;
    const dark = getTheme() === 'dark';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute(
      'aria-label',
      dark ? 'Activar modo claro' : 'Activar modo nocturno'
    );

    const icon = themeToggle.querySelector('.theme-toggle-icon');
    const label = themeToggle.querySelector('.theme-toggle-label');
    if (icon) icon.textContent = dark ? '☀' : '☾';
    if (label) label.textContent = dark ? 'Modo claro' : 'Modo nocturno';
  };

  if (themeToggle) {
    updateThemeToggle();

    themeToggle.addEventListener('click', () => {
      const next = getTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('ft00080-theme', next);
      } catch (_) {}
      updateThemeToggle();
    });
  }

  themeMedia.addEventListener?.('change', (event) => {
    try {
      if (localStorage.getItem('ft00080-theme')) return;
    } catch (_) {}
    document.documentElement.setAttribute(
      'data-theme',
      event.matches ? 'dark' : 'light'
    );
    updateThemeToggle();
  });

})();
