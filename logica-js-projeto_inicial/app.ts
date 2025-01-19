

(async ()=>{
    alert("Boas vindas ao jogo do numero secreto");
    let numeroSecreto: number = 5
    let chute: number = 0;
    while(chute != numeroSecreto){
        const result = await window.api.getNumber()
        if(result != null){
            chute = parseInt(result)
            if(chute == numeroSecreto){
                alert("Isso ai! Você acertou o número secreto!")
            }else{
                alert("infelizmente você errou, tente novamente")
            }
        }else{
            alert("Informe o numero como foi solicitado!")
        }
        
    }
    
    
})()
