const formulario = document.querySelector("#form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='body-1' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #CCCCCC'><span style='color:#317a00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    formulario.innerHTML =
      "<p class='body-1' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #CCCCCC'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@aquilacursobq.com.br</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("#form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
