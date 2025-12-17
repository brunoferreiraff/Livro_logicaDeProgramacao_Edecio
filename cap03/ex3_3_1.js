const prompt = require("prompt-sync")()

const peso = Number(prompt("Digite o peso da ração: "));
const consumo = Number(prompt("Digite o consumo do animal: "));
const pesoGr = peso * 1000;
const dias = Math.floor(pesoGr / consumo).toFixed(0);
const sobra = pesoGr % consumo;

console.log("Peso da ração em KG: " + peso);
console.log("Consumo diário em GR: " + consumo);
console.log("Duração: " + dias + "dias");
console.log("Sobram: " + sobra)
