function IMC_calc(peso,altura){
   return imc = peso / Math.pow(altura,2);
}

function IMC_class(imc){
    if (imc < 18.5) {
        return  'Muito Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return  'Peso normal ';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso' ;
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave' ;}
}


(function () {
    const peso = 80;
    const altura = 1.83;
    var imc = IMC_calc(peso,altura) ;
    console. log(IMC_class(imc));
})();

