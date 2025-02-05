//7.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let retornoIdade = prompt("Informe a sua idade:")
if(retornoIdade){
    let idadeUsuario = parseInt(retornoIdade)
    if(idadeUsuario >= 18){
        console.log(`Você tem ${idadeUsuario} de idade, então você é de maior!`)
    }else{
        console.log(`Você tem ${idadeUsuario} de idade, então você é de menor!`)
    }
}else{
    console.log("Informe os dados solicitados!")
}