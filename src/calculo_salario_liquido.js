const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');

function calcularSalarioLiquido(salarioBruto, outrosDescontos = 0) {
  const valorINSS = parseFloat(calcularINSS(salarioBruto));
  const valorImpostoRenda = parseFloat(calcularImpostoRenda(salarioBruto));

  const salarioLiquido =
    salarioBruto - valorINSS - valorImpostoRenda - outrosDescontos;

  return salarioLiquido.toFixed(2);
}

module.exports = calcularSalarioLiquido;
