const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let conta = prompt("Qual conta iremos realizar? Digite o Número correspondente ao cálculo:\n\ 1. Adição\n\ 2. Subtração\n\ 3. Multiplicação\n\ 4. Divisão\n\ 5. Porcentagem");

if (!isNaN(num1) && !isNaN(num2)) {
      if (conta === 1) {
        const soma = require('./functions/fcAdicao')
    } if (conta === 2) {
        const subtracao = require('./functions/fcSubtracao')
    } if (conta === 3) {
        const multiplicacao = require('./functions/fcMultiplicacao')
    } if (conta === 4) {
        const divisao = require('./functions/fcDivisao')
    } if (conta === 5) {
        const porcentagem = require('./functions/fcPorcentagem')
    }

} else {
    console.log("Por favor, digite números válidos para realizar o cálculo.");
}