export interface ContaCorrente {
  id: number;
  nome: string;
  primeiroNome: string;
  agencia: string;
  numero: string;
  digito: string;
  numeroComDigito: string;
  dataNascimento: string;
  cpf: string;
  profissao: string;
  elegivelCredito: boolean;
  saldo: number;
  cheque: Cheque[];
}

export interface Cheque {
  id: number;
  valor: number;
  limite: number;
  juros: number;
  valorExtenso: string;
  dataAtual: string;
  nome: string;
  numero: string;
  serie: string;
  dataEntrada: string;
}

export interface Saldo {
  valor: string;
}

export interface Cheque {
  id: number;
  valor: number;
  limite: number;
  juros: number;
  valorExtenso: string;
  dataAtual: string;
  nome: string;
  numero: string;
  serie: string;
  dataEntrada: string;
}

export interface ChequeLimite {
  valor: string;
}

export interface ChequeJuros {
  valor: string;
}

export interface Operacao {
  id: number;
  valor: number;
  dataOperacao: string;
  operacao: "PIX" | "BOLETO" | "INTRABANCO" | "PAGCARTAO";
}