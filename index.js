// Chama a função prompt-sync
const prompt = require('prompt-sync')();

// Função principal da calculadora
function calcular(num1, num2, operacao) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Erro: Divisão por zero';
            } else {
                return num1 / num2;
            }
        case '%':
            return (num1 * num2) / 100;
        default:
            return 'Operação inválida';
    }
}

// Solicitar entrada do usuário
let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo número:");

// Solicitar operação desejada
let operacao = prompt("Digite a operação desejada (+, -, *, /, %):");

// Realizar o cálculo e exibir o resultado
let resultado = calcular(numero1, numero2, operacao);


// Mostrar o resultado do cálculo
console.log(`Resultado: ${resultado}`);
