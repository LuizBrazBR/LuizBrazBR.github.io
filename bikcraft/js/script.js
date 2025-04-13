// Ativar Link

const menu = document.querySelectorAll("header nav a");

if (menu) {
  menu.forEach(ativo);
}

function ativo(item) {
  if (location.href.includes(item.href)) {
    item.classList.add("ativo");
  }
}

// Ativar checked de formulário
const query = new URLSearchParams(location.search);

function ativarChecked(item) {
  const checked = document.getElementById(item);

  if (checked) {
    checked.checked = true;
  }
}

if (query) {
  query.forEach(ativarChecked);
}

//Abrir e fechar conteúdo de FAQ
const faq = document.querySelectorAll(".seguros button");

function abrirMenu(event) {
  const pergunta = event.currentTarget;
  const id = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(id);
  resposta.classList.toggle("ativo");
  const expandido = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", expandido);
}

function faqArray(item) {
  item.addEventListener("click", abrirMenu);
}

if (faq) {
  faq.forEach(faqArray);
}

//Trocar imagem de destaque com prepend

const img = document.querySelectorAll(".bicicleta-img img");
const containerImg = document.querySelector(".bicicleta-img");

function trocaImagem(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  //min-width: aquele valor para cima
  //max-width: aquele valor para baixo
  if (media) {
    containerImg.prepend(img);
  }
}

function imgArray(array) {
  array.addEventListener("click", trocaImagem);
}

if (img) {
  img.forEach(imgArray);
}

//Ativando plugin

if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.ClipboardJS) {
  new ClipboardJS("p.main-texto");
}
