import Automata from "./Base.js";

export default class Arithmetic extends Automata {
  constructor(_word) {
    super(_word);
  }

  start() {
    return this.q0(this.word);
  }

  q0(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (
      currentSymbol === "-" ||
      currentSymbol === "+" ||
      currentSymbol === "*" ||
      currentSymbol === "/" ||
      currentSymbol === "%"
    ) {
      if (newWord.length === 0) return currentSymbol;
    }

    return false;
  }
}
