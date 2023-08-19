const valorInicial = 80;
const valorFinal = 129.99;
const diferenca = valorFinal - valorInicial;
const desconto = (diferenca / valorInicial) * 100;
console.log(`O desconto nescessário para comprar o tenis é de: ${desconto.toFixed(2)} %`);