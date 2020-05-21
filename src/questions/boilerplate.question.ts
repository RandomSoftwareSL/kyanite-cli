import inquirer from "inquirer";

import { Answer, BoilerPlateValue, Choice } from "../models/choice";

export async function boilerplateQuestion(): Promise<Answer> {
  const listOfBoilerPlates: Choice[] = [
    { name: "JavaScript", value: BoilerPlateValue.JS },
    { name: "TypeScript", value: BoilerPlateValue.TS },
  ];

  return inquirer.prompt([
    {
      name: "boilerplate",
      type: "list",
      message: "Select a boilerplate type:",
      choices: listOfBoilerPlates,
    },
  ]);
}
