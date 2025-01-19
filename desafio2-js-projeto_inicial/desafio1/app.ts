//1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Informe o dia da semana:")
if(diaDaSemana){
    if(diaDaSemana == "Sabádo" || diaDaSemana == "Domingo"){
        alert("Bom fim de semana!")
    }else if(diaDaSemana == "Segunda" || diaDaSemana == "Terça" || diaDaSemana == "Quarta" || diaDaSemana == "Quinta" || diaDaSemana == "Sexta"){
        alert("Boa semana!")
    }else{
        alert("Informe um valor valido!")
    }
}else{
    alert("Informe o dia da semana para prosseguir")
}