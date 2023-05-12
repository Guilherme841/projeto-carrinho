const elementosProdutos = JSON.parse(localStorage.getItem("produtos"));
const teste = document.getElementById("teste");

elementosProdutos.map((teste) => {
    console.log(teste)
})

console.log(elementosProdutos)