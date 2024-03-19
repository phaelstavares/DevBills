const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(numero) {
    let a = 0, b = 1;
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === numero;
}

rl.question("Digite um número para verificar se ele pertence a sequência: ", (numero) => {
    numero = parseInt(numero);
    let resultado = fibonacci(numero);
    if (resultado) {
        console.log(`O número ${numero} pertence a sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence a sequência de Fibonacci.`);
    }
    rl.close();
});