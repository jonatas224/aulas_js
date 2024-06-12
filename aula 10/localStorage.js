// local storage 

// metodos principais 

//setItem(key, value) aramazena valor associado a uma chave 

localStorage.getItem('aluno','antony')
localStorage.getItem('aluno','mauricio')
localStorage.getItem('aluno','patrine')


// getItem(key) recupera o valor associado a uma chave

localStorage.getItem('aluno')
const aluno = localStorage.getItem('aluno')
console.log9('aluno',aluno)

// removeItem(key) remove a chave e o valor associado 

// localStorage.removeItem('aluno2')


// clear() remove todos os dados armazenados

// localStorage.clear()

// key(index) retorna o nome da chave pelo indice
const patrine = localStorage.key('aluno3')

console.log('nome =', patrine)