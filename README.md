# Exercícios módulo 2 semana 01 - Projeto folha de pagamento com Node.js

![Node.js](https://img.shields.io/badge/Node.js-v16.0.0-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## Descrição

Este projeto contém uma série de exercícios desenvolvidos em Node.js, com o objetivo de praticar cálculos relacionados a folha de pagamento. Cada exercício foi implementado em uma branch específica, utilizando boas práticas de programação e seguindo uma abordagem modular.

## Exercícios

### Exercício 1: Cálculo do INSS - branch M2S01

- **Arquivo:** `index.js`
- **Descrição:** Prepara o ambiente para o inicio do projeto **npm init -y**, é criada a pasta src, o arquivo index.js e instalando o nodemon.

### Exercício 2: Cálculo do INSS - branch M2S02

- **Arquivo:** `calculo_inss.js`
- **Descrição:** Implementa uma função que calcula o valor a ser pago de INSS com base no salário bruto recebido. A função considera diferentes faixas salariais e aplica as alíquotas correspondentes.

### Exercício 3: Cálculo do Imposto de Renda - branch M2S01-Ex03

- **Arquivo:** `calculo_imposto_renda.js`
- **Descrição:** Implementa uma função que calcula o valor a ser pago de imposto de renda com base no salário bruto recebido. A função considera diferentes faixas salariais e aplica as alíquotas correspondentes, subtraindo a parcela a deduzir.

### Exercício 4: Cálculo do Salário Líquido - branch M2S01-Ex4

- **Arquivo:** `calculo_salario_liquido.js`
- **Descrição:** Implementa uma função que calcula o salário líquido, subtraindo do salário bruto os valores de INSS, imposto de renda e outros descontos.

### Exercício 5: Validação de CPF e Geração de Folha de Pagamento no Terminal - branch M2S01-Ex05

- **Arquivo:** `index.js`, `validaCPF.js`
- **Descrição:** Cria um programa que solicita informações do usuário (nome, CPF, mês de pagamento, salário bruto e outros descontos), valida o CPF e calcula o salário líquido. Exibe os resultados no terminal em formato de folha de pagamento.
- **Observação:** O cpf deve ser válido para ser aceito. Utilize o [4Dev](https://www.4devs.com.br/gerador_de_pessoas) para gerar um cpf válido.

### Exercício 6: Geração de PDF com Folha de Pagamento - branch M2S01-Ex06

- **Arquivo:** `index.js`
- **Descrição:** Estende o programa anterior para perguntar ao usuário se deseja gerar um PDF com a folha de pagamento. Se sim, gera um arquivo PDF com os detalhes da folha de pagamento e o salva em uma pasta chamada `folhas_pagamento`. A biblioteca utilizada para pdfs é a [pdfkit](https://pdfkit.org)

## Instalação

1. Clone o repositório:

```bash
 git clone https://github.com/FuturoDEV-Eco/folha-de-pagamento-charlesbiveu.git
```

2. entre no diretório e instale as dependencias:

```bash
   npm install
```

## Uso

Para executar o programa, use o comando:

```bash
   npm start
```

Siga as instruções no terminal para inserir as informações necessárias e, se desejar, gerar o PDF com a folha de pagamento.

## Tecnologias Utilizadas

- Node.js
- JavaScript
- [nodemon](https://nodemon.io/)
- [pdfkit](https://pdfkit.org/)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/LYZgbpcg)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15106467&assignment_repo_type=AssignmentRepo)
