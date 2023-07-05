import { Router } from 'express';

const currentAccountService = Router();

currentAccountService.get('/:userId', (_, res) => {
  const account = {
    id: 10,
    nome: "John pascal",
    primeiroNome: "John",
    agencia: "1232",
    numero: "23232",
    digito: "3",
    numeroComDigito: "23232-3",
    dataNascimento: new Date(),
    cpf: "999.999.999-99",
    profissao: "Desenvolvedor",
    elegivelCredito: false,
    saldo: 0,
    cheque: [
      {
        id: 10,
        valor: 1000,
        limite: 1000,
        juros: 1000,
        valorExtenso: "mil reais",
        dataAtual: new Date(),
        nome: "john",
        numero: "123123",
        serie: "123123",
        dataEntrada: new Date()
      },
      {
        id: 11,
        valor: 1000,
        limite: 1000,
        juros: 1000,
        valorExtenso: "mil reais",
        dataAtual: new Date(),
        nome: "john",
        numero: "123123",
        serie: "123123",
        dataEntrada: new Date()
      }
    ]
  }

  res.status(200).json(account);
})

currentAccountService.get('/saldo/:idConta', (_, res) => {
  const balance = {
    valor: 10
  }

  res.status(200).json(balance);
})

currentAccountService.get('/cheque/all/:idConta', (_, res) => {
  const check = {
    id: 10,
    valor: 1000,
    limite: 1000,
    juros: 1000,
    valorExtenso: "mil reais",
    dataAtual: new Date(),
    nome: "john",
    numero: "123123",
    serie: "123123",
    dataEntrada: new Date()
  }
  
  const checks = [check, check]

  res.status(200).json(checks);
})

currentAccountService.get('/cheque/:idConta/:idCheque', (_, res) => {
  const check = {
    id: 10,
    valor: 1000,
    limite: 1000,
    juros: 1000,
    valorExtenso: "mil reais",
    dataAtual: new Date(),
    nome: "john",
    numero: "123123",
    serie: "123123",
    dataEntrada: new Date()
  }

  res.status(200).json(check);
})

currentAccountService.get('/cheque/:idConta/:idCheque/limite', (_, res) => {
  const limit = {
    valor: 10
  }

  res.status(200).json(limit);
})

currentAccountService.get('/cheque/:idConta/:idCheque/juros', (_, res) => {
  const fees = {
    valor: 10
  }

  res.status(200).json(fees);
})

currentAccountService.get('/extrato/:idConta', (_, res) => {
  const operation = {
    id: 10,
    dataOperacao: new Date(),
    operacao: "PIX",
    valor: 10.55
  }

  const operations = [operation, { ...operation, operacao: 'PAGCARTAO'}]

  res.status(200).json(operations);
})

export { currentAccountService }