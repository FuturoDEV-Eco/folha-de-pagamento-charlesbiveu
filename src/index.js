const readline = require('readline');
const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');
const calcularSalarioLiquido = require('./calculo_salario_liquido');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Digite o salário bruto: ', (salario) => {
  const salarioBruto = parseFloat(salario);

  if (isNaN(salarioBruto)) {
    console.log('Por favor, insira um número válido para o salário bruto.');
    input.close();
    return;
  }

  input.question('Digite outros descontos: ', (descontos) => {
    const outrosDescontos = parseFloat(descontos);

    if (isNaN(outrosDescontos)) {
      console.log('Por favor, insira um número válido para outros descontos.');
      input.close();
      return;
    }

    console.log(`O valor do salário bruto é: R$ ${salarioBruto}`);

    const valorINSS = calcularINSS(salarioBruto);
    console.log(`O valor a ser pago de INSS é: R$ ${valorINSS}`);

    const valorImpostoRenda = calcularImpostoRenda(salarioBruto);
    console.log(
      `O valor a ser pago de Imposto de Renda é: R$ ${valorImpostoRenda}`
    );
    console.log(
      `O valor dos descontos adicionais é (digite 0 caso não haja): R$ ${outrosDescontos}`
    );
    const salarioLiquido = calcularSalarioLiquido(
      salarioBruto,
      outrosDescontos
    );
    console.log(`O salário líquido é: R$ ${salarioLiquido}`);

    input.close();
  });
});
