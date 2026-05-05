import { Pessoa } from "./pessoa/pessoa";
import { Aluno, SituacacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./endereco/endereco";

let endereço1 = new Endereco(
  "4940000",
  172,
  "Pedro Loiola",
  "São José",
  "Lagaro",
  "Sergipe",
);

let mariana: Aluno = new Aluno(
  "Mariana",
  "Gama",
  "Feminio",
  "0882934234242",
  20,
  true,
  [endereço1],
  "Direito",
  SituacacaoAluno.ATIVO,
);

let diego: Professor = new Professor(
  "Diego",
  "Armando",
  "Masculino",
  "0309234023490",
  35,
  true,
  [endereço1],
  15000,
);

mariana.submeterProjetodeExtensao();
console.log(mariana);
console.log("------------------__");
console.log(diego);
