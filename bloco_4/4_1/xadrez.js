let nomeDaPeca = "Richa";

if (nomeDaPeca.toLowerCase() == "rei") {
    console.log("Todas as direções, uma casa por vez.")
}
else if (nomeDaPeca.toLowerCase() == "rainha") {
    console.log("Vertical, horizontal e diagonal.")
}
else if (nomeDaPeca.toLowerCase() == "bispo") {
    console.log("Diagonal.")
}
else if (nomeDaPeca.toLowerCase() == "cavalo") {
    console.log("Em L.");
}
else if (nomeDaPeca.toLowerCase() == "torre") {
    console.log("Vertical e horizontal.")
}
else if (nomeDaPeca.toLowerCase() == "peão") {
    console.log("Uma casa a frente.")
}
else {
    console.log("Peça inválida.")
}