import axiosInstance from "../../axiosInstance";
import { IRequestMethods } from "../../requestMethods";

import { Operacao } from "./types";
import { ChequeJuros } from "./types";
import { ChequeLimite } from "./types";
import { Cheque } from "./types";
import { ContaCorrente, Saldo } from "./types";

export class CurrentAccountAPI implements IRequestMethods {
  url = '/contaCorrente'

  getContaCorrente = async (userId = '') => {
    return axiosInstance.get<ContaCorrente>(`${this.url}/${userId}`)
  }

  getSaldo = async (idConta = '') => {
    return axiosInstance.get<Saldo>(`${this.url}/saldo/${idConta}`)
  }

  getCheque = async (idConta = '', idCheque = '') => {
    return axiosInstance.get<Cheque>(`${this.url}/cheque/${idConta}/${idCheque}`)
  }

  getChequeLimite = async (idConta = '', idCheque = '') => {
    return axiosInstance.get<ChequeLimite>(`${this.url}/cheque/${idConta}/${idCheque}/limite`)
  }

  getChequeJuros = async (idConta = '', idCheque = '') => {
    return axiosInstance.get<ChequeJuros>(`${this.url}/cheque/${idConta}/${idCheque}/juros`)
  }

  getExtrato = async (idConta = '') => {
    return axiosInstance.get<Operacao[]>(`${this.url}/extrato/${idConta}`)
  }
}