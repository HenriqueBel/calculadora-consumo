const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
  valor: document.querySelector("#valor-combustivel")
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
  consumoMedio: "",
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
  //VARIAVEIS PARA CAPTURAR O VALOR DA HORA E MINUTO
  viagem.duracao = input.duracao.value;
  viagem.velocidademedia = input.velocidade.value;

  //CAPTURA O VALOR DO CONSUMO MEDIO DO VEICULO DIGITADO PELO USUARIO
  veiculo.consumoMedio = input.consumo.value;

  //MÉTODO(SLICE) PARA CORTAR O SÍMBOLO DE ":" DA HORA E MINUO, SEPARANDO EM VARIAVEIS PROPRIAS
  let hora = +viagem.duracao.slice(0, 2);
  let minuto = +viagem.duracao.slice(3);

  // FÓRMULA PARA CALCULAR A DISTANCIA PERCORRIDA PELO USUARIO

  if (combustivel.tipo.toLowerCase === "etanol") {
    viagem.percurso =( viagem.percurso - (viagem.percurso * 0, 3) * 100)
    
  }

console.log( viagem.percurso);

  viagem.percurso = (
    viagem.velocidademedia *
    ((hora * 60 + minuto) / 60)
  ).toFixed(1);

  //METODO (REPLACE) PARA SUBSTITUIR "." POR "," NA EXIBIÇÃO DA DISTANCIA TOTAL

  //CALCULO DO CONSUMO EM LITROS GASTOS NA VIAGEM
  viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio;

  const paragrafo = document.querySelector(".resultado");

  //CALCULO PARA SABER O CUSTO EM REAIS (R$) DE ACORDO COM O CONSUMO EM LITROS

  if (combustivel.tipo.toLocaleLowerCase() === "etanol") {
    viagem.custoEmReais = viagem.consumoLitros * combustivel.precoEtanol;

    paragrafo.innerText = `Custo do Consumo em Reais: ${viagem.custoEmReais.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    )}  Percorreu: ${viagem.percurso.replace(
      ".",
      ","
    )} KM e abasteceu ${viagem.consumoLitros.toFixed(2)} Litros`;

    //METODO PARA FORMATAR COMO MOEDA(R$)
  } else {
    viagem.custoEmReais = viagem.consumoLitros * combustivel.precoGasolina;

    //METODO PARA FORMATAR COMO MOEDA(R$)
    paragrafo.innerText = `Custo da Gasolina: ${viagem.custoEmReais.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    )} Percorreu: ${viagem.percurso.replace(
      ".",
      ","
    )} KM e abasteceu ${viagem.consumoLitros.toFixed(2)} Litros`;
  }
}
