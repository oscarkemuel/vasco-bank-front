interface Investment {
  type: string;
  label: string;
  description: string;
  balance: number;
}

const investments: Investment[] = [
  {
    type: "tesouro-direto",
    label: "Tesouro Direto",
    description: "Investimento com lucro semestral",
    balance: 10000,
  },
  {
    type: "poupanca",
    label: "Poupança",
    description: "Investimento com incremento mensal",
    balance: 5000,
  },
];

export default investments;
