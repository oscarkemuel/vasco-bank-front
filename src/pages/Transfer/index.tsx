import { useState, ChangeEvent, FormEvent } from "react";

interface TransferData {
  selectedType: string;
  pixKey: string;
  value: number;
}

export function Transfer() {
  const transferTypes = [
    {
      value: "",
      label: "Selecione um tipo de transferência",
    },
    {
      value: "pix",
      label: "PIX",
    },
    {
      value: "boleto",
      label: "Boleto",
    },
    {
      value: "intrabanco",
      label: "Intrabanco",
    },
  ];

  const [transferData, setTransferData] = useState<TransferData>({
    selectedType: "",
    pixKey: "",
    value: 0,
  });

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setTransferData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Aqui você pode realizar a lógica de transferência com os dados coletados.
    console.log("Dados da transferência:", transferData);
    // ...restante da lógica de transferência...
  };

  return (
    <div>
      <h1>Pagamento</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="transferType">Tipo de transferência</label>
        <select
          name="selectedType"
          id="transferType"
          value={transferData.selectedType}
          onChange={handleChange}
        >
          {transferTypes.map((transferType) => (
            <option key={transferType.value} value={transferType.value}>
              {transferType.label}
            </option>
          ))}
        </select>
        {transferData.selectedType === "pix" && (
          <div>
            <label htmlFor="pixKey">Chave PIX</label>
            <input
              type="text"
              name="pixKey"
              id="pixKey"
              value={transferData.pixKey}
              onChange={handleChange}
            />
          </div>
        )}
        {transferData.selectedType === "boleto" && (
          <div>
            <label htmlFor="barcode">Código de barras</label>
            <input
              type="text"
              name="pixKey" // Aqui era "barcode", mas para fins de reutilização do estado, mantive o mesmo nome "pixKey"
              id="barcode"
              value={transferData.pixKey}
              onChange={handleChange}
            />
          </div>
        )}
        {transferData.selectedType === "intrabanco" && (
          <div>
            <label htmlFor="account">Conta</label>
            <input
              type="text"
              name="pixKey" // Aqui era "account", mas para fins de reutilização do estado, mantive o mesmo nome "pixKey"
              id="account"
              value={transferData.pixKey}
              onChange={handleChange}
            />
          </div>
        )}
        <br />

        <label htmlFor="value">Valor</label>
        <input
          type="number"
          name="value"
          id="value"
          value={transferData.value}
          onChange={handleChange}
        />

        <br />

        <button
          type="submit"
          style={{ backgroundColor: "#4CAF50" }}
          disabled={!transferData.selectedType || !transferData.value}
        >
          Transferir
        </button>
      </form>
    </div>
  );
}
