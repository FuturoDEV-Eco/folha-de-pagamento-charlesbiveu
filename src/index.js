const readline = require('readline');
const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Digite o salário bruto: ', (salario) => {
  const salarioBruto = parseFloat(salario);
  if (isNaN(salarioBruto)) {
    console.log('Por favor, insira um número válido.');
  } else {
    const valorINSS = calcularINSS(salarioBruto);
    console.log(`O valor a ser pago de INSS é: R$ ${valorINSS}`);

    const valorImpostoRenda = calcularImpostoRenda(salarioBruto);
    console.log(
      `O valor a ser pago de Imposto de Renda é: R$ ${valorImpostoRenda}`
    );
  }
  input.close();
});
