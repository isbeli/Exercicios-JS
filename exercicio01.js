let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");
let idade = Number(prompt("Digite sua idade:"));

console.table({
  nome: nome,
  sobrenome: sobrenome,
  idade: idade,
})
  
  

console.log(`Sou ${nome} ${sobrenome} e tenho ${idade} anos.`);

console.table()