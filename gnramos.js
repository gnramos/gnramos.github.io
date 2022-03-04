function header(lang='pt') {
  var department = `<a href="https://cic.unb.br" class="header" style="padding: 0px;">CIÊNCIA DA COMPUTAÇÃO</a>`;
  var institution = `<a href="https://www.unb.br" class="header" style="padding: 0px;">UNIVERSIDADE DE BRASÍLIA</a>`

  if (lang == 'en') {
    department = `<a href="https://cic.unb.br" class="header" style="padding: 0px;">COMPUTER SCIENCE</a>`;
    institution = `<a href="https://international.unb.br/" class="header" style="padding: 0px;">UNIVERSITY OF BRASÍLIA</a>`
  }

  var string = `    <div class="header">
      <span class="header-title">Guilherme N. Ramos</span><br>
      ${department} | ${institution}
    </div>`;

  document.write(string);
}

function topMenu(lang='pt') {
  var items = [["INÍCIO", "index"],
               ["ENSINO", "ensino"],
               ["PESQUISA", "pesquisa"],
               ["FAQ", "faq"],
               ['<img src="img/uk.png" style="height:1.25vw;">', 'index_en']];

  if (lang == 'en')
    items = [["HOME", "index_en"],
             ['<img src="img/br.png" style="height:1.25vw;">', 'index']];

  var current = window.location.pathname.split("/").pop();
  if (!current.endsWith('html'))
    current = 'index.html';

  var string = `
    <div class="container menu">
      <div class="side-bar"></div>
      <div class="menu">`;

  for (let item of items)
    string += `<a href="${item[1]}.html" class="menu${current.startsWith(item[1] + '.') ? "-selected" : ""}">${item[0]}</a>`;

  string += `
      </div>
    </div>`;

  document.write(string);
}

function footer(lang='pt') {
  var copyright = `TODOS OS DIREITOS RESERVADOS.`

  if (lang == 'en')
    copyright = `ALL RIGHTS RESERVED.`

  string = `    <div class="footer">
      © GUILHERME N. RAMOS. ${copyright}
    </div>`;

  document.write(string);
}

function sidebar(lang='pt') {
  const contact = ['gnramos', '@', 'unb', '.', 'br'].join('');

  // img file, info
  var items = [['img/person.png', '<a href="https://cic.unb.br">Professor Associado</a>'],
               ['img/earth.png', '<a href="agenda.html">Agenda</a>'],
               ['img/lattes.png', '<a href="http://lattes.cnpq.br/7879595143050087">Lattes</a>'],
               ['img/envelope.png', `<a href="mailto:${contact}">${contact}</a>`],
               ['img/phone.png', '+55 (61) 3107-2269'],
               ['img/building.png', '<a href="https://maps.google.com/maps?ll=-15.758052,-47.868466&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4121869616639421781">Sala A1-10/28</a>'],
              ];


  if (lang == 'en') {
    items[0][1] = '<a href="https://cic.unb.br">Associate Professor</a>';
    items[1][1] = '<a href="agenda.html">Schedule</a>';
    // items[2][1] = '';
    // items[3][1] = '';
    // items[4][1] = '';
    items[5][1] = '<a href="https://maps.google.com/maps?ll=-15.758052,-47.868466&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4121869616639421781">Room A1-10/28</a>';
  }

  string = `<div class="side-bar">
        <img src="img/gnramos.jpg" width=90% style="padding: 5%;">
        <ul>`

 for (let item of items)
    string += `<li style="list-style-image: url(${item[0]});">${item[1]}</li>`;

  string += `
        </ul>
      </div>`;

  document.write(string);
}

function show(list, map) {
  var string = "";

  for (item of list) {
    var title = item[0], values = item[1];
    string += `
                      <p class="info-content">
                        <strong>${title}</strong>
                        <ul>`;

    for (id of values)
      string += `
                          <li><a href="${map[id][1]}">${map[id][0]}</a> ${map[id][2]}</li>`;

    string += `
                        </ul>
                      </p>`;
  }

  document.write(string);
}

function toggle(itemId) {
    var content = document.getElementById(itemId);
    content.style.display = ('none' == content.style.display) ? '' : 'none';
}

function toggleAll() {
  for (let e of document.getElementsByClassName("toggle-content"))
    e.style.display = "none";
}

window.onload = toggleAll;