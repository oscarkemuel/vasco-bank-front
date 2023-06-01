interface CreditCard {
    type: string;
    label: string;
    description: string;
    creditLimit: number;
    annualFee: number;
  }
  
  export const creditCards: CreditCard[] = [
    {
      type: "visa",
      label: "Visa",
      description: "Cartão de crédito Visa",
      creditLimit: 5000,
      annualFee: 50,
    },
  ];
  