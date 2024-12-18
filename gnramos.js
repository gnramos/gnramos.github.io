const CALENDAR = 'https://outlook.office365.com/owa/calendar/b36b556712cd420ab6448aa7e6ff7983@unb.br/0e0dc54ea469484a87c3c599bafca2419623882151280019173/calendar.html';

const CONTACT = "&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#58;&#103;&#110;&#114;&#97;&#109;&#111;&#115;&#64;" + ["unb", "br"].join(".");

const ACTIVITIES = [
                    ['ensino.html', 'Ensino', 'education.svg'],
                    ['pesquisa.html', 'Pesquisa', 'microscope.svg'],
                    ['extensao.html', 'Extensão', 'globe.svg'],
                    ['gestao.html', 'Gestão', 'gear.svg'],
                    [CALENDAR, 'Agenda', 'calendar-days.svg'],
                   ];

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

function linkSIGAA(categoria) {
  return `<small>(<a href="https://sigaa.unb.br/sigaa/public/docente/${categoria}.jsf?siape=1848410">SIGAA</a>)</small>`;
}

function mapToList(array, listType='ul', listClass='', itemClass='') {
  if (listClass != '')
    listClass = `class="${listClass}"`;
  if (itemClass != '')
    itemClass = `class="${itemClass}"`;

  let items =  array.map((item) => `<li ${itemClass}>${item}</li>`);
  return `\n<${listType} ${listClass}>${items.join('\n\t')}\n</${listType}>\n`
}

function menuIcon(url, title, icon, writeTitle=false) {
  return `<a href="${url}" class="nav-link" title="${title}">
              <img  class="menu-icon"src="img/icons/${icon}" alt="${title}"/> ${writeTitle ? title : ''}
          </a>`;
}

function header() {
  let page = window.location.pathname.split('/').pop();
  let homeIcon = '';
  if (page != '' && !page.startsWith('index'))
    homeIcon = `<li class="nav-item">
              ${menuIcon('./', 'Início', 'home.svg')}
            </li>`;

  return `<div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="https://cic.unb.br/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="img/CIC.png" height="32">
          </a>
          <ul class="nav nav-pills">
            ${homeIcon}
            <li class="nav-item dropdown" title="Atividades">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              <img class="menu-icon"src="img/icons/bars.svg" alt="Atividades"/>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                ${mapToList(ACTIVITIES.map((info) => menuIcon(...info, true)), itemClass='nav-item')}
              </ul>
            </li>
            <li class="nav-item">
              ${menuIcon('faq.html', 'Perguntas Frequentes', 'circle-question.svg')}
            </li>
            <li class="nav-item">
              ${menuIcon(CONTACT, 'Contato', 'envelope.svg')}
            </li>
            <li class="nav-item">
              ${menuIcon("index_en.html", 'English Page', 'uk.png')}
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

function contentHeader(name, content, level=2) {
  return `
    <h${level}>${name}</h${level}>
    <p>
      ${content}
    </p>`;
}