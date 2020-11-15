// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//   < div id = "counter" >
//     <button type="button" data-action="decrement">-1</button>
//     <span id="value">0</span>
//     <button type="button" data-action="increment">+1</button>
// </div >
const buttons = {
  buttonDec: document.querySelector('button[data-action="decrement"]'),
  buttonInc: document.querySelector('button[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
  currentValue: 0,
};
const increment = function () {
  buttons.currentValue += 1;
  getValue();
};
const decrement = function () {
  buttons.currentValue -= 1;
  getValue();
};
const getValue = function () {
  buttons.counterValue.textContent = buttons.currentValue;
};
buttons.buttonInc.addEventListener("click", () => increment());
buttons.buttonDec.addEventListener("click", () => decrement());
