import Analizer from "./lib/Analizer.js";
import { Parser } from "./utils/Parser.js";
import symbols from "./consts/symbols.js";
import { Interface } from "./lib/interface.js";

const fileInput = document.querySelector("input");
const preview = document.getElementById("preview");
//preview.innerHTML = new Interface().buildInterface(symbols);
fileInput.addEventListener("change", function () {
  const fileReader = new FileReader();
  fileReader.readAsText(fileInput.files[0]);
  fileReader.addEventListener("load", function () {
    const text = fileReader.result;
    const parsedSymbols = Parser.parse(text);
    const results = new Analizer().analize(parsedSymbols, symbols);
    preview.innerHTML = new Interface().buildInterface(results);
    console.log(results);
  });
});
