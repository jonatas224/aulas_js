// MANIPULAÇÃO DE DADOS

// CRUD
//creat, read, update e delete
//criar, ler, editar, e deletar

// lista de alunos do curso let´s code!
//* criar uma lista de alunos ok
//* mostrar a lista no console ok
//* adicione alunos na lista ok
//* editar alunos na lista
//* deletar alunos da lista
//* pesquisar alunos na lista

let alunos = [
  {
    nome: "João Pedro",
    idade: 13,
    cidade: "Camocim",
    aprovado: true,
  },
  {
    nome: "Luanna",
    idade: 21,
    cidade: "São Luis",
    aprovado: true,
  },
];

function listarAlunos() {
  console.log("===== Lista de alunos do Curso let´s Code =====");
  alunos.map((aluno) => {
    let status;
    if (aluno.aprovado === true) {
      status = "aprovado";
    } else {
      status = "reprovado";
    }

    console.log(
      `Nome: ${aluno.nome}, idade: ${aluno.idade}, cidade: ${aluno.cidade} status: ${status}`
    );
  });
}

function adicioneAlunos(nome, idade, cidade, aprovado) {
  alunos.push({ nome, idade, cidade, aprovado });
  console.log("aluno adiconado");
  console.log(
    `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}, Aprovado: ${aprovado}`
  );
}

function pesquisarAluno(nome, idade, cidade, aprovado) {
  let alunoEncontrado = alunos.find((aluno) => aluno.nome === nome);
  console.log("========aluno encontrado========");
  console.log(
    `Nome: ${alunoEncontrado.nome}, idade: ${alunoEncontrado.idade}, cidade: ${alunoEncontrado.cidade} status: ${alunoEncontrado.aprovado}`
  );
}

function editarAluno(nome, novoNome, novaIdade, novaCidade, novoStatus) {
  let index = alunos.findIndex((aluno) => aluno.nome === nome);
  console.log("index", index);

  if (novoNome) {
    alunos[index].nome = novoNome;
  }

  if (novaIdade) {
    alunos[index].idade = novaIdade;
  }

  if (novaCidade) {
    alunos[index].cidade = novaCidade;
  }


  let status;
  if (alunos[index].aprovado === true){
    status = "aprovado";
  } else {
    status = "reprovado";
  }

  console.log("@",alunos[index].aprovado)
  console.log("=========Aluno Editado==============");
  console.log(
    `nome: ${alunos[index].nome}, idade: ${alunos[index].idade}, cidade: ${alunos[index].cidade}, status: ${status}`
  );
}

function removerAlunos(nome) {
  let alunoFiltrados = alunos.filter((aluno) => aluno.nome !== nome);
  let alunoRemovido = alunos.filter((aluno) => aluno.nome === nome);
  // console.log("alunoFiltrados", alunoFiltrados);
  // console.log("alunoRemovido", alunoRemovido);
  alunos = alunoFiltrados;
let status
  if (alunoRemovido[0].aprovado === true) {
    status = "aprovado";
  } else {
    status = "reprovado";
  }


  console.log("=============Aluno Removido=================");
  console.log(
    `nome: ${alunoRemovido[0].nome},
    idade: ${alunoRemovido[0].idade},
   cidade: ${alunoRemovido[0].cidade},
   status: ${status}`
  );
}

// listarAlunos();
// adicioneAlunos('alessandra sousa',20,'parnaiba',true)
// listarAlunos();
// pesquisarAluno('Luanna')
// pesquisarAluno('João Pedro')
listarAlunos();
editarAluno("João Pedro", "João Henrique");
listarAlunos();
removerAlunos("Luanna");
listarAlunos();
