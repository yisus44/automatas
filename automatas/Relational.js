import Automata from "./Base.js";

export default class Relational extends Automata {
  constructor(_word) {
    super(_word);
  }

  start() {
    return this.q0(this.word);
  }

  q0(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "<" || currentSymbol === ">") {
      if (newWord.length === 0) return currentSymbol;
      return this.q1(newWord, currentSymbol);
    }

    if (currentSymbol === "!" || currentSymbol === "=") {
      return this.q1(newWord, currentSymbol);
    }

    return false;
  }
  q1(text, lastSymbol) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "=" && newWord.length === 0)
      return lastSymbol + currentSymbol + "";
  }
}
