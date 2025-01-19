//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let valorNumerico = prompt("Informe um valor numerico")
let contador: number = 0;
if(valorNumerico){
    let valorconvertido = parseInt(valorNumerico)
    while(contador != valorconvertido){
        console.log(`A contagem regressiva esta em: ${valorconvertido}`)
        valorconvertido--
    }
}else{
    alert("Informe um valor númerico como foi solicitado!")
}
while(contador != 0){
    alert(`O valor do contador é: ${contador}`)
    contador--
}