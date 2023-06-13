import React, { useState } from "react";

export const Financing = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [propertyValue, setPropertyValue] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const handleLoanRequest = () => {
    // Verificar se o valor do empréstimo é válido
    if (loanAmount <= 0) {
      alert("Informe um valor de empréstimo válido.");
      return;
    }

    // Verificar se o valor do imóvel é válido
    if (propertyValue <= 0) {
      alert("Informe um valor de imóvel válido.");
      return;
    }

    // Verificar se o prazo do empréstimo é válido
    if (loanTerm <= 0) {
      alert("Informe um prazo de empréstimo válido.");
      return;
    }

    // Realizar o processamento da solicitação de empréstimo ou financiamento
    // Aqui você pode adicionar a lógica de acordo com os requisitos do seu sistema
    // Por exemplo, realizar cálculos, fazer requisições a uma API, etc.

    // Exemplo de como usar os valores dos campos
    console.log("Loan Amount:", loanAmount);
    console.log("Property Value:", propertyValue);
    console.log("Loan Term:", loanTerm);

    // Limpar os campos após a solicitação ser processada
    setLoanAmount(0);
    setPropertyValue(0);
    setLoanTerm(0);

    // Exibir uma mensagem de sucesso ou redirecionar para outra página
    alert("Solicitação de empréstimo enviada com sucesso!");
  };

  return (
    <div>
      <h2>Solicitar Empréstimo ou Financiamento</h2>
      <div>
        <label>Valor do Empréstimo:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Valor do Imóvel:</label>
        <input
          type="number"
          value={propertyValue}
          onChange={(e) => setPropertyValue(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Prazo do Empréstimo (em meses):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        />
      </div>
      <button onClick={handleLoanRequest}>Solicitar</button>
    </div>
  );
};
