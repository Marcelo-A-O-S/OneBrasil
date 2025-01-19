//3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Informe a pontuação do jogador:")
if(pontuacao){
    let pontuacaoConvertida = parseInt(pontuacao)
    if(pontuacaoConvertida >= 100){
        alert("Parabéns, você venceu!")
    }else{
        alert("Tente novamente para ganhar.")
    }
}else{
    alert("Informe um valor como foi solicitado!")
}
