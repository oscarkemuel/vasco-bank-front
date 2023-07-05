/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class InsuranceAPI implements IRequestMethods {
  url = '/insurance/cellphone/v1';

  postSimulation(body: any){
    return axiosInstance.post(`${this.url}/simulation`, body);
  }

  postBuy(body: any){
    return axiosInstance.post(`${this.url}/buy`, body);
  }

  getBrands(){
    return axiosInstance.get(`${this.url}/brands`);
  }

  getModels(){
    return axiosInstance.get(`${this.url}/models`);
  }

  postCancel(body: any){
    return axiosInstance.post(`${this.url}/cancel`, body);
  }

  postClaim(body: any){
    return axiosInstance.post(`${this.url}/claim`, body);
  }

  postInsurance(body: any){
    return axiosInstance.post(`${this.url}/insurance`, body);
  }
}
