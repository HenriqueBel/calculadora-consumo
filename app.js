const veiculo = {
  modelo: "",
  consumoMedio: 14,
};

const combustivel = {
  tipo: "",
  precoEtanol: 3.899,
  precoGasolina: 5.999,
};

const viagem = {
  velocidademedia: "",
  duracao: "",
  percurso: "",
  consumoLitros: "",
  custoEmReais: "",
};

viagem.duracao = 9;
viagem.velocidademedia = 90;
viagem.percurso = viagem.duracao * viagem.velocidademedia;

viagem.consumoLitros = Math.round(viagem.percurso / veiculo.consumoMedio);

combustivel.tipo = 0;

if (combustivel.tipo === 0) {
  viagem.custoEmReais = (viagem.consumoLitros * combustivel.precoEtanol).toLocaleString("pt-BR" , {
    style:"currency", 
    currency: "BRL"
  });
} else {
  viagem.custoEmReais = (viagem.consumoLitros * combustivel.precoGasolina).toLocaleString("pt-BR" , {
    style:"currency", 
    currency: "BRL"
  });
}

console.log(viagem);
