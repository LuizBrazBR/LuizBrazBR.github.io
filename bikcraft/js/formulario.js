const form = document.querySelector("form");
const button = document.querySelector("form button");

form.addEventListener("submit", ativarFormulario);

function ativarFormulario(e) {
  e.preventDefault();
  button.disabled = true;
  button.classList.add("desativado");
  button.innerHTML = "Enviando...";
  const data = new FormData(form);
  fetch("../enviar_email.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviar);
}

function formularioEnviar(resposta) {
  if (resposta.ok) {
    form.innerHTML = `
      <div style="
        grid-column: 1 / -1;
        align-self: center;
        justify-self: center;
        text-align: center;
        background-color: #e6ffed;
        padding: 20px;
        border-radius: 6px;
        font-size: 1.1rem;
        color: #155724;
        margin: 60px;
        margin-top: 120px;
        box-sizing: border-box;

      ">
        <p style="margin: 0;">
          <span style="font-weight: bold;">Mensagem enviada.</span>
          Aguardar contato em até 24 horas.
        </p>
      </div>
    `;
  } else {
    form.innerHTML = `
      <div style="
        grid-column: 1 / -1;
        align-self: center;
        justify-self: center;
        text-align: center;
        background-color: #ffe5e5;
        padding: 20px;
        border-radius: 6px;
        font-size: 1.1rem;
        color: #721c24;
        margin: 60px;
        margin-top: 120px;
        box-sizing: border-box;

      ">
        <p style="margin: 0;">
          <span style="font-weight: bold;">Houve falha no envio.</span>
          Favor entrar em contato direto em nosso e-mail.
        </p>
      </div>
    `;
  }
}
