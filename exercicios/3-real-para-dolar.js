var real = Number(prompt("Olá tudo bem? Insira aqui qaunto em reais você tem: "));
var conversaoDolar = (real/4.92).toFixed(2);


function converterRealParaDolar(){
if(conversaoDolar < 2){
console.log(`Aqui está, você consegue comprar $ ${conversaoDolar} dolar`)
}else{
console.log(`Aqui está, você consegue comprar $ ${conversaoDolar} dolares`)
}
}

converterRealParaDolar()
