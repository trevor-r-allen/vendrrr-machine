import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

function draw(){
console.log("test from snacks controller draw function")
let chocoCoco = ProxyState.chocoCoco
let genshinGummies = ProxyState.genshinGummies
let cyberSours = ProxyState.cyberSours
let pureGlucose = ProxyState.pureGlucose
document.getElementById("choco-coco").innerHTML = `<img src="${chocoCoco.snackPic}" alt="">
<h5>${chocoCoco.name}</h5>
<h6>${chocoCoco.stock} left</h6>
<button type="button" class="btn btn-primary" onclick="app.snacksController.buySnack('chocoCoco')">BUY!</button>`
document.getElementById("genshin-gummies").innerHTML = `<img src="${genshinGummies.snackPic}" alt="">
<h5>${genshinGummies.name}</h5>
<h6>${genshinGummies.stock} left</h6>
<button type="button" class="btn btn-primary" onclick="app.snacksController.buySnack('genshinGummies')">BUY!</button>`
document.getElementById("cyber-sours").innerHTML = `<img src="${cyberSours.snackPic}" alt="">
<h5>${cyberSours.name}</h5>
<h6>${cyberSours.stock} left</h6>
<button type="button" class="btn btn-primary" onclick="app.snacksController.buySnack('cyberSours')">BUY!</button>`
document.getElementById("pure-glucose").innerHTML = `<img src="${pureGlucose.snackPic}" alt="">
<h5>${pureGlucose.name}</h5>
<h6>${pureGlucose.stock} left</h6>
<button type="button" class="btn btn-primary" onclick="app.snacksController.buySnack('pureGlucose')">BUY!</button>`
}


export default class SnacksController {
  constructor(){
      console.log("test from snacks controller")
      ProxyState.on("chocoCoco", draw)
      ProxyState.on("genshinGummies", draw)
      ProxyState.on("cyberSours", draw)
      ProxyState.on("pureGlucose", draw)
      draw()
      
  }
  buySnack(snackName){
    console.log("buying snack")
    snackService.buySnack(snackName)
  }
}