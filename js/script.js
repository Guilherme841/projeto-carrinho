const quantidadeProdutos = document.getElementById("quantidadeProdutos");
const adicionarProduto = document.getElementsByClassName("botaoCarrinho");
const containerMercado = document.getElementById("containerMercado");

let quantidade = 0;
let produto = [];
let elementoPai = [];

for (let elemento of adicionarProduto) {
  elemento.addEventListener("click", function () {
    let pai = elemento.parentNode;
    let pai2 = pai.parentNode;
    elementoPai.push(pai2.innerHTML)
    produto.push(elemento);
    quantidade++;
    quantidadeProdutos.innerHTML = `${quantidade} Produtos`;
    console.log(elementoPai);

    localStorage.setItem("produtos", JSON.stringify(elementoPai))

    // const divConteudo = document.createElement("div");
    // divConteudo.innerHTML = elementoPai2.innerHTML;
    // containerMercado.appendChild(divConteudo)
  });
}