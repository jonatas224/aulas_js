const pessoa = {
  nome: "Jonatas",
  idade: 13,
  profissão: "estudante",
  ano: "7° ano",
};
function apresentacao() {
  console.log(
    "olá meu nome é " +
      pessoa.nome +
      " tenho " +
      pessoa.idade +
      " anos " +
      " sou " +
      pessoa.profissão +
      " e faço o " +
      pessoa.ano
  );
}

apresentacao();
