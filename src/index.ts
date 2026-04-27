import { Pessoa } from "./pessoa";

let Mateus: Pessoa = new Pessoa("Mateus", "Gama", 22, true, [
  "Rua Pedro Loiola Prata, N186",
]);
let Mariana: Pessoa = new Pessoa("Mariana", "Gama", 20, true, [
  "Rua Pedro Loiola Prata, N186",
  "Bairro Horta também mora lá! rs",
]);

console.log(Mateus.exibirNomeCompleto());
console.log(Mateus.recuperaEndereco(0));
console.log(Mateus);
console.log("---------------------------------------------");
console.log(Mariana);
console.log("-------------------------------------------");
console.log(Pessoa.getquantidadeDePessoas());
