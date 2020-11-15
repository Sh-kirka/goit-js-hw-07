// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

//     #validation - input {
//     border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//     border - color: #4caf50;
// }

// #validation - input.invalid {
//     border - color: #f44336;
// }
const input = {
  inputText: document.querySelector("input#validation-input"),
};
const validation = function () {
  if (
    input.inputText.value.length ===
    parseInt(input.inputText.getAttribute("data-length"))
  ) {
    input.inputText.classList.add("valid");
    input.inputText.classList.remove("invalid");
  } else {
    input.inputText.classList.add("invalid");
    input.inputText.classList.remove("valid");
  }
};
input.inputText.addEventListener("blur", () => validation());
