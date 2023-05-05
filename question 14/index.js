const nome = prompt("Digite o seu nome: ");
const idade = prompt("Digite a sua idade: ");
const celular = prompt("Digite o seu número de celular: ");
const cidade = prompt("Digite a cidade onde mora: ");

const usuario = {
  nome: nome,
  idade: idade,
  celular: celular,
  cidade: cidade
};

const alterar = confirm("Deseja alterar alguma informação?");

if (alterar) {

  console.log("Informações atuais: ", usuario);
  const alterar = prompt("Qual informação você deseja alterar? (nome, idade, celular ou cidade)");


  switch (alterar) {
    case "nome":
      usuario.nome = prompt("Digite o novo nome: ");
      break;
    case "idade":
      usuario.idade = prompt("Digite a nova idade: ");
      break;
    case "celular":
      usuario.celular = prompt("Digite o novo número de celular: ");
      break;
    case "cidade":
      usuario.cidade = prompt("Digite a nova cidade: ");
      break;
    default:
      console.log("Opção inválida.");
      break;
  }


  console.log("Novas informações: ", usuario);
} else {

  console.log("Informações do usuário: ", usuario);
}
