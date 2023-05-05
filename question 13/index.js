const lista = prompt("Digite uma lista de nomes separados por vírgulas: ");

const nomes = lista.split(",");

function ordenarNomes(nomes) {
  nomes.sort(function(a, b) {
    return a.localeCompare(b);
  });
  
  return nomes;
}

console.log("Nomes em ordem alfabética: " + ordenarNomes(nomes));
