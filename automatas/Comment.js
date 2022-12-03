import Automata from "./Base.js";

export default class Comment extends Automata {
  constructor(_word) {
    super(_word);
  }

  start() {
    return this.q0(this.word);
  }

  q0(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "/") return this.q1(newWord);
    return false;
  }

  q1(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "*") return this.q2(newWord);
    return false;
  }

  q2(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "*") return this.q3(newWord);
    else return this.q2(newWord);
  }

  q3(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (currentSymbol === "*") return this.q2(newWord);
    if (currentSymbol === "/") return true;
    return false;
  }
}
