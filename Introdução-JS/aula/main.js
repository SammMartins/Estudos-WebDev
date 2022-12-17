const { gets, print } = require('./funcoes');

const num = [];

for (let i = 0; i < 5; i++) {
    const num_sort = gets();
    num.push(num_sort);
}

let maiorValor = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] > maiorValor){
        maiorValor = num[i];
    }
    
}

print(maiorValor);