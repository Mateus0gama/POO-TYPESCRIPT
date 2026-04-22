import { Professor } from "./professor";
import { Pessoa } from "./pessoa";

let Mateus: Pessoa = new Pessoa("Mateus", "Gama", 22, true, [
  "Rua Pedro Loiola Prata, N186",
]);

let Diego: Professor = new Professor();
Diego.nome = "Diego";
Diego.sobrenome = "Armando";

console.log(Mateus.exibirNomeCompleto());
console.log(Mateus);
