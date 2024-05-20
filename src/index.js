const readline = require('readline');
const calcularINSS = require('./calculo_inss');
const calcularImpostoRenda = require('./calculo_imposto_renda');
const calcularSalarioLiquido = require('./calculo_salario_liquido');
const validaCPF = require('./validaCPF');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getMesExtenso(mes) {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return meses[mes - 1];
}

input.question('Digite o nome do funcionário: ', (nome) => {
  input.question('Digite o CPF do funcionário: ', (cpf) => {
    if (!validaCPF(cpf)) {
      console.log('CPF inválido.');
      input.close();
      return;
    }

    input.question('Digite o mês do pagamento (Numérico): ', (mes) => {
      const mesNumero = parseInt(mes);
      if (isNaN(mesNumero) || mesNumero < 1 || mesNumero > 12) {
        console.log('Por favor, insira um número válido para o mês.');
        input.close();
        return;
      }

      input.question('Digite o salário bruto: ', (salario) => {
        const salarioBruto = parseFloat(salario);
        if (isNaN(salarioBruto)) {
          console.log(
            'Por favor, insira um número válido para o salário bruto.'
          );
          input.close();
          return;
        }

        input.question('Digite outros descontos: ', (descontos) => {
          const outrosDescontos = parseFloat(descontos);
          if (isNaN(outrosDescontos)) {
            console.log(
              'Por favor, insira um número válido para outros descontos.'
            );
            input.close();
            return;
          }

          const valorINSS = calcularINSS(salarioBruto);
          const valorImpostoRenda = calcularImpostoRenda(salarioBruto);
          const salarioLiquido = calcularSalarioLiquido(
            salarioBruto,
            outrosDescontos
          );
          const mesExtenso = getMesExtenso(mesNumero);

          console.log('--- Folha de Pagamento ---');
          console.log(`Nome: ${nome}`);
          console.log(`CPF: ${cpf}`);
          console.log(`Mês de Referência: ${mesExtenso}`);
          console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
          console.log(`INSS: R$ ${valorINSS}`);
          console.log(`Imposto de Renda: R$ ${valorImpostoRenda}`);
          console.log(`Salário Líquido: R$ ${salarioLiquido}`);

          input.close();
        });
      });
    });
  });
});
