const preçoProduto = document.getElementById("preçoProduto");
const containerBotoes = document.getElementById("containerBotoes");
const trHead = document.getElementById("trHead");
const trBody = document.getElementById("trBody");

let thHead2 = document.createElement("th");
thHead2.innerHTML = "Qntd";
thHead2.setAttribute("id", "thHead2")
thHead2.classList.add("sumirPc");
trHead.appendChild(thHead2);

let tdBody2 = document.createElement("td");
tdBody2.setAttribute("id", "tdBody2");
tdBody2.classList.add("sumirPc");
trBody.appendChild(tdBody2);

let containerButton = document.createElement("div");
containerButton.setAttribute("id", "containerButton");
tdBody2.appendChild(containerButton);

let buttonMenos = document.createElement("button");
buttonMenos.setAttribute("id", "buttonMenos");
containerButton.appendChild(buttonMenos);

let imgMenos = document.createElement("img");
imgMenos.src = "imagens/menos.png";
buttonMenos.appendChild(imgMenos)

let spanQntd = document.createElement("span");
spanQntd.innerHTML = "1";
spanQntd.setAttribute("id" , "spanQntd");
containerButton.appendChild(spanQntd)

let buttonMais = document.createElement("button");
buttonMenos.setAttribute("id", "buttonMenos");
containerButton.appendChild(buttonMais);

let imgMais = document.createElement("img");
imgMais.src = "imagens/mais.png";
buttonMais.appendChild(imgMais)

let thHead3 = document.createElement("th");
thHead3.innerHTML = "Preço";
thHead3.setAttribute("id", "thHead3");
thHead3.classList.add("sumirPc")
trHead.appendChild(thHead3);

let tdBody3 = document.createElement("td");
tdBody3.innerHTML = "Preço: R$27,99"
tdBody3.setAttribute("id", "tdBody3");
tdBody3.classList.add("sumirPc");
trBody.appendChild(tdBody3);

let thHead4 = document.createElement("th");
thHead4.setAttribute("id", "thHead4");
thHead4.classList.add("sumirPc");
trHead.appendChild(thHead4);

let tdBody4 = document.createElement("td");
tdBody4.setAttribute("id", "tdBody4");
tdBody4.classList.add("sumirPc");
trBody.appendChild(tdBody4);

let buttonDelete = document.createElement("button");
buttonDelete.setAttribute("id", "buttonDelete");
tdBody4.appendChild(buttonDelete);

let imgDelete = document.createElement("img");
imgDelete.src = "imagens/delete.png"
buttonDelete.appendChild(imgDelete)

function aplicarMedia() {
  if (matchMedia("(min-width: 768px)").matches) {

    preçoProduto.classList.add("sumirTela");
    containerBotoes.classList.add("sumirTela");
    thHead2.classList.remove("sumirPc");
    tdBody2.classList.remove("sumirPc");
    thHead3.classList.remove("sumirPc");
    tdBody3.classList.remove("sumirPc");
    tdBody4.classList.remove("sumirPc");
    thHead4.classList.remove("sumirPc");

  } else {

    preçoProduto.classList.remove("sumirTela");
    containerBotoes.classList.remove("sumirTela");
    thHead2.classList.add("sumirPc");
    tdBody2.classList.add("sumirPc");
    thHead3.classList.add("sumirPc");
    tdBody3.classList.add("sumirPc");
    thHead4.classList.add("sumirPc");
    tdBody4.classList.add("sumirPc");

  }
}

window.addEventListener("load", aplicarMedia);

window.addEventListener("resize", aplicarMedia);