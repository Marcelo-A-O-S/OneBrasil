"use strict";
//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, 
// e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(altura, peso) {
    let imc = peso / (altura * altura);
    console.log(`O seu indice de massa corporal é igual a: ${imc.toFixed(2)}`);
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculoFatorial(numero) {
    if (numero < 0) {
        throw new Error("O fatorial não está definido para números negativos.");
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    console.log(`O fatorial do numero ${numero} informado é ${resultado}.`);
}
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
function conversorDeDolar(valor) {
    const cotacao = 4.80;
    if (valor < 0) {
        throw new Error("Não é possivel converter um valor negativo!");
    }
    let conversao = valor * cotacao;
    console.log(`O valor de ${valor} em dólar equivale a R$ ${conversao.toFixed(2)}.`);
}
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas 
// como parâmetro.
function exibirPerimetroEAreaRetangular(altura, largura) {
    if (altura < 0 || largura < 0) {
        throw new Error("Nenhum dos valores para calculo de area e perimetro pode ser negativo");
    }
    let perimetro = 2 * (altura + largura);
    let area = altura * largura;
    console.log(`O valor do perimetro é igual a: ${perimetro.toFixed(2)} e a área é igual a:${area.toFixed(2)}.`);
}
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como 
// parâmetro. Considere Pi = 3,14.
function exibirPerimetroEAreaCircular(raio) {
    if (raio < 0) {
        throw new Error("O valor do raio não pode ser negativo.");
    }
    const pi = Math.PI;
    let perimetro = 2 * pi * raio;
    let area = pi * (raio * raio);
    console.log(`O valor do perimetro é igual a: ${perimetro.toFixed(2)} e a área é igual a:${area.toFixed(2)}.`);
}
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
}
