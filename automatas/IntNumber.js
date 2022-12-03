import { Util } from "../utils/Util.js";
import Automata from "./Base.js";

export default class IntNumber extends Automata {
  constructor(_word) {
    super(_word);
  }

  start() {
    return this.q0(this.word);
  }

  q0(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);

    if (Util.isNumber(currentSymbol)) {
      if (newWord.length === 0) return true;
      return this.q2(newWord);
    }

    return false;
  }

  q2(text) {
    const { currentSymbol, newWord } = this.getSymbol(text);
    if (Util.isNumber(currentSymbol)) {
      if (newWord.length === 0) return true;
      return this.q2(newWord);
    }
    return false;
  }
}
