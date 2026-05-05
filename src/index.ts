import { Pessoa } from "./pessoa";
import { Aluno, SituacacaoAluno } from "./aluno";
import { Professor } from "./professor";

let mariana: Aluno = new Aluno(
  "Mariana",
  "Gama",
  "Feminio",
  "0882934234242",
  20,
  true,
  ["Rua C"],
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
  ["Rua L"],
  15000,
);

mariana.submeterProjetodeExtensao();
console.log(mariana);
console.log("------------------__");
console.log(diego);
