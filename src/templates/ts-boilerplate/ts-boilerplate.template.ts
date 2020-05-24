import { injectable, inject } from "inversify";
import { DefaultTemplate } from "../default/default.template";
import { BoilerPlatePath } from "../../models/path";
import { FileName, TemplateName } from "../../models/file";
import { GitHubUrl } from "../../models/url";

@injectable()
export class TSBoilerPlate {
  private templateName = TemplateName.TS_BASE;
  private hasPath = true;
  private pathOfFile = BoilerPlatePath.BASE_TS_BOILERPLATE;
  private templateUrl = GitHubUrl.BASE_TS_URL;

  constructor(
    @inject("DefaultTemplate") private defaultTemplate: DefaultTemplate
  ) {}

  public generateFile(): void {
    this.defaultTemplate.generateFile(
      this.templateName,
      this.hasPath,
      this.pathOfFile,
      this.templateUrl
    );
  }
}
