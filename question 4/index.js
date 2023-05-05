let lista = prompt("Digite uma lista de números separados por vírgula:");
let numeros = lista.split(",");
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += parseFloat(numeros[i]);
}

let media = soma / numeros.length;

console.log(`A média dos números é: ${media}`);
