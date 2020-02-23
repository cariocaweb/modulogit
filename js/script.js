// Criando Funções

function tocarDiv(){ // função simples
    var area = document.getElementById("area");
    var texto = prompt("Qual o seu nome?");

    area.innerHTML=texto;
}


function tocarNome(nome, idade){ // função simples
    var area = document.getElementById("area");
    var texto = prompt("Qual o seu nome?");

    area.innerHTML = nome + " " + texto + " tem " + idade + " anos";
}