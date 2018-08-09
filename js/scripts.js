let getToDo = document.querySelector("#toDos");
let getDone = document.querySelector("#doneItems");
let toDoText = document.querySelector("#toDoText");
const toDoForm = document.forms.toDoInput;
const submitToDoButton = document.querySelector("#submitToDo");
const myModal = document.querySelector("#myModal");
const modalBackdrop = document.querySelector(".modal-backdrop");
let toDoList = [];
let doneList = [];

function addToDo(input) {
  toDoLi = document.createElement("li");
  liInput = document.createElement("input");
  liInput.setAttribute("type", "checkbox");
  toDoLi.innerHTML = input;
  toDoLi.classList.add("myLi");
  getToDo.appendChild(toDoLi);
  toDoLi.appendChild(liInput);
};

toDoForm.addEventListener("submit", (event) => {
  console.log(event, toDoForm.toDoText.value);
  event.preventDefault();
  console.log(toDoForm.toDoText.value);
  addToDo(toDoForm.toDoText.value);
  myModal.classList.add("hide");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  modalBackdrop.classList.add("hide");
});
