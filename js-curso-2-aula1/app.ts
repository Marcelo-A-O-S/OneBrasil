
let listaDeNumerosSorteados: number[] = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag:string, texto:string){
    let campo = document.querySelector(tag);
    if(campo){
        campo.innerHTML = texto;
    }
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
exibirMensagemInicial()
function verificarChute(){
    let chute = document.querySelector('input')?.value;
    if(chute){
        let valorChute = parseInt(chute);
        if(valorChute == numeroSecreto){
            exibirTextoNaTela('h1', "Você acertou!");
            let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
            let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar')?.removeAttribute('disabled');
        }else{
            if(valorChute > numeroSecreto){
                exibirTextoNaTela('p', "O numero secreto é menor!");
            }else{
                exibirTextoNaTela('p',"O numero secreto é maior!");
            }
            tentativas++
            limparCampo()
        }
    }
}

function gerarNumeroAleatorio(){
    let numeroAleatorio = Math.random()* numeroLimite + 1;
    let numeroEscolhido = parseInt(numeroAleatorio.toString());
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
    if(quantidadeDeNumerosSorteados == numeroLimite){
        listaDeNumerosSorteados = []
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
function limparCampo(){
    let chute = document.querySelector('input')
    if(chute){
        chute.value = ''
    }
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar')?.setAttribute('disabled','true')
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1',"Jogo do número secreto.");
    exibirTextoNaTela('p', "Escolha entre um número entre 1 e 10:");    
}   