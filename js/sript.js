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