import { Pessoa } from "./pessoa/pessoa";
import { Aluno, SituacacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./endereco/endereco";
import { CursoSubsequente } from "./curso/curso-subsequente";
import { CursoIntegrado } from "./curso/curso-integrado";
import { Campus } from "./campus/campus";
import { Bibliotecario } from "./tecnico-administrativo/bibliotecario";
import { Psicologo } from "./tecnico-administrativo/psicologo";

//Instânciando um Curso
let matematica = new CursoIntegrado("Matemática", 80, false);
let SistemasDeInformação = new CursoSubsequente(
  "Sistemas de Informação",
  3600,
  true,
);
let endereço1 = new Endereco(
  "4940000",
  172,
  "Pedro Loiola",
  "São José",
  "Lagaro",
  "Sergipe",
);

let lara = new Psicologo(
  1234,
  "Lara",
  "Silva",
  "Feminino",
  "090.024.234-12",
  22,
  false,
  [endereço1],
);

let mariana: Aluno = new Aluno(
  "Mariana",
  "Gama",
  "Feminio",
  "000.000.000-91",
  20,
  true,
  [endereço1],
  [SistemasDeInformação, matematica],
  SituacacaoAluno.ATIVO,
);

let lagarto = new Campus(
  "Lagarto",
  [endereço1],
  [mariana],
  [],
  [matematica],
  [lara],
);

let diego: Professor = new Professor(
  "Diego",
  "Armando",
  "Masculino",
  "009.123.452-00",
  40,
  false,
  [endereço1],
  15000,
  lagarto,
);

let lucas: Professor = new Professor(
  "Lucas",
  "Silva",
  "Masculino",
  "009.123.452-00",
  40,
  false,
  [endereço1],
  15000,
  lagarto,
);

lagarto.professores = [diego, lucas];

//Instânciando um endereço

//Instânciando um Objeto Aluno

console.log(lagarto);
