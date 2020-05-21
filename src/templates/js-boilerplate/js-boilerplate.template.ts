import { injectable, inject } from "inversify";
import { DefaultTemplate } from "../default/default.template";
import { BoilerPlatePath } from "../../models/path";
import { FileName } from "../../models/file";

@injectable()
export class JsBoilerPlate {
  private fileName = FileName.JS_BASE;
  private hasPath = true;
  private pathOfFile = BoilerPlatePath.BASE_JS_BOILERPLATE;

  constructor(
    @inject("DefaultTemplate") private defaultTemplate: DefaultTemplate
  ) {}

  public generateFile(): void {
    this.defaultTemplate.generateFile(
      this.fileName,
      this.fileContent(),
      this.hasPath,
      this.pathOfFile
    );
  }

  private fileContent(): string {
    return `* **Please check if the BoilerPlate fulfills these requirements**`;
  }
}
