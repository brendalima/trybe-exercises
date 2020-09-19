let custoDoProduto = 500;
let valorDeVenda = 500;

if (custoDoProduto < 0 || valorDeVenda < 0) {
    console.log("Erro: valores inválidos.")
}

custoTotal = custoDoProduto * 1,2;
lucro = (valorDeVenda - custoTotal) * 1000;
console.log(lucro);