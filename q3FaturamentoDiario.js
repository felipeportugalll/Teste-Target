const fs = require('fs');
const rawData = fs.readFileSync('./dados.json');
const data = JSON.parse(rawData);

//menor e maior valor
let menor = Number.MAX_VALUE;
let maior = Number.MIN_VALUE;
for (let i = 0; i < data.length; i++) {
  if (data[i].valor > 0) {
    if (data[i].valor < menor) {
      menor = data[i].valor;
    }
    if (data[i].valor > maior) {
      maior = data[i].valor;
    }
  }
}

//media mensal
let total = 0;
let diasComFaturamento = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].valor > 0) {
    total += data[i].valor;
    diasComFaturamento++;
  }
}
const media = total / diasComFaturamento;

let diasAcimaDaMedia = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].valor > media) {
    diasAcimaDaMedia++;
  }
}

console.log(`O menor valor de faturamento ocorrido em um dia do mês: R$ ${menor.toFixed(2)}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: R$ ${maior.toFixed(2)}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`);
