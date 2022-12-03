export default class Automata {
  constructor(_word) {
    this.word = _word;
  }

  getSymbol(word) {
    const currentSymbol = word[0];
    if (!currentSymbol) return false;
    const newWord = word.slice(1);
    return {
      currentSymbol,
      newWord,
    };
  }
}
