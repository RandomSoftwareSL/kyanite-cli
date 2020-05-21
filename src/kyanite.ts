import { injectable, inject } from "inversify";
import { Logger } from "./utils/logger.util";
import { JsBoilerPlate } from "./templates/js-boilerplate";
import { Answer, BoilerPlateValue } from "./models/choice";
import { boilerplateQuestion } from "./questions";
import { ConsoleMessage } from "./models/console-message";

@injectable()
export class KYANITE {
  constructor(
    @inject("Logger") private logger: Logger,
    @inject("JsBoilerPlate") private jsBoilerPlate: JsBoilerPlate
  ) {
    this.logger.showTitleAndBanner();
    this.executeCGX();
  }

  public async executeCGX(): Promise<any> {
    let boilerPlateAnswer: Answer = await boilerplateQuestion();

    if (boilerPlateAnswer.boilerplate === BoilerPlateValue.JS) {
      return this.jsBoilerPlateActions();
    }
  }

  private async jsBoilerPlateActions() {
    this.jsBoilerPlate.generateFile();
  }
}
