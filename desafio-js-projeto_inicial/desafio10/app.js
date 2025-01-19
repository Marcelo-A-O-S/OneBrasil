"use strict";
//Desafios propostos:
//10.Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
let idadeUsuario = prompt("Informe sua idade:");
if (idadeUsuario) {
    const idadeUsuarioConvertida = parseInt(idadeUsuario);
    if (idadeUsuarioConvertida >= 18) {
        alert("Pode tirar a habilitação!");
    }
    else {
        alert("Ainda não pode tirar a habilitação!");
    }
}
else {
    alert("Informe a idade do usuário como foi solicitado!");
}
