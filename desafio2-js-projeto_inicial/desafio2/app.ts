//2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Informe um valor númerico:")
if(numero){
    let numeroConvertido = parseFloat(numero)
    if(numeroConvertido < 0){
        alert("O numero é negativo")
    }else{
        alert("O numero é positivo")
    }
}else{
    alert("Informe um valor numerico como foi solicitado!")
}
