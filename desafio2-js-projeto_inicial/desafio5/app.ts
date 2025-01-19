//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt("Informe o nome do usuário:")
if(nomeUsuario){
    alert(`Seja bem vindo ${nomeUsuario}!`)
}else{
    alert("Informe o nome do usuário como foi solicitado!")
}
