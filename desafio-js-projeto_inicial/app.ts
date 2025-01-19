//Desafios propostos:
//1.Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");
//2.Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome= "Lua";
//3.Crie uma variável chamada idade e atribua a ela o valor 25.
let idade: number = 25;
//4.Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas: number = 50;
//5.Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel: number = 1000;
//6.Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos")
//7.Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro: string = "Erro! preencha todos os campos"
alert(mensagemDeErro)
//8.Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nomeUsuario = prompt("Infome o seu nome:")
//9.Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idadeUsuario = prompt("Informe sua idade:")
//10.Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idadeUsuario){
    const idadeUsuarioConvertida = parseInt(idadeUsuario)
    if(idadeUsuarioConvertida >= 18){
        alert("Pode tirar a habilitação!")
    }else{
        alert("Ainda não pode tirar a habilitação!")
    }   
}else{
    alert("Informe a idade do usuário como foi solicitado!")
}