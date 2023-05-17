// let divProduto = document.createElement("div");
// divProduto.setAttribute("class", "containerProduto")
// main.appendChild(divProduto)

// const main = document.getElementsByTagName("main")[0];

let nomeElemento = localStorage.getItem("nomeElemento");
let imagemElemento = localStorage.getItem("imagemElemento");
let preçoElemento = localStorage.getItem("preçoElemento");

console.log(nomeElemento)
console.log(imagemElemento)
console.log(preçoElemento)

const tabela = document.getElementById("tabela")

let thElemento = document.createElement("th");
thElemento.textContent = "Produto"
tabela.appendChild(thElemento);

let trElemento = document.createElement("tr");
trElemento.setAttribute("id", "tr")
tabela.appendChild(trElemento);

const trSeleçao = document.getElementById("tr");

let tdElemento = document.createElement("td");
trSeleçao.appendChild(tdElemento);