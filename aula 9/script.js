// criando elementos

let container = document.querySelector(".container");
console.log(container);

let novoParagrafo = document.createElement("p");
novoParagrafo.className = "paragrafo";
novoParagrafo.textContent = "meu paragrafo";

container.appendChild(novoParagrafo);

container.innerHTML += `<p class='paragrafo2'>Meu paragrafo com InnerHTML</p>`;

let novoButton = document.createElement("button");
novoButton.textContent = "click";
novoButton.id = "buttonClick";
novoButton.type = "button";

container.appendChild(novoButton);

// novoButton.addEventListener("click",function(){
//     alert("oi");
// });

let acessButton = document.getElementById("buttonClick");

acessButton.addEventListener("click", function () {
  alert("oi");
  container.style.background = "red";
});