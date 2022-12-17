/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class carro {
    marca;
    cor;
    gastoMedKM;

    constructor(marca,cor,gastoMedKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedKM = gastoMedKM;
    }

    calcular_gastos_viagem(distanciaKM,preco_combust){
        return this.gastoMedKM * preco_combust * distanciaKM;
    }
}

const agile = new carro("Chevrolet","Preto",1/11);
console.log(agile.marca,agile.cor,agile.gastoMedKM + "\nGasto da Viagem R$" + agile.calcular_gastos_viagem(120,5.45).toFixed(2));