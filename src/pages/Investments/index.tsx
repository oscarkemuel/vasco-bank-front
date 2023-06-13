import React, { useState } from "react";
import {investments} from "../../mock/investments";

const calculateTesouroDiretoPerformance = (balance: number) => {
   
  const performancePercentage = 0.05;
  const performance = balance * performancePercentage;

  return performance;
};

const calculatePoupancaPerformance = (balance: number) => {
  
  const performancePercentage = 0.005;
  const performance = balance * performancePercentage;

  return performance;
};

export const Investments = () => {
  const [selectedInvestment, setSelectedInvestment] = useState("");
  const [investmentHistory, setInvestmentHistory] = useState([]);
  const [investmentAmount, setInvestmentAmount] = useState(0);

  const handleInvestment = () => {
    const investment = investments.find((item) => item.type === selectedInvestment);

    if (investment) {
      if (investmentAmount <= investment.balance) {
        
        const newBalance = investment.balance - investmentAmount;
        let performance = 0;

        if (selectedInvestment === "tesouro-direto") {
          
          performance = calculateTesouroDiretoPerformance(investmentAmount);

        } else if (selectedInvestment === "poupanca") {
          
          performance = calculatePoupancaPerformance(investmentAmount);

        }

        investment.balance = newBalance;

        const newInvestment = {
          type: selectedInvestment,
          performance: performance,
        };

        // setInvestmentHistory((prevHistory) => [...prevHistory, newInvestment]);

        alert(`Investimento feito com sucesso!`);
      } else {
        alert("Valor do investimento é maior que o saldo da conta corrente.");
      }
    }
  };

  return (
    <div>
      <h2>Realizar Investimento</h2>
      <div>
        <label>Tipo de Investimento:</label>
        <select
          value={selectedInvestment}
          onChange={(e) => {
            setSelectedInvestment(e.target.value);
            handleInvestment(); 
          }}
        >
          <option value="">Selecione...</option>
          <option value="tesouro-direto">Tesouro Direto</option>
          <option value="poupanca">Poupança</option>
        </select>
      </div>

      <h2>Histórico de Investimentos</h2>
      <ul>
        {investmentHistory.map((investment, index) => (
          <li key={index}>
            {/* Investimento: {setInvestmentAmount}, Rendimento: R$ {investment.performance} */}
          </li>
        ))}
      </ul>
    </div>
  );
};
 
