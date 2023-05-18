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

let thElemento = document.createElement("th");
thElemento.textContent = "Produto";
tabela.appendChild(thElemento);

let thElemento2 = document.createElement("th");
thElemento2.textContent = "teste";
thElemento2.setAttribute("id", "teste")
tabela.appendChild(thElemento2);

let trElemento = document.createElement("tr");
trElemento.setAttribute("id", "tr");
tabela.appendChild(trElemento);

const trSeleçao = document.getElementById("tr");

let tdElemento = document.createElement("td");
tdElemento.setAttribute("id", "td");
trSeleçao.appendChild(tdElemento);

const tdSeleçao = document.getElementById("td");

let divContainerImagemNome = document.createElement("div");
divContainerImagemNome.setAttribute("id", "containerImagemNome");
tdSeleçao.appendChild(divContainerImagemNome);

const divContainerImagemNomeSeleçao = document.getElementById(
  "containerImagemNome"
);

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
divContainerQuantidadeDeleteSeleçao.appendChild(buttonDelete);

const buttonDeleteSeleçao = document.getElementById("delete");

let img4 = document.createElement("img");
img4.src = "imagens/delete.png";
buttonDeleteSeleçao.appendChild(img4);

let divContainerNomePreço = document.createElement("div")
divContainerNomePreço.setAttribute("id", "containerNomePreço");
tdSeleçao.appendChild(divContainerNomePreço);

const divContainerNomePreçoSeleçao = document.getElementById("containerNomePreço");

let paragrafo = document.createElement("p");
paragrafo.textContent = "Boné";
divContainerNomePreçoSeleçao.appendChild(paragrafo);

let paragrafo2 = document.createElement("p");
paragrafo2.textContent = "preço: 31,90";
divContainerNomePreçoSeleçao.appendChild(paragrafo2);