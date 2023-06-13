interface Insurance {
    type: string;
    label: string;
    description: string;
    premium: number;
  }
  
  export const insurances: Insurance[] = [
    {
      type: "seguro-auto",
      label: "Seguro Auto",
      description: "Seguro para veículos",
      premium: 500,
    },
    {
      type: "seguro-residencial",
      label: "Seguro Residencial",
      description: "Seguro para residências",
      premium: 300,
    },
  ];