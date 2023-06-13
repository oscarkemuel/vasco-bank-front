interface Financing {
    type: string;
    label: string;
    description: string;
    interestRate: number;
  }
  
  export const financings: Financing[] = [
    {
      type: "emprestimo-pessoal",
      label: "Empréstimo Pessoal",
      description: "Financiamento pessoal",
      interestRate: 10,
    },
    {
      type: "financiamento-imobiliario",
      label: "Financiamento Imobiliário",
      description: "Financiamento para imóveis",
      interestRate: 6,
    },
  ];