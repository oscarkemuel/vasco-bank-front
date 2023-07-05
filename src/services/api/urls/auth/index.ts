import axiosInstance from "../../axiosInstance";
import { IRequestMethods } from "../../requestMethods";
import { IPostLogin, IPostLoginResponse } from "./types";

export class AuthAPI implements IRequestMethods {
  url = '/auth'

  login(data: IPostLogin) {
    // return axiosInstance.post<IPostLoginResponse>(`${this.url}/autenticar`, data)
    return axiosInstance.post<IPostLoginResponse>(`${this.url}/login`, data)
  }
}