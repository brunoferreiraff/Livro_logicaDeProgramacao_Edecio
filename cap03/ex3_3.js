const prompt = require("prompt-sync")()
const salario = Number(prompt("Salario: R$ "));
const tempo = prompt("Tempo de casa: ");

const quadri = tempo / 4;

const acrescimo = salario * quadri / 100;
const total = salario + acrescimo

console.log(`O funcionário está com a gente a ${quadri} quadriênios.`)
console.log(`O salário dele ao final desse tempo é de R$${total}`)

