//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(): void{
    console.log("Olá mundo!");
}
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome:string): void{
    console.log(`Olá, ${nome}!`);
}
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibirDobroNumero(numero: number): number{
    return numero * 2;
}
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function exibirMediaDeTresNumeros(num1: number, num2: number, num3:number): number{
    return (num1 + num2 + num3 )/ 3;
}
//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function exibirMaiorNumero(num1: number, num2:number): number{
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function exibirMultiplicacaoPorEleMesmo(numero:number): number{
    return numero * numero
}