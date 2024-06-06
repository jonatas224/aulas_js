let novaTarefa = document.getElementById("input");
let buttonAdicionar = document.getElementById("adicionar");
let lista = document.getElementById("listaDeTarefas");

buttonAdicionar.addEventListener("click", function () {
  console.log(novaTarefa.value);


  
  let li = document.createElement("li");
  li.textContent = novaTarefa.value;
  lista.appendChild(li);
});
