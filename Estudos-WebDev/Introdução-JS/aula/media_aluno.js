const nota1 = 5;
const nota2 = 9;
const nota3 = 7;

var media = (nota1 + nota2 + nota3) / 3;

console.log("A média foi: " + media.toFixed(1));

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
} else if (media >= 7){
    console.log("Aprovado");
}