import React, { useState } from "react";

export const CreditCard = () => {
  const [selectedSection, setSelectedSection] = useState("aquisicao");

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "aquisicao":
        return <AquisicaoSection />;
      case "limite":
        return <LimiteSection />;
      case "extrato":
        return <ExtratoSection />;
      case "pagamento":
        return <PagamentoSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Cartão de Crédito</h2>
      <ul>
        <li onClick={() => handleSectionChange("aquisicao")}>Aquisição</li>
        <li onClick={() => handleSectionChange("limite")}>Limite</li>
        <li onClick={() => handleSectionChange("extrato")}>Extrato</li>
        <li onClick={() => handleSectionChange("pagamento")}>Pagamento</li>
      </ul>
      {renderSection()}
    </div>
  );
};

const AquisicaoSection = () => {
  return (
    <div>
      <h3>Aquisição</h3>
      {/* Conteúdo específico para a seção de Aquisição */}
    </div>
  );
};

const LimiteSection = () => {
  return (
    <div>
      <h3>Limite</h3>
      {/* Conteúdo específico para a seção de Limite */}
    </div>
  );
};

const ExtratoSection = () => {
  return (
    <div>
      <h3>Extrato</h3>
      {/* Conteúdo específico para a seção de Extrato */}
    </div>
  );
};

const PagamentoSection = () => {
  return (
    <div>
      <h3>Pagamento</h3>
      {/* Conteúdo específico para a seção de Pagamento */}
    </div>
  );
};
