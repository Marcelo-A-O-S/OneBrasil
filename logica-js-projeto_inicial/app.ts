alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo: number = 10;
let chute: number = 0;
let tentativa: number = 1;
function gerarNumeroSecreto(): number{
    let numeroAleatorio: number = Math.random() * numeroMaximo + 1
    return parseInt(numeroAleatorio.toString())
}
let numeroSecreto: number = gerarNumeroSecreto();

while(chute != numeroSecreto){
    const result = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    if(result != null){
        chute = parseInt(result);
        if(chute == numeroSecreto){
            break;
            
        }else{
            tentativa++;
            if(chute < numeroSecreto){
                alert(`O número secreto é maior que ${chute}`);
            }else{
                alert(`O número secreto é menor que ${chute}`);
            }
        }
    }else{
        alert("Informe o numero como foi solicitado!");
    }
    
}
let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa' 
alert(`Isso ai! Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`);

