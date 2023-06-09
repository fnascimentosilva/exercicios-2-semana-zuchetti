var nome = (prompt("Olá tudo bem? Insira aqui seu nome completo: "));
var idade = Number(prompt("Digite aqui a sua idade: "))


function situacaoAlistamentoMilitar(){
if(idade < 18){
alert(`Sr. ${nome} ainda faltam ${18-idade} anos para seu alistamento`)
}else{
alert(`Sr. ${nome} já se passaram ${idade-18} anos do seu alistamento, resolva sua situação se já resolveu desconsidere este aviso`)
}
}

situacaoAlistamentoMilitar()