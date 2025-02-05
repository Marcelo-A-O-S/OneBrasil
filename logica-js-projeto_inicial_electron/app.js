"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let numeroMaximo = 10;
let chute = 0;
let tentativa = 1;
function gerarNumeroSecreto() {
    let numeroAleatorio = Math.random() * numeroMaximo + 1;
    return parseInt(numeroAleatorio.toString());
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    alert("Boas vindas ao jogo do numero secreto");
    let numeroSecreto = gerarNumeroSecreto();
    while (chute != numeroSecreto) {
        const result = yield window.api.getNumber(numeroMaximo);
        if (result != null) {
            chute = parseInt(result);
            if (chute == numeroSecreto) {
                break;
            }
            else {
                if (chute < numeroSecreto) {
                    alert(`O número secreto é maior que ${chute}`);
                }
                else {
                    alert(`O número secreto é menor que ${chute}`);
                }
                tentativa++;
            }
        }
        else {
            alert("Informe o numero como foi solicitado!");
        }
    }
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`);
}))();
