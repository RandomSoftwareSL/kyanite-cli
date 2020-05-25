import "reflect-metadata";
import { Container } from "inversify";
import { KYANITE } from "./kyanite";
import { Logger } from "./utils/logger.util";
import { DefaultTemplate } from "./templates/default/default.template";
import { TSBoilerPlate } from "./templates/ts-boilerplate/ts-boilerplate.template";
import { Checker } from "./utils/checker.util";

export function index(): KYANITE {
  const container: Container = new Container();

  // Utils
  container.bind<Logger>("Logger").to(Logger).inSingletonScope();
  container.bind<Checker>("Checker").to(Checker).inSingletonScope();

  // Default Template
  container
    .bind<DefaultTemplate>("DefaultTemplate")
    .to(DefaultTemplate)
    .inSingletonScope();

  // BoilerPlate Templates (JS and TS)
  container
    .bind<TSBoilerPlate>("TSBoilerPlate")
    .to(TSBoilerPlate)
    .inSingletonScope();

  // KYANITE
  container.bind<KYANITE>("KYANITE").to(KYANITE).inSingletonScope();

  return container.get<KYANITE>("KYANITE");
}

index();
