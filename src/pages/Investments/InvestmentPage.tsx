import React, { useState } from "react";
import data from "../../mock/investments";
import investments from "../../mock/investments";

const calculateTesouroDiretoProfit = (balance: number) => {
   
  const profitPercentage = 0.05;
  const profit = balance * profitPercentage;

  return profit;
};

const calculatePoupancaProfit = (balance: number) => {
  
  const profitPercentage = 0.005;
  const profit = balance * profitPercentage;

  return profit;
};

const InvestmentPage = () => {
  const [selectedInvestment, setSelectedInvestment] = useState("");
  const [investmentHistory, setInvestmentHistory] = useState([]);
  const [investmentAmount, setInvestmentAmount] = useState(0);

  const handleInvestment = () => {
    const investment = investments.find((item) => item.type === selectedInvestment);

    if (investment) {
      if (investmentAmount <= investment.balance) {
        // Lógica para realizar o investimento
        let newBalance = investment.balance - investmentAmount;
        let profit = 0;

        if (selectedInvestment === "tesouro-direto") {
          // Lógica para investimento em Tesouro Direto
          profit = calculateTesouroDiretoProfit(investmentAmount);
        } else if (selectedInvestment === "poupanca") {
          // Lógica para investimento em Poupança
          profit = calculatePoupancaProfit(investmentAmount);
        }

        // Atualiza o saldo do investimento
        investment.balance = newBalance;

        // Cria um novo registro de investimento no histórico
        const newInvestment = {
          type: selectedInvestment,
          profit: profit,
        };

        // Atualiza o histórico de investimentos
        setInvestmentHistory((prevHistory) => [...prevHistory, newInvestment]);

        // Lógica adicional, se necessário, como atualizar o saldo da conta corrente, exibir notificações, etc.

        // Exibe um alerta para demonstração
        alert(`Investment successful!`);
      } else {
        alert("Valor do investimento é maior que o saldo da conta corrente.");
      }
    }
  };

  return (
    <div>
      <h2>Realizar Investimento</h2>
      <div>
        <button onClick={() => handleInvestment("tesouro-direto")}>
          Tesouro Direto
        </button>
        <button onClick={() => handleInvestment("poupanca")}>Poupança</button>
      </div>

      <h2>Histórico de Investimentos</h2>
      <ul>
        {investmentHistory.map((investment, index) => (
          <li key={index}>
            Investimento: {investment.type}, Rendimento: R$ {investment.profit}
          </li>
        ))}
      </ul>
    </div>
  );
};
 
  export default InvestmentPage;
