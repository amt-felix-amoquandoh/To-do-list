var button = document.getElementById('addButton'); 
var userInput = document.getElementById('userInput');
var listItem = document.getElementById('listItem');



function inputItem (){
  return userInput.value.length;
};


function addListItem(){
  
  var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        listItem.appendChild(li);
        userInput.value = '';

        let doneButton = document.createElement("button");
        doneButton.innerHTML = `<ion-icon class="icon" name="checkmark-done">`;
        doneButton.classList.add("doneBtn", "btn");
        li.appendChild(doneButton);

        let removeButton = document.createElement("button");
        removeButton.innerHTML = `<ion-icon class="icon" name="trash-outline">`;
        removeButton.classList.add("removeBtn", "btn");
        li.appendChild(removeButton);

        doneButton.addEventListener("click", function(){
           doneButton.parentElement.style.textDecoration = "line-through";
        });

        removeButton.addEventListener("click", function(e){
          let target = e.target;
          target.parentElement.remove();
          doneButton.remove();
          li.remove();
       })

};

function createOnkeypress (event){
  if(inputItem() > 0 && event.keyCode === 13 ){
    addListItem();
} 
};

function createOnClick(){
  if(inputItem() > 0){
    addListItem();
}
};


button.addEventListener('click', createOnClick);

userInput.addEventListener('keypress', createOnkeypress);