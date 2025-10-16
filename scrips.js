const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
};

const elemento = {
  formulario: document.querySelector("form"),
  paragrafo: document.querySelector("p"),
};

const viagem = {
  velocidademedia: "",
  duracao: "",
  percurso: "",
  consumoLitros: "",
  custoEmReais: "",
};

const veiculo = {
  modelo: "",
  consumoMedio: 14,
};

const combustivel = {
  tipo: "",
  precoEtanol: 3.899,
  precoGasolina: 5.999,
};

input.combustivel.forEach((radio) => {
  radio.addEventListener("change", () => {
    combustivel.tipo = radio.value;
  });
});

elemento.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcularConsumo();
});

function calcularConsumo() {
  viagem.duracao = input.duracao.value;
  viagem.velocidademedia = input.velocidade.value;

  let hora = viagem.duracao.slice(0,2)
  let minuto = viagem.duracao.slice(3)

  console.log(hora, minuto);
}

viagem.percurso = viagem.duracao * viagem.velocidademedia;

viagem.consumoLitros = Math.round(viagem.percurso / veiculo.consumoMedio);
