// Criando Funções

function adicionarIngrediente(){
    var ing = document.getElementById("ingrediente").value;
    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ing+"</li>";
    document.getElementById("lista").innerHTML = listahtml;
}

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