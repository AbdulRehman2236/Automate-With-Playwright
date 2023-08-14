import { uniqueNamesGenerator, languages, NumberDictionary } from "unique-names-generator";

export class NameStore {
  static getStringName() {
    const numberDictionary = NumberDictionary.generate({ min: 1, max: 1000 });
    const name: string = uniqueNamesGenerator({
      dictionaries: [languages, numberDictionary],
      separator: "",
    });
    return name;
  }
}
