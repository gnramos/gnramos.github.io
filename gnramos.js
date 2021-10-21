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
  string = `<div class="side-bar">
        <img src="img/gnramos.jpg" width=90% style="padding: 5%;">
        <ul>
          <li style="list-style-image: url(img/person.png);"><a href="https://cic.unb.br/">Professor Associado</a></li>
          <li style="list-style-image: url(img/earth.png);"><a href="agenda.html">Agenda</a></li>
          <li style="list-style-image: url(img/lattes.png);"><a href="http://lattes.cnpq.br/7879595143050087">Lattes</a></li>
          <li style="list-style-image: url(img/envelope.png);"><a href="mailto:gnramos@unb.br">gnramos@unb.br</a></li>
          <li style="list-style-image: url(img/phone.png);">+55 (61) 3107-2269</li>
          <li style="list-style-image: url(img/building.png);"><a href="https://maps.google.com/maps?ll=-15.758052,-47.868466&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=4121869616639421781">Sala A1-10/28</a></li>
        </ul>
      </div>`;

  document.write(string);
}

function makeItem(values) {
  return `<li><a href="${values[1]}">${values[0]}</a> ${values[2]}</li>`;
}

var MAP_STUDENTS = { // id: [título, url, extra]
  "Tiago Barros Pontes e Silva": ["Morfogênese : sistema autopoiético emergente de vida artificial",
                                  "http://repositorio.unb.br/handle/10482/15454",
                                  ` - Tiago Barros Pontes e Silva (coorientação com a <a href="http://www.suzeteventurelli.ida.unb.br/">Profa. Suzete Venturelli</a>)`],
  "Ana Carolina Pereira Rocha": ["Mineração de Textos para Classificação de Processos Judiciais Trabalhistas",
                                 "https://repositorio.unb.br/handle/10482/37933",
                                 " - Ana Carolina Pereira Rocha"],
  "José Abílio de Paiva Ramos": ["Árvores de decisão aplicadas à detecção de fraudes bancárias",
                                 "http://repositorio.unb.br/handle/10482/16954",
                                 " - José Abílio de Paiva Ramos"],
  "Lucas Rocha Soares de Assis": ["Perfil de evasão no ensino superior brasileiro : uma abordagem de mineração de dados",
                                  "https://repositorio.unb.br/handle/10482/32139",
                                  " - Lucas Rocha Soares de Assis"],
  "Renan Martins Sousa": ["Mineração de Dados para Predição da Dispensação de Medicamentos do Componente Especializado da Assistência Farmacêutica no Sistema Único de Saúde",
                          "https://repositorio.unb.br/handle/10482/37288",
                          " - Renan Martins Sousa"],
  "Roberto Nunes Mourão": ["Mineração de Dados para Previsão de Renda de Clientes com Contas-Correntes Digitais",
                           "http://repositorio.unb.br/handle/10482/33918",
                           "- Roberto Nunes Mourão"],
  "Rodrigo Nunes Peclat": ["Avaliação semântica da integração da gestão de riscos de segurança em documentos de software da administração pública",
                           "http://repositorio.unb.br/handle/10482/18827",
                           "- Rodrigo Nunes Peclat"],
  "Andrew Yuri da Silva Mata": ["UNB-ESA: Uma abordagem semântica para classificador de tetos em linguagem natural",
                                "",
                                "- Andrew Yuri da Silva Mata"],
  "Clara Marques Caldeira": ["TORCS Training Interface : uma ferramenta auxiliar ao desenvolvimento de pilotos do TORCS",
                             "http://bdm.unb.br/handle/10483/6807",
                             "- Clara Marques Caldeira"],
  "Luiggi Monteiro Reffatti": ["DeltaPath : um módulo genérico de planejamento de trajetória",
                               "http://bdm.unb.br/handle/10483/6531",
                               `- Luiggi Monteiro Reffatti (coorientação com a <a href="http://cic.unb.br/~carlacastanho/">Profa. Carla Castanho</a>)`],
  "Matheus Vieira Portela": ["Seleção de Comportamentos em Múltiplos Agentes Autônomos com Aprendizagem pro Reforço em Ambientes Estocásticos",
                             "http://bdm.unb.br/handle/10483/15302",
                             "- Matheus Vieira Portela"],
  "Rodrigo Werberich da S. M. de Oliveira": ["Planejamento de Trajetória para Robô Autônomo",
                             "http://bdm.unb.br/handle/10483/19224",
                             `- Rodrigo Werberich da S. M. de Oliveira (coorientação com o <a href="https://www.lara.unb.br/~gaborges/">Prof. Geovany Araújo Borges</a>)`],
  "Wladimir Ganzelevitch Mesquita Gramacho": ["Algoritmos de Mineração de Dados para Análise de Evasão na Graduação da Universidade de Brasília",
                                              "https://bdm.unb.br/handle/10483/24527",
                                              "- Wladimir Ganzelevitch Mesquita Gramacho"],
  "Edgar Fabiano de Souza Filho": ["Implementação Modular de Controlador TORCS Baseado em Máquinas de Estados Finitos",
                                   "",
                                   "- Edgar Fabiano de Souza Filho"],
  "Fábio Costa Farias Marques": ["Análise de Métricas de Avaliação com o Simulador TORCS para Desenvolvimento de Controladores de Veículos Autônomos",
                                 "https://drive.google.com/file/d/1LJ5EXsnESL-xw2qyfhGCBDaWKKXz8hLo/view?usp=sharing",
                                 "- Fábio Costa Farias Marques"],
  "Fernando Teixeira de Freitas da Costa Nunes": ["Implementação de Frenagem ABS no Controlador de Veículo Autônomo",
                                                  "https://drive.google.com/file/d/1LJ5EXsnESL-xw2qyfhGCBDaWKKXz8hLo/view?usp=sharing",
                                                  "- Fernando Teixeira de Freitas da Costa Nunes"],
  "Guido Dutra de Oliveira": ["Desenvolvimento de Controlador PID para Veículos Autônomos",
                              "",
                              "- Guido Dutra de Oliveira"],
  "Lucas Avelino de Lima Jacinto": ["Implementação de Controlador PID para Veículos Autônomos",
                                    "",
                                    "- Lucas Avelino de Lima Jacinto"],
  "Pedro Saman Diogenes Nogueira Cesarino": ["Implementação de Agente Racional Autônomo para Aprendizagem de Comportamentos Colaborativos",
                                             "http://conferencias.unb.br/index.php/iniciacaocientifica/23cicunb14df/paper/view/8360",
                                             "- Pedro Saman Diogenes Nogueira Cesarino"],
  "Renato Avellar Nobre": ["Implementação de Comunicação entre Agentes Autônomos para Aprendizagem de Comportamentos Colaborativos",
                           "http://conferencias.unb.br/index.php/iniciacaocientifica/23cicunb14df/paper/view/8361",
                           "- Renato Avellar Nobre"],
  "Rodrigo Werberich da S. M. de Oliveira": ["Simulação de Robôs Autônomos Cooperativos para Posicionar Objetos",
                                             "http://proic.unb.br/images/Anais/2015/ResumoProIC-2013-Vol3.pdf",
                                             "- Rodrigo Werberich da S. M. de Oliveira"],
  "Tiago de Souza Fernandes": ["Desenvolvimento de Pacote Python para Migração entre Juízes Eletrônicos",
                               "",
                               "- Tiago de Souza Fernandes"],
  "Wladimir G. Mesquita Gramacho": ["Algoritmos de Mineração de Dados para Análise de Evasão na Graduação da Universidade de Brasília",
                                    "https://conferencias.unb.br/index.php/iniciacaocientifica/25CICUnB16df/paper/view/19748",
                                    `- Wladimir Ganzelevitch Mesquita Gramacho (indicado ao <a href="http://proic.unb.br/images/Congresso_2019/Indicados_ao_Pr%C3%AAmio_Destaque_de_Inicia%C3%A7%C3%A3o_Cient%C3%ADfica.pdf">Prêmio Destaque de Iniciação Científica</a>)`]
};

var LIST_STUDENTS = [
  ["Doutorado", ["Tiago Barros Pontes e Silva"]],
  ["Mestrado", ["Ana Carolina Pereira Rocha", "José Abílio de Paiva Ramos", "Lucas Rocha Soares de Assis", "Renan Martins Sousa", "Roberto Nunes Mourão", "Rodrigo Nunes Peclat"]],
  ["Graduação", ["Andrew Yuri da Silva Mata", "Clara Marques Caldeira", "Luiggi Monteiro Reffatti", "Matheus Vieira Portela", "Rodrigo Werberich da S. M. de Oliveira", "Wladimir Ganzelevitch Mesquita Gramacho"]],
  ["PIBIC | PIBIT | PJT", ["Edgar Fabiano de Souza Filho", "Fábio Costa Farias Marques", "Fernando Teixeira de Freitas da Costa Nunes", "Guido Dutra de Oliveira", "Lucas Avelino de Lima Jacinto", "Pedro Saman Diogenes Nogueira Cesarino", "Renato Avellar Nobre", "Rodrigo Werberich da S. M. de Oliveira", "Tiago de Souza Fernandes", "Wladimir G. Mesquita Gramacho"]]
];

var MAP_COURSES = {// id: [nome, url, extra]
  "311995": ["Tópicos Avançados em Mineração de Dados", "https://www.matriculaweb.unb.br/posgraduacao/disciplina.aspx?cod=311995", ""],
  "301477": ["Algoritmos e Estruturas de Dados", "https://www.matriculaweb.unb.br/posgraduacao/disciplina.aspx?cod=301477", ""],
  "CIC0004": ["Algoritmos e Programação de Computadores", "https://sigaa.unb.br/cod=CIC0004", ""],
  "CIC0087": ["Tópicos Avançados em Computadores", "https://sigaa.unb.br/cod=CIC0087", ""],
  "CIC0090": ["Estruturas de Dados", "https://sigaa.unb.br/cod=CIC0090", ""],
  "CIC0135": ["Introdução à Inteligência Artificial", "https://sigaa.unb.br/cod=CIC0135", ""],
  "CIC0136": ["Estudos em Inteligência Artificial", "https://sigaa.unb.br/cod=CIC0136", ""],
  "CIC0169": ["Programação Competitiva", "https://sigaa.unb.br/cod=CIC0169", ""],
  "CIC0188": ["Introdução à Engenharia de Computação", "https://sigaa.unb.br/cod=CIC0188", ""],
  "ENM0133": ["Introdução à Engenharia Mecatrônica", "https://sigaa.unb.br/cod=ENM0133", ""],
}

var LIST_COURSES = [ // Ordem decrescente.
                 ["2020/2", ["CIC0004", "CIC0090", "ENM0133"]],
                 ["2020/1", ["CIC0004", "CIC0087", "CIC0090"]],
                 ["2019/2", ["CIC0004", "CIC0090"]],
                 ["2019/1", ["CIC0004", "CIC0087"]],
                 ["2018/2", ["CIC0004", "301477", "ENM0133"]],
                 ["2018/1", ["CIC0004", "CIC0087"]],
                 ["2017/2", ["CIC0004", "301477"]],
                 ["2017/1", ["CIC0004", "ENM0133"]],
                 ["2016/2", ["CIC0004", "301477"]],
                 ["2016/1", ["CIC0004", "311995"]],
                 ["2015/2", ["CIC0004", "301477"]],
                 ["2015/1", ["CIC0004", "CIC0087"]],
                 ["2014/2", ["CIC0004", "CIC0087", "CIC0136", "CIC0169"]],
                 ["2014/1", ["CIC0004", "CIC0136", "CIC0188", "ENM0133"]],
                 ["2013/2", ["CIC0004", "301477"]],
                 ["2013/1", ["CIC0090","CIC0135", "CIC0136", "CIC0169"]],
                 ["2012/2", ["CIC0090", "CIC0169", "301477"]],
                 ["2012/1", ["CIC0090", "CIC0135"]],
                 ["2011/2", ["CIC0090", "CIC0135"]],
                 ["2011/1", ["CIC0090", "CIC0135"]]];

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