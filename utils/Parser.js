export class Parser {
  static parse(text) {
    return text
      .toString()
      .split("\n")
      .map((val) => val.split(" "))
      .flat()
      .map((val) => val.split("\t"))
      .flat()
      .filter((val) => val);
  }
}
