/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class CardAPI implements IRequestMethods {
  url = '/cartaoCredito';

  getAllCards(accountId: number){
    return axiosInstance.get(`${this.url}/all/${accountId}`);
  }

  getCard(cardId: number){
    return axiosInstance.get(`${this.url}/${cardId}`);
  }

  deleteCard(cardId: number){
    return axiosInstance.delete(`${this.url}/${cardId}`);
  }

  postCard(userId: number, body: any){
    return axiosInstance.post(`${this.url}/${userId}`, body);
  }

  getCardLimit(cardId: number){
    return axiosInstance.get(`${this.url}/limite/${cardId}`);
  }

  requestLimitIncrease(body: any){
    return axiosInstance.put(`${this.url}/solicitarAumentoLimite`, body);
  }

  updateLimitEligibility(body: any){
    return axiosInstance.put(`${this.url}/atualizarEligivelAumentoLimite`, body);
  }

  getCardInvoice(accountId: number, cardId: number){
    return axiosInstance.get(`${this.url}/${accountId}/${cardId}/fatura/`);
  }

  getInvoices(cardId: number){
    return axiosInstance.get(`/fatura/${cardId}`);
  }

  postInvoice(cardId: number, body: any){
    return axiosInstance.post(`/fatura/${cardId}`, body);
  }

  postPurchase(cardId: number, body: any){
    return axiosInstance.post(`/compra/${cardId}`, body);
  }

  getPurchases(cardId: number){
    return axiosInstance.get(`/compra/${cardId}`);
  }
}
