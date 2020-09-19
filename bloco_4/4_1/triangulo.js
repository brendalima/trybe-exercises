let angulo1 = 15;
let angulo2 = 25;
let angulo3 = 90;

let somaDosAngulosInternos = angulo1 + angulo2 + angulo3;

if (somaDosAngulosInternos == 180) {
    console.log(true);
}
else {
    console.log(false);
    alert("Erro: triângulo inválido");
}