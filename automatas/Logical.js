import Automata from "./Base.js";

export default class Logical extends Automata {
  constructor(_word) {
    super(_word);
  }

  start() {
    return this.q0(this.word);
  }

  q0(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "&") {
      if (newWord.length === 0) return false;
      return this.q1(newWord, currentSymbol);
    }

    if (currentSymbol === "|") {
      if (newWord.length === 0) return false;
      return this.q1(newWord, currentSymbol);
    }

    if (currentSymbol === "!") {
      if (newWord.length === 0) return currentSymbol;
    }

    return false;
  }
  q1(text, lastSymbol) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === lastSymbol && newWord.length === 0)
      return lastSymbol + currentSymbol + "";
  }
}
