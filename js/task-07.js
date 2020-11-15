// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
//и изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

// < input id = "font-size-control" type = "range" />
//   <br />
//   <span id="text">Абракадабра!</span>

const inputSize = {
  inputSize: document.querySelector("input#font-size-control"),
  displayText: document.querySelector("span#text"),
};
const fontSize = function () {
  inputSize.displayText.style.fontSize = `${inputSize.inputSize.valueAsNumber}px`;
};
inputSize.inputSize.addEventListener("input", () => fontSize());
