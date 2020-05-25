import { injectable, inject } from "inversify";
import { Logger } from "./utils/logger.util";
import { TSBoilerPlate } from "./templates/ts-boilerplate";
import { Answer, BoilerPlateValue } from "./models/choice";
import { boilerplateQuestion } from "./questions";
import { ConsoleMessage } from "./models/console-message";

@injectable()
export class KYANITE {
  constructor(
    @inject("Logger") private logger: Logger,
    @inject("TSBoilerPlate") private tsBoilerPlate: TSBoilerPlate
  ) {
    this.logger.showTitleAndBanner();
    this.executeCGX();
  }

  public async executeCGX(): Promise<any> {
    let boilerPlateAnswer: Answer = await boilerplateQuestion();

    if (boilerPlateAnswer.boilerplate === BoilerPlateValue.JS) {
      this.logger.showInfo("Not Implemented Yet 🙊");
      return;
    }

    if (boilerPlateAnswer.boilerplate === BoilerPlateValue.TS) {
      return this.tsBoilerPlateActions();
    }
  }

  private async tsBoilerPlateActions() {
    this.tsBoilerPlate.generateTemplate();
  }
}
