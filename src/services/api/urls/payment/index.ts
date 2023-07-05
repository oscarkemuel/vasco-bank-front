/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequestMethods } from "../../requestMethods";
import axiosInstance from "../../axiosInstance";

export class PaymentAPI implements IRequestMethods {
  url = '/payment/api/v1';

  getBoleto(codigoBarras: number){
    return axiosInstance.get(`${this.url}/boleto/${codigoBarras}`);
  }

  postBoleto(body: any){
    return axiosInstance.post(`${this.url}/boleto/pagamento`, body);
  }

  postTransferenciaPix(body: any){
    return axiosInstance.post(`${this.url}/transferencia/pix`, body);
  }
}
