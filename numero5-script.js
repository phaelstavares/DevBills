function inverterString(string) {
    let invertedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

// Exemplo de uso:
let entrada = 'Olá!';
let stringInvertida = inverterString(entrada);
console.log("String original:", entrada);
console.log("String invertida:", stringInvertida);