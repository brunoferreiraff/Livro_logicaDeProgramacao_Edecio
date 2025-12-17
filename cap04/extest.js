const prompt = require("prompt-sync")()

const idade = Number(prompt("Digite aqui a idade do nadador: "));

if (idade <= 15){
    console.log("O nadador é uma criança");
} else if( idade > 15 <= 18){
    console.log("O nadador ainda é um adolescente");
} else if(idade >= 19){
    console.log("O nadador é adulto");
}