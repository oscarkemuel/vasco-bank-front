import { AuthAPI } from "./urls/auth";
import { CurrentAccountAPI } from "./urls/currentAccount";
import { InsuranceAPI } from "./urls/insurance";
import { LoanAPI } from "./urls/loan";
import { FinancingAPI } from "./urls/financing";
import { CardAPI } from "./urls/card";
import { AccountAPI } from "./urls/account";
import { InvestmentAPI } from "./urls/investment";
import { PaymentAPI } from "./urls/payment";

export const api = {
  account: new AccountAPI(),
  auth: new AuthAPI(),
  card: new CardAPI(),
  currentAccount: new CurrentAccountAPI(),
  financing: new FinancingAPI(),
  insurance: new InsuranceAPI(),
  investment: new InvestmentAPI(),
  loan: new LoanAPI(),
  payment: new PaymentAPI()
}

export default api;
