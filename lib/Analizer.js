import Arithmetic from "../automatas/Arithmetic.js";
import Assignations from "../automatas/Assignations.js";
import Comment from "../automatas/Comment.js";
import FloatNumber from "../automatas/FloatNumber.js";
import Identifier from "../automatas/Identifier.js";
import IntNumber from "../automatas/IntNumber.js";
import Logical from "../automatas/Logical.js";
import Relational from "../automatas/Relational.js";
import { Util } from "../utils/Util.js";

export default class Analizer {
  analize(words, symbols) {
    const results = Util.deepCopy(symbols);
    for (const word of words) {
      try {
        const arithmeticSymbol = new Arithmetic(word).start();
        if (arithmeticSymbol) {
          results.arithmetic.total++;
          results.arithmetic[arithmeticSymbol]++;
          continue;
        }

        const logicalSymbol = new Logical(word).start();
        if (logicalSymbol) {
          results.logic.total++;
          results.logic[logicalSymbol]++;
          continue;
        }

        const relationalSymbol = new Relational(word).start();
        if (relationalSymbol) {
          results.relational.total++;
          results.relational[relationalSymbol]++;
          continue;
        }

        if (new Assignations(word).start()) {
          results["="]++;
          continue;
        }

        if (new IntNumber(word).start()) {
          results.int++;
          continue;
        }

        if (new FloatNumber(word).start()) {
          results.float++;
          continue;
        }

        if (new Comment(word).start()) {
          results.comments++;
          continue;
        }

        if (word === "(") {
          results.parenthesis["("]++;
          results.parenthesis.total++;
          continue;
        }
        if (word === ")") {
          results.parenthesis[")"]++;
          results.parenthesis.total++;
          continue;
        }
        if (word === "{") {
          results.brackets["{"]++;
          results.brackets.total++;
          continue;
        }
        if (word === "}") {
          results.brackets["}"]++;
          results.brackets.total++;
          continue;
        }
        //reserved words
        if (word === "if") {
          results.reserved.if++;
          results.reserved.total++;
          continue;
        }
        if (word === "else") {
          results.reserved.else++;
          results.reserved.total++;
          continue;
        }
        if (word === "switch") {
          results.reserved.switch++;
          results.reserved.total++;
          continue;
        }
        if (word === "case") {
          results.reserved.case++;
          results.reserved.total++;
          continue;
        }
        if (word === "default") {
          results.reserved.default++;
          results.reserved.total++;
          continue;
        }
        if (word === "for") {
          results.reserved.for++;
          results.reserved.total++;
          continue;
        }
        if (word === "while") {
          results.reserved.while++;
          results.reserved.total++;
          continue;
        }
        if (word === "break") {
          results.reserved.break++;
          results.reserved.total++;
          continue;
        }

        if (word === "int") {
          results.reserved.int++;
          results.reserved.total++;
          continue;
        }
        if (word === "String") {
          results.reserved.String++;
          results.reserved.total++;
          continue;
        }
        if (word === "double") {
          results.reserved.double++;
          results.reserved.total++;
          continue;
        }
        if (word === "char") {
          results.reserved.char++;
          results.reserved.total++;
          continue;
        }

        //identifiers
        if (new Identifier(word).start()) {
          results.identifier.total++;
          continue;
        }

        throw new Error("Not found");
      } catch (ex) {
        console.log(ex);
        results.errors++;
      }
    }
    return results;
  }
}
