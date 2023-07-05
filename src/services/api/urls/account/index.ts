/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class AccountAPI implements IRequestMethods {
  url = '/account';

  post(body: any){
    return axiosInstance.post(`${this.url}/api/usuarios`, body);
  }

  put(body: any){
    return axiosInstance.put(`${this.url}/api/usuarios`, body);
  }
}