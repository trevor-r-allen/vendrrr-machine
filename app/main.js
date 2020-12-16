import ValuesController from "./Controllers/ValuesController.js";
import SnacksController from "./Controllers/SnacksController.js";
import CreditsController from "./Controllers/CreditsController.js";


class App {
  valuesController = new ValuesController();
  snacksController = new SnacksController();
  creditsController = new CreditsController();
}

window["app"] = new App();
