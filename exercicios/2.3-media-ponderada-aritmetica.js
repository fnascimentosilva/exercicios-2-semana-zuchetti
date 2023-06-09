var nota1 = 9;
var nota2 = 7;
var nota3 = 5;

var pesoNota1 = 3;
var pesoNota2 = 3;
var pesoNota3 = 4;

function mediaPonderada(){
var mediaPonderada = ((nota1*pesoNota1)+(nota2*pesoNota2)+(nota3*pesoNota3))/(pesoNota1+pesoNota2+pesoNota3)
console.log(`A média ponderada é: ${mediaPonderada}`);
}

function mediaAritmetica(){
var mediaAritmetica = (nota1+nota1+nota3)/3
console.log(`A média aritmética  é: ${mediaAritmetica}`);
}

mediaPonderada()
mediaAritmetica()