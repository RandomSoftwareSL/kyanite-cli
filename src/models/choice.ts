export interface Answer {
  boilerplate: BoilerPlateValue;
  overwrite: boolean;
}

export interface Choice {
  name: string;
  value: BoilerPlateValue;
}

export enum BoilerPlateValue {
  JS = "JavaScript",
  TS = "TypeScript",
}
