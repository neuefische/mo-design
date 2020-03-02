// const newParagraph = document.createElement("p");
// const newContent = document.createTextNode(
//   "Wir suchen die Marken für unserem Store sehr sorgfältig aus. Dabei legen wir großen Wert nicht einfach nur angesagte Trends von den Laufstegen zu kopieren, sondern die Auswahl immer mit unserer Handschrift zu versehen."
// );
// newParagraph.appendChild(newContent);
// const article = document.querySelector("heading1");
// document.body.insertAfter(newParagraph, article);

const myText = document.querySelector(".heading1");
const contentText = document.querySelector(".paragraph");
contentText.innerHTML =
  "Wir suchen die Marken für unserem Store sehr sorgfältig aus. Dabei legen wir großen Wert nicht einfach nur angesagte Trends von den Laufstegen zu kopieren, sondern die Auswahl immer mit unserer Handschrift zu versehen.";
console.log(contentText);
