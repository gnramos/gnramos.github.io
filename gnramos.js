const CONTACT = "&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#58;&#103;&#110;&#114;&#97;&#109;&#111;&#115;&#64;" + ["unb", "br"].join(".");

function linkSIGAA(categoria, nome='SIGAA', siape=1848410) {
  'producao'
  return `<small>(<a href="https://sigaa.unb.br/sigaa/public/docente/${categoria}.jsf?siape=${siape}">${nome}</a>)</small>`;
}

function navitemLinkClass(linkName) {
  let url = window.location.pathname.split('/');
  let page = url.pop();
  let isActive = false;
  if (linkName == 'atividades')
    for (activity of ['ensino', 'pesquisa', 'extensao', 'administracao'])
      isActive |= page.startsWith(activity);
  else
    isActive = page.startsWith(linkName);

  return 'nav-link' + (isActive ? ' active' : '');
}

function mapToList(array, listType='ul', itemClass='') {
  if (itemClass != '')
    itemClass = `class="${itemClass}"`;

  let items =  array.map((item) => `<li ${itemClass}>${item}</li>`);
  return `\n<${listType}>${items.join('\n\t')}\n</${listType}>\n`
}

function formatIcon(url, title, icon, writeTitle=false) {
  return `<a href="${url}" class="nav-link" title="${title}">
              <img  class="menu-icon"src="img/${icon}" alt="${title}"/> ${writeTitle ? title : ''}
          </a>`;
}

function header() {
  return `<div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="https://cic.unb.br/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="img/CIC.png" height="32">
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              ${formatIcon('index.html', 'Início', 'home.svg')}
            </li>
            <li class="nav-item dropdown" title="Atividades">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              <img class="menu-icon"src="img/bars.svg" alt="Atividades"/>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                  ${formatIcon('ensino.html', 'Ensino', 'education.svg', true)}
                </li>
                <li class="nav-item">
                  ${formatIcon('pesquisa.html', 'Pesquisa', 'microscope.svg', true)}
                </li>
                <li class="nav-item">
                  ${formatIcon('extensao.html', 'Extensão', 'people-group.svg', true)}
                </li>
                <li class="nav-item">
                  ${formatIcon('administracao.html', 'Administração', 'user-tie.svg', true)}
                </li>
                <li class="nav-item">
                  ${formatIcon('agenda.html', 'Agenda', 'calendar-days.svg', true)}
                </li>
              </ul>
            </li>
            <li class="nav-item">
              ${formatIcon('faq.html', 'Perguntas Frequentes', 'circle-question.svg')}
            </li>
            <li class="nav-item">
              ${formatIcon(CONTACT, 'Contato', 'envelope.svg')}
            </li>
            <li class="nav-item">
              ${formatIcon("index_en.html", 'English Page', 'uk.png')}
            </li>
          </ul>
        </header>
      </div>
      <div class="container">`;
}

function footer() {
  return `
      </div>
      <div class="container py-3 my-4 border-top">
        <p class="text-center text-body-secondary">&copy; ${new Date().getFullYear()} Guilherme N. Ramos</p>
      </div>`;
}

function accordion(name, items) {
  function formatItem(button, body, index) {
    const heading = `heading${name + index}`;
    return `
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading${heading}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${heading}" aria-expanded="false" aria-controls="collapse${heading}" style="background: var(--unb-green)">
        ${button}
      </button>
    </h2>
    <div id="collapse${heading}" class="accordion-collapse collapse" aria-labelledby="heading${heading}" data-bs-parent="#accordion${name}">
      <div class="accordion-body">
        ${body}
      </div>
    </div>
  </div>`;
  }

  let accordionItems = items.map((item, index) => formatItem(...item, index));

  return `
<div class="accordion" id="accordion${name}">
  ${accordionItems.join('\n')}
</div>`;
}

function formatContentHeader(level, name, content) {
  return `
    <h${level}>${name}</h${level}>
    <p>
      ${content}
    </p>`;
}