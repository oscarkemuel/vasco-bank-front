/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class AccountAPI implements IRequestMethods {
  url = '/usuario/api';

  post(body: any){
    return axiosInstance.post(`${this.url}/usuarios`, body);
  }

  put(body: any){
    return axiosInstance.put(`${this.url}/usuarios`, body);
  }
}