function header() {
  var items = [["INÍCIO", "index"],
               ["ENSINO", "ensino"],
               ["PESQUISA", "pesquisa"],
               ["FAQ", "faq"]];
  var current = window.location.pathname.split("/").pop();
  if (!current.endsWith('html'))
    current = 'index.html';

  var string = `    <div class="header">
      <span class="header-title">Guilherme N. Ramos</span><br>
      <a href="http://cic.unb.br" class="header" style="
  padding: 0px;">CIÊNCIA DA COMPUTAÇÃO</a> | <a href="http://www.unb.br" class="header" style="
  padding: 0px;">UNIVERSIDADE DE BRASÍLIA</a>
    </div>
    <div class="container menu">
      <div class="side-bar"></div>
      <div class="menu">`;

  for (let item of items)
    string += `<a href="${item[1]}.html" class="menu${current.startsWith(item[1]) ? "-selected" : ""}">${item[0]}</a>`;

  string += `
      </div>
    </div>`;

  document.write(string);
}

function footer() {
  string = `    <div class="footer">
      © GUILHERME N. RAMOS. TODOS OS DIREITOS RESERVADOS.
    </div>`;

  document.write(string);
}

function sidebar() {
  const contact = ['gnramos', '@', 'unb', '.', 'br'].join('');
  string = `<div class="side-bar">
        <img src="img/gnramos.jpg" width=90% style="padding: 5%;">
        <ul>
          <li style="list-style-image: url(img/person.png);"><a href="https://cic.unb.br/">Professor Associado</a></li>
          <li style="list-style-image: url(img/earth.png);"><a href="agenda.html">Agenda</a></li>
          <li style="list-style-image: url(img/lattes.png);"><a href="http://lattes.cnpq.br/7879595143050087">Lattes</a></li>
          <li style="list-style-image: url(img/envelope.png);"><a href="mailto:${contact}">${contact}</a></li>
          <li style="list-style-image: url(img/phone.png);">+55 (61) 3107-2269</li>
          <li style="list-style-image: url(img/building.png);"><a href="https://maps.google.com/maps?ll=-15.758052,-47.868466&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4121869616639421781">Sala A1-10/28</a></li>
        </ul>
      </div>`;

  document.write(string);
}

function makeItem(values) {
  return `<li><a href="${values[1]}">${values[0]}</a> ${values[2]}</li>`;
}

function show(list, map) {
  var string = "";

  for (item of list) {
    var title = item[0], values = item[1];
    string += `
                      <p class="info-content">
                        <strong>${title}</strong>
                        <ul>`;

    for (id of values) {
      string += `
                          ${makeItem(map[id])}`;
    }

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