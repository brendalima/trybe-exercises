let primeiroNumero = 3;
let segundoNumero = 5;
let terceiroNumero = 7;

let primeiroModulo = primeiroNumero % 2;
let segundoModulo = segundoNumero % 2;
let terceiroModulo = terceiroNumero % 2;

if (primeiroModulo == 0 || segundoModulo == 0 || terceiroModulo == 0) {
    console.log(true);
} else {
    console.log(false);
}