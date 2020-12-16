import { ProxyState } from "../AppState.js";
import { creditService } from "./CreditService.js";

class SnackService{
constructor(){

}
buySnack(snackName){
  console.log("buySnack from SnackService")
  let snack = ProxyState[snackName]
  let credit = ProxyState.credit
  if (snack.price <= credit.total && snack.stock > 0){
  snack.stock -= 1
  credit.total -= snack.price
}
ProxyState[snackName] = snack
ProxyState.credit = credit
}
}

// let cocoChoco = ProxyState.chocoCoco
// let genshinGummies = ProxyState.genshinGummies
// let cyberSours = ProxyState.cyberSours
// let pureGlucose = ProxyState.pureGlucose

export const snackService = new SnackService