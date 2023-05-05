const texto = prompt("Digite um texto: ");

function contarPalavras(texto) {

  texto = texto.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  
  const palavras = texto.split(" ");
  
  const contagem = {};
  

  for (let i = 0; i < palavras.length; i++) {

    contagem[palavras[i]] = contagem[palavras[i]] ? contagem[palavras[i]] + 1 : 1;
  }
  

  return contagem;
}

console.log(contarPalavras(texto));
