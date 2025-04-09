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
