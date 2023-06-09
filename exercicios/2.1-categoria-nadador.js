/* 1 - Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes categorias:
infantil A = 5 - 7 anos
infantil B = 8-10 anos
juvenil A = 11-13 anos
juvenil B = 14-17 anos
adulto = maiores de 18 anos */

var idade = Number(prompt("Escreva aqui a sua idade: "))

if(idade < 5){
    alert("idade inválida para uma categoria!!!")
}else if(idade <= 7){
    alert("você está na categoria infantil A")
}else if(idade <= 10){
    alert("você está na categoria infantil B")
}else if(idade <= 13){
    alert("você está na categoria juvenil A")
}else if(idade <= 17){
    alert("você está na categoria juvenil B")
}else{
    alert("você está na caetgoria adulto")
}