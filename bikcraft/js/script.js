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
const faq = document.querySelectorAll(".seguros dl div");

function abrirMenu(event) {
  if (event.currentTarget.classList.contains("primeiro")) {
    event.currentTarget.classList.remove("primeiro");
  } else {
    event.currentTarget.classList.toggle("abrirFAQ");
  }
}

function faqArray(item) {
  item.addEventListener("click", abrirMenu);
}

if (faq) {
  faq.forEach(faqArray);
}
