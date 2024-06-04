// arrays
// arrays são estruturas que permitem armarzenar e manipular
// uma colação itens. casa item é identificado por um indice nemerico 

let numeros = [1,2,3,4,5];

let numerosPares = new Array(2,4,6,8)
console.log(numeros.indexOf(1))
console.log(numeros.indexOf(2))
console.log(numeros.indexOf(3))
console.log(numeros.indexOf(4))
console.log(numeros.indexOf(5))

console.log (numerosPares)

console.log("dado que está no indice",numeros[2])
console.log(numerosPares)

let cores = ['vermelho','verde','preto']

console.log(cores.indexOf('verde'))
console.log(cores.indexOf('vermelho'))
console.log(cores.indexOf('preto'))
// acessando um unico 
console.log(cores[1])
console.log(cores[0])
console.log(cores[2])
console.log(typeof cores)
console.log(Array.isArray (cores))
// tamanho do Array
// console.log(cores.length)

console.log("Loop for")
let cardio = ["Dr Jão","Dr Pedro","Dr Antony","Dra Gabi","Dra Patrine"]

// console.log(cardio.length)
for(let i = 0;i<cardio.length;i++){
    console.log(cardio[i])
    // console.log(i)
}

let novoCardio = "Dr Gilson"
let novoCardio2 = "Dr Jonatas"

// cardio[cardio.length]=novoCardio

// adiciona um elemento a ultima posição da lista (push())
cardio.push(novoCardio)
cardio.push(novoCardio2)

console.log(cardio)

// remove o ultimo elemento da lista (pop())
cardio.pop()
console.log(cardio)

// map
console.log("map")

cardio.map(function(item){
  return console.log(item.toUpperCase())
})

console.log('=======professores========')

let professores = ['João','Fernando','Thiago']

professores.map(function (professor){
    console.log("PROF " + professor.toUpperCase())
})

let numerosEspeciais = [1,2,3,4,5,6,7,8,9]

numerosEspeciais.map((num) =>{
    console.log(num + 5)
    
    })
