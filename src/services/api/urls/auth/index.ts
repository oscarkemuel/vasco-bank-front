import axiosInstance from "../../axiosInstance";
import { IRequestMethods } from "../../requestMethods";
import { IPostLogin, IPostLoginResponse } from "./types";

export class AuthAPI implements IRequestMethods {
  url = '/autenticacao/autenticacao'

  login(data: IPostLogin) {
    return axiosInstance.post<IPostLoginResponse>(`${this.url}/autenticar`, {
      email: data.email,
      senha: data.password
    })
  }

  getMe() {
    return axiosInstance.get(`${this.url}/quemsoueu`)
  }
}