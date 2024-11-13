console.log("inject test");
import { isProbablyReaderable, Readability } from '@mozilla/readability';

function canBeParsed(document) {
  console.log("extract content canBeParsed");

  return isProbablyReaderable(document, {
    minContentLength: 100
  });
}

function parse(document) {
  console.log("extract content parse");

  if (!canBeParsed(document)) {
    return false;
  }
  const documentClone = document.cloneNode(true);
  const article = new Readability(documentClone).parse();
  return article.textContent;
}
console.log("extract content");
parse(window.document);
