import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  ContaCorrente,
  Operacao,
} from "../../services/api/urls/currentAccount/types";
import { Link } from "react-router-dom";

export function CurrentAccount() {
  const [currentAccount, setCurrentAccout] = useState<ContaCorrente>(
    {} as ContaCorrente
  );

  const [balance, setBalance] = useState("");

  const [extract, setExtract] = useState<Operacao[]>([]);

  useEffect(() => {
    getCurrentAccount();
  }, []);

  const getCurrentAccount = () => {
    api.currentAccount.getContaCorrente("1").then((response) => {
      setCurrentAccout(response.data);
    });
  };

  const getBalance = () => {
    api.currentAccount.getSaldo("1").then((response) => {
      setBalance(response.data.valor);
    });
  };

  const getExtract = () => {
    api.currentAccount.getExtrato("1").then((response) => {
      setExtract(response.data);
    });
  };

  return (
    <div>
      {currentAccount.id && (
        <><Link to="/transfer">Pagamentos</Link><br /><br /></>
      )}

      <div>
        <h2>Conta:</h2>
        <p>Id: {currentAccount.id}</p>
        <p>Nome: {currentAccount.nome}</p>
        <p>Primeiro nome: {currentAccount.primeiroNome}</p>
        <p>Agência: {currentAccount.agencia}</p>
        <p>Número: {currentAccount.numero}</p>
        <p>Dígito: {currentAccount.digito}</p>
        <p>Número com dígito: {currentAccount.numeroComDigito}</p>
        <p>Data de nascimento: {currentAccount.dataNascimento}</p>
        <p>CPF: {currentAccount.cpf}</p>
        <p>Profissão: {currentAccount.profissao}</p>
        <p>
          Elegível para crédito:{" "}
          {currentAccount.elegivelCredito ? "Sim" : "Não"}
        </p>
        <p>Saldo: {currentAccount.saldo}</p>

        <br />
      </div>

      <h2>Saldo: {balance}</h2>
      <button
        onClick={getBalance}
        style={{
          backgroundColor: "#4CAF50",
        }}
      >
        Ver saldo
      </button>

      <br />
      <br />

      <h2>Meus Cheques:</h2>
      <div style={{ display: "flex", gap: "3rem" }}>
        {currentAccount.cheque?.map((cheque) => (
          <div
            key={cheque.id}
            style={{ backgroundColor: "#fdf472", padding: "1rem" }}
          >
            <p>Id: {cheque.id} </p>
            <p>Nome: {cheque.nome}</p>
            <p>Valor: {cheque.valor}</p>
            <p>Limite: {cheque.limite}</p>
            <p>Juros: {cheque.juros}</p>
            <p>Valor por extenso: {cheque.valorExtenso}</p>
            <p>Data atual: {cheque.dataAtual}</p>
            <p>Número: {cheque.numero}</p>
            <p>Série: {cheque.serie}</p>
            <p>Data de entrada: {cheque.dataEntrada}</p>
            <br />
          </div>
        ))}
      </div>

      <br />
      <br />

      <button
        onClick={getExtract}
        style={{
          backgroundColor: "#4CAF50",
        }}
      >
        Ver extrato
      </button>
      {extract?.length > 0 && <h2>Extrato:</h2>}
      <div style={{ display: "flex", gap: "3rem" }}>
        {extract?.map((operation) => (
          <div
            key={operation.id}
            style={{ backgroundColor: "#fdf472", padding: "1rem" }}
          >
            <p>Id: {operation.id}</p>
            <p>Valor: {operation.valor}</p>
            <p>Operacao: {operation.operacao}</p>
            <p>Data da Operacao: {operation.dataOperacao}</p>
          </div>
        ))}
      </div>
      
      <br />
      <br />
    </div>
  );
}
