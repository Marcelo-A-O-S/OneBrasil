

(async ()=>{
    alert("Boas vindas ao jogo do numero secreto");
    let numeroSecreto: number = 5;
    let chute: number = 0;
    let tentativa: number = 1;
    while(chute != numeroSecreto){
        const result = await window.api.getNumber();
        if(result != null){
            chute = parseInt(result);
            if(chute == numeroSecreto){
                alert(`Isso ai! Você acertou o número secreto com ${tentativa} tentativas!`);
            }else{
                if(chute < numeroSecreto){
                    alert(`O número secreto é maior que ${chute}`);
                }else{
                    alert(`O número secreto é menor que ${chute}`);
                }
                tentativa++
            }
        }else{
            alert("Informe o numero como foi solicitado!");
        }
        
    }
    
    
})()
