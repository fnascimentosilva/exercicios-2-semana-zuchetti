var codigoPedido = prompt(`
Digite aqui o codigo do seu pedido: 

Especificação   Código Preço
Cachorro quente  100   1,20
Bauru simples    101   1,30
Bauru com ovo    102   1,50
Hambúrger        103   1,20
Cheeseburguer    104   1,30
Refrigerante     105   1,00`)



var quantidadePedido = Number(prompt("Insira a quantidade do pedido: "))

switch(codigoPedido){
    case "100" : {
        alert(`O valor a ser pago é de R$ ${(quantidadePedido*1.20).toFixed(2)} `)
        break;
    }
    case "101" : {
        alert(`O valor a ser pago é de R$ ${(quantidadePedido*1.30).toFixed(2)} `)
        break;
    }
    case "102" : {
        alert(`O valor a ser pago é de R$ ${(quantidadePedido*1.50).toFixed(2)} `)
        break;
    }
    case "103" : {
        alert(`O valor a ser pago é de R$ ${(quantidadePedido*1.20).toFixed(2)} `)
        break;
    }
    case "104" : {
        alert(`O valor a ser pago é de R$ ${(quantidadePedido*1.30).toFixed(2)} `)
        break;
    }
    case "105" : {
        alert(`O valor a ser pago é de R$ ${(quantidadePedido*1.00).toFixed(2)} `)
        break;
    }
    
}