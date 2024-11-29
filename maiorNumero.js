//Solicita ao usuario 2 numeros para verificar o marior
var n1 = parseFloat(prompt("Me diga Dois Números e eu informerei o maior, diga o primeiro número: "));
var n2 = parseFloat(prompt("Diga o segundo número: "));

//verifica se o n1 seria o maior
if(n1 > n2){
    alert("O maior número é o " + n1 + ", sendo o menor número o " + n2);
    console.log("O maior número é o " + n1 + ", sendo o menor número o " + n2);
}

//verifica se o n2 seria o maior
else if(n2 > n1){
    alert("O maior número é o " + n2 + ", sendo o menor número o " + n1);
    console.log("O maior número é o " + n2 + ", sendo o menor número o " + n1);
}

//verifica se eles são iguais
else if(n1 == n2){
    alert("Os dois números são iguais, sendo " + n1);
    console.log("Os dois números são iguais, sendo " + n1);
}

//verifica se for invalido
else{
    alert("Valor inválido, tente novamente!!");
    console.log("Valor inválido, tente novamente!!");
}