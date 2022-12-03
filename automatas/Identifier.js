import { Util } from "../utils/Util.js";
import Automata from "./Base.js";

export default class Identifier extends Automata {
  constructor(_word) {
    super(_word);
  }

  start() {
    return this.q0(this.word);
  }

  q0(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);

    if (Util.isLetter(currentSymbol)) {
      if (newWord.length === 0) return true;
      return this.q2(newWord);
    }

    return false;
  }

  q2(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (
      currentSymbol === "_" ||
      Util.isLetter(currentSymbol) ||
      Util.isNumber(currentSymbol)
    ) {
      if (
        currentSymbol === "_" ||
        (newWord.length === 0 && Util.isLetter(currentSymbol))
      )
        return true;
      return this.q2(newWord);
    }
    return false;
  }
}
