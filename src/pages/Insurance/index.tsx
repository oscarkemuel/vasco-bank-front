import React, { useState } from "react";

export const Insurance = () => {
  const [selectedSection, setSelectedSection] = useState("aquisicao");

  const handleSectionChange = (section: React.SetStateAction<string>) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "aquisicao":
        return <AquisicaoSection />;
      case "pagamento":
        return <PagamentoSection />;
      case "sinistro":
        return <SinistroSection />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Seguros</h2>
      <ul>
        <li onClick={() => handleSectionChange("aquisicao")}>Aquisição</li>
        <li onClick={() => handleSectionChange("pagamento")}>Pagamento</li>
        <li onClick={() => handleSectionChange("sinistro")}>Sinistro</li>
      </ul>
      {renderSection()}
    </div>
  );
};

const AquisicaoSection = () => {
  return (
    <div>
      <h3>Aquisição</h3>
      {/* Conteúdo específico para a seção de Aquisição / Gestão */}
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

const SinistroSection = () => {
  return (
    <div>
      <h3>Sinistro</h3>
      {/* Conteúdo específico para a seção de Sinistro */}
    </div>
  );
};

