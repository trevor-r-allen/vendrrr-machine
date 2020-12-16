import { ProxyState } from "../AppState.js";
import { creditService } from "../Services/CreditService.js"


function draw(){
  console.log("draw from CreditsController")
  let credit = ProxyState.credit
  document.getElementById("credit-total").innerHTML = /*html*/`<h4>You have ${credit.total} credits</h4>`
}


export default class CreditsController {
  constructor(){
    console.log("constructor for CreditsController export")
    ProxyState.on("credit", draw)
    draw()
  }

   addCredit(){
    console.log("adding credit")
    creditService.addCredit()
  }
}