"use strict";
//8.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let retornoNumero = prompt("Informe a sua idade:");
if (retornoNumero) {
    let numero = parseInt(retornoNumero);
    if (numero >= 0) {
        console.log(`O numero ${numero} que foi informado é um numero positivo!`);
    }
    else {
        console.log(`O numero ${numero} que foi informado é um numero negativo!`);
    }
}
else {
    console.log("Informe os dados solicitados!");
}
