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

function mailtolink() {
  return "&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#58;&#103;&#110;&#114;&#97;&#109;&#111;&#115;&#64;unb.br"
}

function mapToList(array, list='ul') {
  let items =  array.map((item) => `<li>${item}</li>`);
  return `\n<${list}>${items.join('\n\t')}\n</${list}>\n`
}

function header() {
  return `<div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="https://cic.unb.br/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="img/CIC.png" height="32">
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="index.html" class="${navitemLinkClass('index')}">Início</a></li>
            <li class="nav-item dropdown">
              <a class="${navitemLinkClass('atividades')} dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Atividades
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="ensino.html">Ensino</a></li>
                <li><a class="dropdown-item" href="pesquisa.html">Pesquisa</a></li>
                <li><a class="dropdown-item" href="extensao.html">Extensão</a></li>
                <li><a class="dropdown-item" href="administracao.html">Administração</a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="agenda.html" class="${navitemLinkClass('agenda')}">Agenda</a></li>
            <li class="nav-item"><a href="faq.html" class="${navitemLinkClass('faq')}">FAQ</a></li>
            <li class="nav-item"><a href="${mailtolink()}" class="nav-link">
              <img src="img/email.svg" alt="e-mail" height="20"/></a>
            </li>
            <li class="nav-item"><a href="http://lattes.cnpq.br/7879595143050087" class="nav-link">
              <img src="img/lattes.png" alt="Currículo Lattes" height="20"/></a>
            </li>
            <li class="nav-item"><a href="index_en.html" class="nav-link"><img src="img/uk.png" height="20"/></a>
            </li>
          </ul>
        </header>
      </div>
      <div class="container">`;
}

function footer() {
  return `
      </div>
      <div class="container">
        <footer class="py-3 my-4 border-top">
          <p class="text-center text-body-secondary">&copy; ${new Date().getFullYear()} Guilherme N. Ramos</p>
        </footer>
      </div>`;
}

function accordion(name, items) {
  let accItems = '';
  let collapseFirst = true;
  for (i in items) {
    accItems += `
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading${name + i}">
      <button class="accordion-button ${collapseFirst ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${name + i}" aria-expanded="false" aria-controls="collapse${name + i}" style="background: var(--unb-green)">
        ${items[i][0]}
      </button>
    </h2>
    <div id="collapse${name + i}" class="accordion-collapse collapse ${collapseFirst ? '' : 'show'}" aria-labelledby="heading${name + i}" data-bs-parent="#accordion${name}">
      <div class="accordion-body">
        ${items[i][1]}
      </div>
    </div>
  </div>`;
    if (!collapseFirst) collapseFirst = true;
  }

  return `
<div class="accordion" id="accordion${name}">
  ${accItems}
</div>`;
}

/*
function show(list, map) {
  let string = '';

  for (item of list) {
    let [title, values] = item;
    document.write(`
                      <p>
                        <strong>${title}</strong>
                        <ul>`);

    for (id of values) {
      let [name, url, extra] = map[id];
      document.write(`
                          <li><a href="${url}">${name}</a> ${extra}</li>`);
    }

    document.write(`
                        </ul>
                      </p>`);
  }
}*/