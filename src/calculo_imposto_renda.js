function calcularImpostoRenda(salarioBruto) {
  let aliquota;
  let parcelaDeduzir;
  let valorImposto;

  if (salarioBruto <= 2112.0) {
    aliquota = 0;
    parcelaDeduzir = 0;
  } else if (salarioBruto <= 2826.65) {
    aliquota = 7.5;
    parcelaDeduzir = 158.4;
  } else if (salarioBruto <= 3751.05) {
    aliquota = 15;
    parcelaDeduzir = 370.4;
  } else if (salarioBruto <= 4664.68) {
    aliquota = 22.5;
    parcelaDeduzir = 651.73;
  } else {
    aliquota = 27.5;
    parcelaDeduzir = 884.96;
  }

  valorImposto = salarioBruto * (aliquota / 100) - parcelaDeduzir;

  // O valor do imposto não pode ser negativo
  if (valorImposto < 0) {
    valorImposto = 0;
  }

  return valorImposto.toFixed(2);
}

module.exports = calcularImpostoRenda;
