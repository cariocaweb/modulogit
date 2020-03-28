
function mudouOpcao(objeto){
    console.log("Selecionou: "+ objeto.value);
}

function focou(){
    console.log("Focou no campo: 1");
}

function desfocou(){
    console.log("Desfocou do campo 1");
}
//evento teclado
function apertouTecla(event){
    console.log("Apertou Alguma Tecla: "+event.keyCode); //pega qual o cód do botão
    
    if(event.shiftKey == true){
        console.log("Apertou Alguma Tecla com shift "); //para verificar se o shift foi pressionado retornando "True ou False"
    }

    // verifica e pega o que foi pressionado Shift + tecla (representada pelo cód da tecla)
    if(event.shiftKey == true && event.keyCode == 69){
        console.log("Apertou Shift + E "); //para verificar se o shift foi pressionado retornando "True ou False"
    }

    if(event.ctrlKey == true){
        console.log("Apertou Alguma Tecla com Ctrl "); //para verificar se o ctrl foi pressionado retornando "True ou False"
    }
  
}

function carregou(){
    alert("Pagina Carregada!");
}




//eventos JS
function cliqeuDuplo(){
    console.log("Clicou 2 vezes");
}
function apertouMouse(){
    console.log("Apertou o Mouse");
}
function soltouMouse(){
    console.log("Soltou o Mouse");
}
function mouseCima(){
    console.log("Passou o Mouse");
}
function mouseSaiu(){
    console.log("Mouse saiu de cima");
}
function mouseMove(){
    console.log("Mouse moveu em cima");
}
function clicou(){
    console.log("Clicou");

}

function botaoDireito(){
    console.log("Botão Direito");

    return false;
}

//função verificar

function verificar(){
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;

    if(n1 == n2){
        alert("Você acertou");
        //document.write("Você acertou o número!");      
    }else{
        alert("Você errou");
        //document.write("Você errou o número!");
    }
    resetar();
}

function resetar(){
    document.getElementById("n2").value="";

    var r = Math.floor(Math.random() *100);
    document.getElementById("n1").innerHTML = r;
}

/*
//switch
i=parseInt(prompt("Escolha um nº de 0 a 5"));
switch(i){
    case 0:
        document.write("i é ugual a 0");
        break;
    case 1:
        document.write("i é ugual a 1");
        break;
    case 2:
        document.write("i é ugual a 2");
        break;
    case 3:
        document.write("i é ugual a 3");
        break;
    case 4:
        document.write("i é ugual a 4");
        break;
    case 5:
        document.write("i é ugual a 5");
        break;
    default:
        document.write("Você escolheu um nº diferente de 0 a 5.");
}

document.write("<br/><br/><br/><br/>");

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
*/
/*
//Opertações matemáticas
function somar(){
    var campo1=parseInt(document.getElementById("campo1").value);
    var campo2=parseInt(document.getElementById("campo2").value);
*/
/*    alert("campo1 = " + campo1);
    alert("campo2 = " + campo2); */
/*
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