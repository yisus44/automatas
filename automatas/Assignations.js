import Automata from "./Base.js";

export default class Assignations extends Automata {
  constructor(_word) {
    super(_word);
  }

  start() {
    return this.q0(this.word);
  }

  q0(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "=") {
      if (newWord.length === 0) return true;
    }

    return false;
  }
}
