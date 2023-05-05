let frase = prompt("Digite uma frase:");
let contagem = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === 'a' || frase[i] === 'A') {
    contagem++;
  }
}

console.log(`A letra 'a' aparece ${contagem} vezes na frase.`);