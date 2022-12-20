/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/


function calculadora_preço(forma_pag,valor_prod){
    if (forma_pag === 1){
        var valor_total = valor_prod - (valor_prod*0.1);
        return valor_total;
    } else if (forma_pag === 2){
        var valor_total = valor_prod - (valor_prod*0.15);
        return valor_total;
    } else if (forma_pag === 3){
        var valor_total = valor_prod;
        return valor_total;
    } else if (forma_pag === 4){
        var valor_total = valor_prod + (valor_prod*0.1);
        return valor_total;
    } else{
        console.log("Opção de pagamento inválida");
        return valor_total = 0;
    };
}

(function (){
    const forma_pag = 2
    valor_prod = 45.99

    console.log("Valor total: R$"+calculadora_preço(forma_pag,valor_prod).toFixed(2))
})()