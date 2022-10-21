window.addEventListener("load", () => {
  const form = document.querySelector("#todoForm");
  const input = document.querySelector("#todoInput");
  const todoList = document.querySelector("#todos");


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = input.value;

    if(!todo){
      alert("please enter a task")
    }

    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("todo");

    const todoListItem = document.createElement("div");
    todoListItem.classList.add("todoContent");

    todoListContainer.appendChild(todoListItem);
    
    const todoItem = document.createElement("input");
    todoItem.classList.add("todoInput");
    todoItem.type = "text";
    todoItem.value = todo;
    todoItem.setAttribute("readonly", "readonly");

    todoListItem.appendChild(todoItem);

    const actionButtons = document.createElement("div");
    actionButtons.classList.add("actionButtons");

    const editTodo = document.createElement("button");
    editTodo.classList.add("editButton");
    editTodo.innerHTML = "Edit";

    const removeTodo = document.createElement("button");
    removeTodo.classList.add("removeButton");
    removeTodo.innerHTML = "Remove";

    actionButtons.appendChild(editTodo);
    actionButtons.appendChild(removeTodo);

    todoListContainer.appendChild(actionButtons); 

    todoList.appendChild(todoListContainer); 

    input.value = "";

    editTodo.addEventListener("click", ()=>{
      if(editTodo.innerText === "EDIT"){
        todoItem.removeAttribute("readonly");
        todoItem.focus();
        editTodo.innerText = "Save";
      } else{
        todoItem.setAttribute("readonly", "readonly");
        editTodo.innerText = "EDIT";                
      }
    })


    removeTodo.addEventListener("click", () => {
      todoList.removeChild(todoListContainer);
    })


  })
})