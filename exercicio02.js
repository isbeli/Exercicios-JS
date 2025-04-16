// Dados da primeira pessoa
let pessoa1 = prompt("Digite o nome da primeira pessoa:")
let idade1 = parseInt(prompt(`Idade ${pessoa1}:`))
let cor1 = prompt(`Digita a corfavorita de ${pessoa1}`)


// Dados da segunda pessoa
let pessoa2 = prompt("Nome da  segunda pessoa")
let idade2 = parseInt(prompt(`Idade ${pessoa2}:`))
let cor2 = prompt(`Digita a corfavorita de ${pessoa2}`)


// Comparação das idade
if (idade1 > idade2) {
   console.log(`${pessoa1} é Maior que ${pessoa2}`)          
} else if (idade2 > idade1) {
   console.log(`${pessoa2} é Maior que ${pessoa1}`)
} else {
  console.log(`${pessoa1} ${pessoa2} têm a mesma idade`)
}

// Comparação das cores
if (cor1 === cor2) {
   console.log(`A cor preferida de ${pessoa1} é a mesma de ${pessoa2} :${cor1}`)
} else {
   console.log(`${pessoa1} gosta da cor ${cor1} e ${pessoa2} gosta da cor ${cor2}`)
}