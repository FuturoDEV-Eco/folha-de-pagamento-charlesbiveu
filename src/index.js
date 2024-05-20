const readline = require('readline');
const fs = require('fs');
const PDFDocument = require('pdfkit');
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

function gerarPDF(dadosFolha) {
  const doc = new PDFDocument();
  const dataAtual = new Date();
  const dataGeracao = dataAtual.toLocaleDateString();

  if (!fs.existsSync('folhas_pagamento')) {
    fs.mkdirSync('folhas_pagamento');
  }

  const filePath = `folhas_pagamento/folha_pagamento_${dadosFolha.nome.replace(
    /\s+/g,
    '_'
  )}_${dataGeracao.replace(/\//g, '-')}.pdf`;
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(12).text('--- Folha de Pagamento ---', { align: 'center' });
  doc.text(`Data de Geração: ${dataGeracao}`);
  doc.text(`Nome: ${dadosFolha.nome}`);
  doc.text(`CPF: ${dadosFolha.cpf}`);
  doc.text(`Mês de Referência: ${dadosFolha.mesExtenso}`);
  doc.text('--- ---');
  doc.text(`Salário Bruto: R$ ${dadosFolha.salarioBruto.toFixed(2)}`);
  doc.text('--- ---');
  doc.text(`INSS: R$ ${dadosFolha.valorINSS}`);
  doc.text(`Imposto de Renda: R$ ${dadosFolha.valorImpostoRenda}`);
  doc.text(`Outros descontos: R$ ${dadosFolha.outrosDescontos.toFixed(2)}`);
  doc.text('--- ---');
  doc.text(`Salário Líquido: R$ ${dadosFolha.salarioLiquido}`);

  doc.end();

  console.log(`PDF gerado em: ${filePath}`);
}
// dica use o gerador de pessoas do 4Dev para gerar cpfs válidos. Usamos no projeto das coletas
// https://www.4devs.com.br/gerador_de_pessoas
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

          const dadosFolha = {
            nome,
            cpf,
            mesExtenso,
            salarioBruto,
            valorINSS,
            valorImpostoRenda,
            outrosDescontos,
            salarioLiquido,
          };

          console.log('--- Folha de Pagamento ---');
          console.log(`Data de Geração: ${new Date().toLocaleDateString()}`);
          console.log(`Nome: ${nome}`);
          console.log(`CPF: ${cpf}`);
          console.log(`Mês de Referência: ${mesExtenso}`);
          console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
          console.log(`INSS: R$ ${valorINSS}`);
          console.log(`Imposto de Renda: R$ ${valorImpostoRenda}`);
          console.log(`Outros descontos: R$ ${outrosDescontos.toFixed(2)}`);
          console.log(`Salário Líquido: R$ ${salarioLiquido}`);

          input.question(
            'Deseja gerar um PDF com a folha de pagamento? (s/n) ',
            (resposta) => {
              if (resposta.toLowerCase() === 's') {
                gerarPDF(dadosFolha);
              }
              input.close();
            }
          );
        });
      });
    });
  });
});
