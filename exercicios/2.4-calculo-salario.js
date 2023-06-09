var salario = Number(prompt("Insira aqui o salário: "))

var codigoCargo = prompt(`
Digite o código equivalente a seu cargo:

Código  Cargo   Percentual
101    Gerente     10%
102   Engenheiro   20%
103    Técnico     30%
`)

switch(codigoCargo){
    case "101" : {
        alert(`Seu novo salário será de R$ ${(salario*1.1).toFixed(2)}`)
        break;
    }
    case "102" : {
        alert(`Seu novo salário será de R$ ${(salario*1.2).toFixed(2)}`)
        break;
    }
    case "103" : {
        alert(`Seu novo salário será de R$ ${(salario*1.3).toFixed(2)}`)
        break;
    }
    default : {
        alert(`Seu novo salário será de R$ ${(salario*1.4).toFixed(2)}`)
        break;
    }
}\

