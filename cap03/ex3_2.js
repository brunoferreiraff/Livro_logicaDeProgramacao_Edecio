const prompt = require("prompt-sync")()

const veiculo = prompt("veiculo: ");
const preco = prompt("preço: ");
const entrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;

console.log("Promoção:" + veiculo);
console.log("Entrada de R$ " + entrada);
console.log("+ 12 Parcelas de apenas: R$ " + parcela)