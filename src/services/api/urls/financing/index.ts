/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class FinancingAPI implements IRequestMethods {
  url = '/loan/real-state/v1';

  postSimulation(body: any){
    return axiosInstance.post(`${this.url}/simulation`, body);
  }

  postFinancing(body: any){
    return axiosInstance.post(`${this.url}/`, body);
  }

  postFinancialDeferment(body: any){
    return axiosInstance.post(`${this.url}/financial-deferment`, body);
  }

  getStatus(loanId: number){
    return axiosInstance.get(`${this.url}/status/${loanId}`);
  }

  postFee(body: any){
    return axiosInstance.post(`${this.url}/fee`, body);
  }
}
