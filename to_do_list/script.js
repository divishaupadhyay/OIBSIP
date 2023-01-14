//selectors
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");


//event listner
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deletecheck);
todolist.addEventListener("click", editcheck);

//functins
function addtodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //todo div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");
  //create li
  const newtodo = document.createElement("li");
  newtodo.innerText = todoinput.value;
  newtodo.classList.add("todo-item");
  tododiv.appendChild(newtodo);
  //edit button
  const editbutton = document.createElement("button");
editbutton.innerHTML = '<i class="fas fa-edit"></i>';
editbutton.classList.add("edit-btn");
tododiv.appendChild(editbutton);
  //check mark button
  const completedbutton = document.createElement("button");
  completedbutton.innerHTML = '<i class="fas fa-check"></i>';
  completedbutton.classList.add("complete-btn");
  tododiv.appendChild(completedbutton);
  //check trash button
  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
  trashbutton.classList.add("trash-btn");
  tododiv.appendChild(trashbutton);
  //append to list
  todolist.appendChild(tododiv);
  //clear todo input value
  todoinput.value = "";
}

function deletecheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    const editBtn = todo.querySelector('.edit-btn');
    const completeBtn = todo.querySelector('.complete-btn');
    editBtn.remove();
    completeBtn.remove();
  }
}

//Adding a function for the edit button
function editcheck(e) {
    const item = e.target;
    if (item.classList[0] === "edit-btn") {
      const todo = item.parentElement;
      const todoItem = todo.querySelector('.todo-item');
      todoItem.contentEditable = true;
      todoItem.focus();
      todoItem.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
          todoItem.contentEditable = false;
        }
      })
    }
    
  }

   
  