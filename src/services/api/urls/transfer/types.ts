export interface PagamentoPix {
  chavePixAlvo: string;
  valor:        number;
  data:         string;
}

export interface PagamentoBoleto {
  valor:          number;
  contaAlvo:      string;
  contaOrigem:    string;
  dataEmissao:    string;
  dataVencimento: string;
  xml:            string;
}

export interface PagamentoIntrabanco {
  valorTransferencia: number;
  contaAlvo:          string;
  contaOrigem:        string;
  idBanco:            string;
  taxa:               number;
  xml:                string;
}