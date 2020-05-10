const api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Selecionar o elemento HTML

const cardsCounteudo = document.querySelector("#cards");

let data = [];

//Buscar os dados na api

async function buscarCards() {
  let resposta = await fetch(api);

  const dataResposta = await resposta.json();

  return dataResposta;
  paginate(1);
}
function gerarCards(cards) {
  cardsCounteudo.innerHTML = "";
  cards.map(renderCard);

}

// Gerar o card

function renderCard(card) {
  var div = document.createElement("div");
  div.className = "item";
  var cardImage = document.createElement("img");
  cardImage.className = "card-image";
  cardImage.src = card.photo;
  var propriedadeTipo = document.createElement("p");
  propriedadeTipo.className = "card-type";
  propriedadeTipo.innerHTML = card.property_type;
  var firstP = document.createElement("p");
  firstP.innerHTML = card.name;
  var secondP = document.createElement("p");
  secondP.innerHTML = `Diaria: <b class="card-price">R$${card.price},00</b>`;

  div.appendChild(cardImage);
  div.appendChild(propriedadeTipo);
  div.appendChild(firstP);
  div.appendChild(secondP);

  cardsCounteudo.appendChild(div);

}

// principal

async function main() {
  data = await buscarCards();

  if (data[0]) {
    gerarCards(data);
  }

}

main();
