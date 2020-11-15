// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ul >
//   В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let ingrList = ingredients.map((value) => {
  let item = document.createElement("li");
  item.textContent = value;
  return item;
});
const getNodeListToString = function (nodesList) {
  return nodesList.map((element) => element.outerHTML).join("");
};
document
  .querySelector("#ingredients")
  .insertAdjacentHTML("afterbegin", getNodeListToString(ingrList));
