export class Util {
  static deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  static isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }

  static isLetter(char) {
    return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
  }

  static isNumber(char) {
    if (!isNaN(char)) return true;
    return false;
  }

  static getLetterType(char) {
    if (this.isLetter(char)) {
      return "Alphabet";
    } else if (this.isNumber(char)) {
      return "Number";
    } else {
      return "Symbol";
    }
  }
}
