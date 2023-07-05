/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class InvestmentAPI implements IRequestMethods {
  url = '/investment/api';

  getTesouroDireto(usuarioId: number, tituloId: number){
    return axiosInstance.get(`${this.url}/tesouro_direto/${usuarioId}/${tituloId}`);
  }

  postTesouroDireto(usuarioId: number, tituloId: number, body: any){
    return axiosInstance.post(`${this.url}/tesouro_direto/${usuarioId}/${tituloId}`, body);
  }

  postSacarInvestimento(usuarioId: number, tituloId: number, body: any){
    return axiosInstance.post(`${this.url}/tesouro_direto/${usuarioId}/${tituloId}/sacar`, body);
  }

  getTitulos(pageable: any){
    return axiosInstance.get(`${this.url}/tesouro_direto/titulos`, { params: pageable });
  }

  postTitulo(body: any){
    return axiosInstance.post(`${this.url}/tesouro_direto/titulos`, body);
  }

  getPoupanca(id: number){
    return axiosInstance.get(`${this.url}/poupanca/${id}`);
  }

  postPoupanca(body: any){
    return axiosInstance.post(`${this.url}/poupanca`, body);
  }

  patchRetirarMontante(id: number, body: any){
    return axiosInstance.patch(`${this.url}/poupanca/${id}/retirar`, body);
  }

  patchAdicionarMontante(id: number, body: any){
    return axiosInstance.patch(`${this.url}/poupanca/${id}/adicionar_montante`, body);
  }

  getTitulo(id: number){
    return axiosInstance.get(`${this.url}/tesouro_direto/titulos/${id}`);
  }
}
