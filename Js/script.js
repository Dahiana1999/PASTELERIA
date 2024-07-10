const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

//const ul = document.querySelector("ul");
/*funcion del boton de agregar*/
addBtn.addEventListener("click", (e) => {
  const text = input.value;
  if (text === "") {
    alert("Por favor, escribe tu orden");
    return;
  }

  if (text !== "") {
    const li = document.createElement("li");
    li.className = "list";
    const p = document.createElement("p");

    

    /*se crea el checkbox para marcar las tareas*/
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "cheki";
    li.appendChild(checkbox);
    checkbox.addEventListener("click", (e) => {
      if (checkbox.checked) {
        p.style.textDecoration = "line-through";
      } else {
        p.style.textDecoration = "none";
      }

    });
    /*fin de la parte del check*/

    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";

    saveData();
  }
});



/*funcion del boton de borrar*/
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
  });
  return deleteBtn;
}

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}
function showTask() {
  ul.innerHTML = localStorage.getItem("data");

  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
      saveData();
    }
  });
}
showTask();

