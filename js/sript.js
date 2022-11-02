window.addEventListener("load", () => {
  //  
  const form = document.querySelector("#todoForm");
  const todoInput = document.querySelector("#todoInput");
  const listItems = document.querySelector("#todos");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = todoInput.value;

    if(!todo){
      alert("Add a task");
      return
    }

    const todoContainer = document.createElement("div")
    todoContainer.classList.add("todo");

    const todoContent = document.createElement("div")
    todoContent.classList.add("todoContent");
    
    todoContainer.appendChild(todoContent)

    const todoItem = document.createElement("input");
    todoItem.classList.add("todoInput");
    todoItem.type = "text";
    todoItem.value = todo;
    todoItem.setAttribute("readonly", "readonly");

    todoContent.appendChild(todoItem);

    const inputButtons = document.createElement("div");
    inputButtons.classList.add("actionButtons");

    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.innerHTML = "Edit";

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = "Delete"
    
    inputButtons.appendChild(editButton);
    inputButtons.appendChild(removeButton);

    todoContainer.appendChild(inputButtons);    

    listItems.appendChild(todoContainer);
    todoInput.value = "";

    editButton.addEventListener("click", () => {
      if(editButton.innerHTML == "Edit") {
        todoItem.removeAttribute("readonly");
        todoItem.focus();
        editButton.innerHTML = "Save";
      } else {
        todoItem.setAttribute("readonly", "readonly");
        editButton.innerText = "Edit";
      }
    })

    removeButton.addEventListener("click", ()=>{
      listItems.removeChild(todoContainer)
    })
    

  }) 
})



