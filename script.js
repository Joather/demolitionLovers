var i = 0;
var txt =
  "sendo bem sincero, eu não sou muito bom com palavras\nmas em compensação eu sei fazer coisas bem legais :D (e diferente do picareta do vitor, eu faço tudo na mão) ";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mensagem-terminal").insertAdjacentText("beforeend", txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
