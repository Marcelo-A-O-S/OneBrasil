//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador
let valorNumerico = prompt("Informe um valor numerico")
let contador: number = 0;
if(valorNumerico){
    let valorconvertido = parseInt(valorNumerico)
    while(contador != valorconvertido){
        console.log(`A contagem progressiva esta em: ${contador}`)
        contador++
    }
}else{
    alert("Informe um valor númerico como foi solicitado!")
}
while(contador != 0){
    alert(`O valor do contador é: ${contador}`)
    contador--
}