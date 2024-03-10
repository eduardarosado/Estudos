let titulo = document.querySelector('h1');
titulo.innerHTML = 'Manipulando textos e fuções';

function verificarClique(){
    console.log('O botão foi clicado');
}

function gerarAlerta(){
    alert('Bem vindo ao meu primeiro código JS');
}

function exibirMensagem(){
 let cidade = prompt('Cite uma cidade ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somarDoisNumeros(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`O resultado é soma de ${primeiroNumero} e ${segundoNumero} é ${resultado}.`);
}


