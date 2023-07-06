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
    let imagemElemento = pai2.querySelector(".imagem img");
    let imagemElementoSrc = imagemElemento.getAttribute("src")
    let nomeElemento = pai2.querySelector(".nome");
    let preçoElemento = pai2.querySelector(".preço");

    console.log(imagemElemento);
    console.log(preçoElemento);
    console.log(nomeElemento);

    elementoPai.push(pai2.innerHTML);
    produto.push(elemento);
    quantidade++;
    quantidadeProdutos.innerHTML = `${quantidade} Produtos`;
    // console.log(pai2);

    localStorage.setItem("nomeElemento", nomeElemento.innerHTML);
    localStorage.setItem("imagemElemento", imagemElementoSrc);
    localStorage.setItem("preçoElemento", preçoElemento.innerHTML);

    // const divConteudo = document.createElement("div");
    // divConteudo.innerHTML = elementoPai2.innerHTML;
    // containerMercado.appendChild(divConteudo)
  });
}
