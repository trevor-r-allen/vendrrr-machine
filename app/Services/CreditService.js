import { ProxyState } from "../AppState.js";


class CreditService {
  addCredit() {
    let credit = ProxyState.credit
    credit.total += .25
    ProxyState.credit = credit
  }
  constructor(){
    console.log("creditService constructor")
  }

}

export const creditService = new CreditService()