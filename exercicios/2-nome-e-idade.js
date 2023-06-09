var aluno = {
    nome : "",
    idade : 0
  }
  
  aluno.nome = prompt("informe o nome do aluno: ")
  aluno.idade = Number(prompt("Agora informe sua idade: "))
  
  console.log(`Olá meu nome é ${aluno.nome} e tenho ${aluno.idade} anos`)