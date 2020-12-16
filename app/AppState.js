import Credit from "./Models/Credit.js"
import Snack from "./Models/Snack.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {Credit} */
  credit = new Credit

  /** @type {Snack} */
  chocoCoco = new Snack ("Choco Coco", 1, 20, "assets\\img\\chocoCoco.jpg")
  
   /** @type {Snack} */
  genshinGummies = new Snack ("Genshin Gummies", 1, 20, "assets\\img\\genshinGummies.jpg")

   /** @type {Snack} */
  cyberSours = new Snack ("Cyber Sours", 1.50, 20, "assets\\img\\cyberSours.jpg")
  
   /** @type {Snack} */
  pureGlucose = new Snack ("Pure Glucose", 2, 20, "assets\\img\\pureGlucose.jpg")

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
