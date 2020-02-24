
//Loop
//for -> enquanto for
document.write("Iniciando o Loop ''for'' ... <br/>");
for(y = 0; y<=10; y++ ){
    document.write("Número y " + y + "<br/>");
}
document.write("Finalizando o Loop ''for'' ... <br/><br/>");


//while -> enquanto for
var x = 0;
document.write("Iniciando o Loop  ''while''... <br/>");
while(x<=10){

    document.write("Número: " + x + "<br/>");
    x++; //igual a: x = x + 1
}
document.write("Finalizando o Loop ''while'' ... <br/>");


// Manipulação de Array
function Arrays(){
    var listaArray = [
        "Arroz",
        "Feijão",
        "macarrão",
        "carne",
    ]

    var ing = document.getElementById("ingrediente").value;
    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>"+ing+"</li>";
    document.getElementById("lista").innerHTML = listahtml;
}


//Opertações matemáticas
function somar(){
    var campo1=parseInt(document.getElementById("campo1").value);
    var campo2=parseInt(document.getElementById("campo2").value);

/*    alert("campo1 = " + campo1);
    alert("campo2 = " + campo2); */

    var soma = campo1 + campo2;
    var subtrair = campo1 - campo2;
    var multiplicar = campo1 * campo2;
    var dividir = campo1 / campo2;
    alert("a soma de: " + campo1 + " + " + campo2 + " = " + soma);
    alert("a subtração de: " + campo1 + " - " + campo2 + " = "  + subtrair);
    alert("a multiplicação de: " + campo1 + " x " + campo2 + " = " + multiplicar);
    alert("a divisão de: " + campo1 + " / " + campo2 + " = " + dividir);

}


/*
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
*/