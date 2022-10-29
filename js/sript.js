window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const form = document.querySelector("#todoForm");
  const input = document.querySelector("#todoInput");

  const todo = input.value;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.reset();
    renderTodos();
  })
  renderTodos();
})



function renderTodos(){
  todos.forEach(todo => {
    const todoList = document.createElement("section");
    todoList.classList.add("todoList");


    const todoListContainer = document.createElement("div");
    todoListContainer.classList.add("taskContainer");

  const todoListItem = document.createElement("div");
  todoListItem.classList.add("todo");

  todoListContainer.appendChild(todoListItem); 

  const todoContent = document.createElement("div");
  todoContent.classList.add("todoContent");
  
  const todoItem = document.createElement("input");
  todoItem.classList.add("todoInput");
  todoItem.type = "text";
  todoItem.value = todo;
  todoItem.setAttribute("readonly", "readonly");


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
  todoContent.appendChild(todoItem);
  todoContent.appendChild(actionButtons);
  todoListItem.appendChild(todoContent);
  


  todoList.appendChild(todoListContainer); 


  editTodo.addEventListener("click", ()=>{
    if(editTodo.innerText === "EDIT"){
      todoItem.removeAttribute("readonly");
      todoItem.focus();
      editTodo.innerText = "Save";
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos()
    } else{
      todoItem.setAttribute("readonly", "readonly");
      editTodo.innerText = "EDIT"; 
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos()              
    }
    renderTodos();
  })


  removeTodo.addEventListener("click", () => {
    todoList.removeChild(todoListContainer);
    localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos()
  })
  })

}