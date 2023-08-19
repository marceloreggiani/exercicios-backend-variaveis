/***i:** taxa de juros \
**M:** montante \
**C:** capital inicial (valor de dinheiro inicial) \
**n:** número de meses
$$ i = \frac{M}{C}^\frac{1}{n} - 1 $$
*/

const m = 90000;
const c = 60000;
const n = 24;
const i = (m / c) ** (1 / n) - 1;
const txJuros = i * 100;

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${txJuros.toFixed(3)} %, após ${n} meses teve que pagar ${m} reais`);