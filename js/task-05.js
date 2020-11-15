// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//   <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputForm = {
  inputText: document.querySelector("input#name-input"),
  displayText: document.querySelector("span#name-output"),
};
const displayText = function () {
  if (inputForm.inputText.value === "") {
    inputForm.displayText.textContent = "незнакомец";
  } else {
    inputForm.displayText.textContent = inputForm.inputText.value;
  }
};
inputForm.inputText.addEventListener("input", () => displayText());
