// criando elementos

let container = document.querySelector('.container')
console.log(container)

let novoParagrafo = document.createElement('p')
novoParagrafo.className = 'paragrafo'
novoParagrafo.textContent = 'meu paragrafo'

container.appendChild(novoParagrafo)

container.innerHTML += `<p class='paragrafo2'>Meu paragrafo com InnerHTML</p>`