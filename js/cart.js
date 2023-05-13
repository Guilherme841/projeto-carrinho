let nomeElemento = localStorage.getItem("nomeElemento");
let imagemElemento = localStorage.getItem("imagemElemento");
let preçoElemento = localStorage.getItem("preçoElemento");
const main = document.getElementsByTagName("main")[0];

console.log(nomeElemento)
console.log(imagemElemento)
console.log(preçoElemento)

let divProduto = document.createElement("div");
divProduto.setAttribute("class", "containerProduto")
main.appendChild(divProduto)

// divProduto.innerHTML = `
//   <p id="nome">${nomeElemento}</p>
//   <img src="${imagemElemento}" alt="${nomeElemento}">
//   <p>${preçoElemento}</p>
// `;