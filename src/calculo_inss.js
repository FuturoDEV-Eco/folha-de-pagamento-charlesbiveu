function calcularINSS(salarioBruto) {
  let valorINSS = 0;

  if (salarioBruto <= 1412.0) {
    valorINSS = salarioBruto * 0.075;
  } else if (salarioBruto <= 2666.68) {
    valorINSS = salarioBruto * 0.9;
  } else if (salarioBruto <= 4000.03) {
    valorINSS = salarioBruto * 0.12;
  } else if (salarioBruto <= 7786.02) {
    valorINSS = salarioBruto * 0.14;
  } else {
    // Para salários acima do teto usa aliquota de 14% (máximo)
    valorINSS = salarioBruto * 0.14;
  }

  // Aplica o teto máximo de contribuição
  if (valorINSS > 908.85) {
    valorINSS = 908.85;
  }

  return valorINSS.toFixed(2);
}

module.exports = calcularINSS;
