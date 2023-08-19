const capital = 1000;
const taxaJuros = 0.125;
const meses = 5;

const montante = capital * Math.pow(1 + taxaJuros, meses);
//const montante = 1000 * (1 + 0.125) ^ 5;  verificar outra formula
console.log(`Aplicando o valor de R$ ${capital} reais com juros de ${0.125} ao mês, durante ${meses} meses. Temos um montante de R$ ${montante.toFixed(2)} reais`);