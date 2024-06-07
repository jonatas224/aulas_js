let novaTarefa = document.getElementById("input");
let buttonAdicionar = document.getElementById("adicionar");
let lista = document.getElementById("listaDeTarefas");

buttonAdicionar.addEventListener("click", function () {
  console.log(novaTarefa.value);

  if (novaTarefa.value !== "") {
    let li = document.createElement("li");
    li.textContent = novaTarefa.value;

    let inputcheck = document.createElement("input");
    inputcheck.type = "checkbox"

    inputcheck.addEventListener('click',()=>{
console.log(inputcheck.checked)

if(inputcheck.checked === true){
li.className = 'feito'
}else{
    li.className = ''
}
    })

    let buttonDeleter = document.createElement("button");
    buttonDeleter.textContent = "excluir tarefa";
    buttonDeleter.addEventListener("click", function () {
      lista.removeChild(li);
    });

    li.appendChild(buttonDeleter);
    lista.appendChild(li);
    novaTarefa.value = "";
  }
});
