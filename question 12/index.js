// Solicita ao usuário que insira um texto
const texto = prompt("Digite um texto: ");

// Cria uma função para contar quantas vezes cada palavra aparece no texto
function contarPalavras(texto) {
  // Remove pontuações e transforma todas as letras em minúsculas
  texto = texto.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  
  // Divide o texto em um array de palavras
  const palavras = texto.split(" ");
  
  // Cria um objeto para armazenar as contagens de palavras
  const contagem = {};
  
  // Loop através do array de palavras
  for (let i = 0; i < palavras.length; i++) {
    // Verifica se a palavra já existe na contagem e adiciona 1 se sim, senão define como 1
    contagem[palavras[i]] = contagem[palavras[i]] ? contagem[palavras[i]] + 1 : 1;
  }
  
  // Retorna o objeto de contagem de palavras
  return contagem;
}

// Chama a função contarPalavras() e imprime o objeto no console
console.log(contarPalavras(texto));
