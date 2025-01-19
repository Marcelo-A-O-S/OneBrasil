//4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = prompt("Informe o deposito que será realizado na conta:")
if(saldo){
    let saldoConvertido = parseFloat(saldo)
    alert(`O saldo da conta do usuário é : ${saldo}`)
}else{
    alert("Informe um valor de deposito como foi solicitado!")
}
