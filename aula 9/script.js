// criando elementos

let container = document.querySelector('.container')
console.log(container)

let novoElemento = document.createElement('p')
novoElemento.className = 'paragrafo'
novoElemento.textContent = 'meu paragrafo'

container.appendChild(novoElemento)

container.innerHTML += `<p class='paragrafo'>Meu paragrafo com InnerHTML</p>`