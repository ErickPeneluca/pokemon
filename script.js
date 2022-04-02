const url = "https://pokeapi.co/api/v2/pokemon/?offset=400&limit=3";

let arr = [];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let contador = 0;
function tentaIniciar() {
  if (arr.length == 3) {
    
    for (const i of arr) {
      let posicaoInicial = 1750;
      let velocidade = getRandomArbitrary(5, 10);
      console.log(velocidade);

      setInterval(() => {
        posicaoInicial -= velocidade;
        i.style.top = posicaoInicial + "px";
        // i.style.paddingTop = 100 + "px"
        console.log(i);
        if(posicaoInicial == 0)
        {
            alert("o ganhador foi " + i)
        }
    }, 50);
}

window.location.href = "#img1";
  }
  contador++;
}
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
    for (const pokemon of json.results) {
      fetch(pokemon.url)
        .then((response2) => {
          return response2.json();
        })
        .then((json2) => {
          const img = document.createElement("img");
          const urlImg = json2.sprites.front_default;
          img.src = urlImg;
          img.style.display = "absolute";
          img.id = "img" + contador;

          img.style.marginLeft = 20 + "%";

          const body = document.body;
          body.append(img);
          // posicaoInicial = posicaoInicial + 100
          arr.push(img);

          tentaIniciar();
        });
    }
  });
