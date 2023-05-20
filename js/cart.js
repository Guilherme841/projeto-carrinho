// let divProduto = document.createElement("div");
// divProduto.setAttribute("class", "containerProduto")
// main.appendChild(divProduto)

// const main = document.getElementsByTagName("main")[0];

let nomeElemento = localStorage.getItem("nomeElemento");
let imagemElemento = localStorage.getItem("imagemElemento");
let preçoElemento = localStorage.getItem("preçoElemento");

console.log(nomeElemento);
console.log(imagemElemento);
console.log(preçoElemento);

const tabela = document.getElementById("tabela");

let tbody = document.createElement("tboby");
tbody.setAttribute("id", "tbodyId");
tabela.appendChild(tbody);

const tbodySeleçao = document.getElementById("tbodyId");

let thElemento = document.createElement("th");
thElemento.textContent = "Produto";
tbodySeleçao.appendChild(thElemento);

let thElemento2 = document.createElement("th");
thElemento2.textContent = "Preço";
thElemento2.setAttribute("id", "preço");
tbodySeleçao.appendChild(thElemento2);

let thElemento3 = document.createElement("th");
thElemento3.textContent = "qntd";
thElemento3.setAttribute("id", "qntd");
tbodySeleçao.appendChild(thElemento3);

let thElemento4 = document.createElement("th");
thElemento4.textContent = "Delete";
thElemento4.setAttribute("id", "thVazio");
tbodySeleçao.appendChild(thElemento4);

const thElemento2Seleçao = document.getElementById("preço");

let trElemento = document.createElement("tr");
trElemento.setAttribute("id", "tr");
tbodySeleçao.appendChild(trElemento);

const trSeleçao = document.getElementById("tr");

let tdElemento = document.createElement("td");
tdElemento.setAttribute("id", "td");
trSeleçao.appendChild(tdElemento);

let tdElemento2 = document.createElement("td");
tdElemento2.setAttribute("class", "tds");
tdElemento2.textContent = "Preço";
trSeleçao.appendChild(tdElemento2);

let tdElemento3 = document.createElement("td");
tdElemento3.setAttribute("class", "tds");
tdElemento3.textContent = "Qntd";
trSeleçao.appendChild(tdElemento3);

let tdElemento4 = document.createElement("td");
tdElemento4.setAttribute("class", "tds");
tdElemento4.textContent = "Delete";
trSeleçao.appendChild(tdElemento4);

const tdSeleçao = document.getElementById("td");

let divContainerImagemNome = document.createElement("div");
divContainerImagemNome.setAttribute("id", "containerImagemNome");
tdSeleçao.appendChild(divContainerImagemNome);

const divContainerImagemNomeSeleçao = document.getElementById(
  "containerImagemNome"
);

// let divContainerBotoes = document.createElement("div");
// divContainerImagemNome.appendChild(divContainerBotoes);

let divImagem = document.createElement("div");
divImagem.setAttribute("id", "imagem");
divContainerImagemNomeSeleçao.appendChild(divImagem);

const divImagemSeleçao = document.getElementById("imagem");

let img = document.createElement("img");
img.src = "imagens/bone.jpg";
divImagemSeleçao.appendChild(img);

let divContainerQuantidadeDelete = document.createElement("div");
divContainerQuantidadeDelete.setAttribute("id", "containerQuantidadeDelete");
divContainerImagemNomeSeleçao.appendChild(divContainerQuantidadeDelete);

const divContainerQuantidadeDeleteSeleçao = document.getElementById(
  "containerQuantidadeDelete"
);

let divDelete = document.createElement("div");
divDelete.setAttribute("id", "containerDelete");
divContainerImagemNome.appendChild(divDelete);

let buttonMenos = document.createElement("button");
buttonMenos.setAttribute("id", "menos");
divContainerQuantidadeDeleteSeleçao.appendChild(buttonMenos);

const buttonMenosSeleçao = document.getElementById("menos");

let img2 = document.createElement("img");
img2.src = "imagens/menos.png";
buttonMenosSeleçao.appendChild(img2);

let span = document.createElement("span");
span.setAttribute("id", "quantidade");
span.textContent = "1";
divContainerQuantidadeDeleteSeleçao.appendChild(span);

let buttonMais = document.createElement("button");
buttonMais.setAttribute("id", "mais");
divContainerQuantidadeDeleteSeleçao.appendChild(buttonMais);

const buttonMaisSeleçao = document.getElementById("mais");

let img3 = document.createElement("img");
img3.src = "imagens/mais.png";
buttonMaisSeleçao.appendChild(img3);

let buttonDelete = document.createElement("button");
buttonDelete.setAttribute("id", "delete");
divDelete.appendChild(buttonDelete);

const buttonDeleteSeleçao = document.getElementById("delete");

let img4 = document.createElement("img");
img4.src = "imagens/delete.png";
buttonDeleteSeleçao.appendChild(img4);

let divContainerNomePreço = document.createElement("div");
divContainerNomePreço.setAttribute("id", "containerNomePreço");
tdSeleçao.appendChild(divContainerNomePreço);

const divContainerNomePreçoSeleçao =
  document.getElementById("containerNomePreço");

let paragrafo = document.createElement("p");
paragrafo.textContent = "Boné";
divContainerNomePreçoSeleçao.appendChild(paragrafo);

let paragrafo2 = document.createElement("p");
paragrafo2.setAttribute("id", "paragrafoPreço");
paragrafo2.textContent = "preço: 31,90";
divContainerNomePreçoSeleçao.appendChild(paragrafo2);

function aplicarMedia() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    paragrafo2.style.display = "none";
    const paragrafo2Seleçao = document.getElementById("paragrafoPreço");
    tdElemento2.textContent = paragrafo2Seleçao.innerHTML;

    divContainerQuantidadeDeleteSeleçao.style.display = "none";
    tdElemento3.innerHTML = divContainerQuantidadeDeleteSeleçao.innerHTML;

    divDelete.style.display = "none";
    tdElemento4.innerHTML = divDelete.innerHTML;
  } else {
    
    paragrafo2.style.display = "block";
    divContainerQuantidadeDeleteSeleçao.style.display = "block";
    divDelete.style.display = "block";
    divContainerQuantidadeDeleteSeleçao.appendChild(buttonMenos);
    divContainerQuantidadeDeleteSeleçao.appendChild(span);
    divContainerQuantidadeDeleteSeleçao.appendChild(buttonMais);
    divContainerQuantidadeDeleteSeleçao.appendChild(buttonDelete);
    divContainerQuantidadeDeleteSeleçao.style.display = "flex";
    divContainerQuantidadeDeleteSeleçao.style.alignItems = "center";

  }
}

window.addEventListener("load", aplicarMedia);

window.addEventListener("resize", aplicarMedia);
