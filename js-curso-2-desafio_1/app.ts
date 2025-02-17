//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
if(titulo){
    titulo.innerHTML = "Hora do Desafio."
}
let btns = document.querySelectorAll('button');
if(btns.length > 0){
    //Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
    btns[0].addEventListener('click',()=>{
        console.log("O botão foi clicado!")
    })
    //Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
    btns[1].addEventListener('click',()=>{
        alert("Eu amo JS")
    })
    //Crie uma função que é executada quando o botão prompt é clicado, 
    // perguntando o nome de uma cidade do Brasil. Em seguida, exiba 
    // um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
    btns[2].addEventListener('click',()=>{
        let cidade = prompt("Informe um nome de cidade do Brasil");
        if(cidade){
            alert(`Estive em ${cidade} e lembrei de você.`)
        }else{
            alert("Informe o nome de uma cidade para poder continuar.")
        }
    })
    //Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
    btns[3].addEventListener('click',()=>{
        let num1 = prompt("Informe o primeiro valor inteiro para ser somado:");
        if(!num1){
            return alert("Informe o valor como solicitado para continuar!");
        }
        let num2 = prompt("Informe o segundo valor inteiro para ser somado:");
        if(!num2){
            return alert("informe o valor como solicitado para continuar!");
        }
        let numConvert1 = parseInt(num1);
        let numConvert2 = parseInt(num2);
        if(isNaN(numConvert1) || isNaN(numConvert2)){
            return alert("Informe o valor solicitado anteriormente corretamente para continuar");
        }
        return alert(`A soma entre o número ${numConvert1} e o número ${numConvert2} é igual á:${numConvert1 + numConvert2}`)
    })
}
