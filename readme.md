🏫 Sistema de Gestão Acadêmica (SGA)
Este projeto foi desenvolvido como parte da disciplina de Programação Orientada a Objetos (POO). O objetivo é simular as funcionalidades principais de um sistema de gestão escolar (inspirado em plataformas como SIGAA ou SUAP), aplicando conceitos sólidos de arquitetura de software e tipagem estática com TypeScript.

🚀 Sobre o Projeto
O sistema permite o gerenciamento de uma instituição de ensino, focando na interação entre alunos, professores e a administração acadêmica. Através dele, é possível realizar matrículas, lançar notas, gerenciar turmas e consultar históricos.

🛠️ Tecnologias Utilizadas
Linguagem: TypeScript

Paradigma: Orientado a Objetos (POO)

Ambiente: Node.js

🧩 Conceitos de POO Aplicados
Para garantir um código limpo e escalável, o projeto explora os quatro pilares da POO:

Abstração: Criação de classes base para representar entidades do mundo real (Pessoas, Disciplinas, Cursos).

Encapsulamento: Proteção de dados sensíveis (como notas e registros acadêmicos) através de modificadores de acesso (private, protected).

Herança: Especialização de classes (ex: Aluno e Professor herdando de uma classe comum Usuario).

Polimorfismo: Implementação de métodos que se comportam de formas diferentes dependendo do contexto do objeto.

📋 Funcionalidades Principais
Gestão de Usuários: Cadastro e autenticação de Alunos, Professores e Administradores.

Controle Acadêmico: Criação de disciplinas, abertura de turmas e enturmação de alunos.

Avaliação: Lançamento de notas, cálculo de médias e verificação de status (Aprovado/Reprovado).

Consultas: Emissão de histórico escolar e diário de classe para professores.

📂 Estrutura de Pastas
Plaintext
src/
├── entities/ # Classes principais (User, Student, Teacher, Course...)
├── interfaces/ # Contratos e definições de tipos
├── services/ # Lógica de negócio e regras do sistema
└── index.ts # Ponto de entrada da aplicação

✒️ Autores
Seu Nome - Mateus0gama

Nome do Professor - Diego Armando
