/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class LoanAPI implements IRequestMethods {
  url = '/loan/v1';

  getSimulation(params: any){
    return axiosInstance.get(`${this.url}/simulation`, { params });
  }

  postPayroll(body: any){
    return axiosInstance.post(`${this.url}/payroll`, body);
  }

  putPayroll(body: any){
    return axiosInstance.put(`${this.url}/payroll`, body);
  }

  getRequestDetail(accountId: number){
    return axiosInstance.get(`${this.url}/request-detail/${accountId}`);
  }

  postFee(body: any){
    return axiosInstance.post(`${this.url}/fee`, body);
  }

  putFee(body: any){
    return axiosInstance.put(`${this.url}/fee`, body);
  }
}
