var button = document.getElementById('addButton'); 
var userInput = document.getElementById('userInput');
var listItem = document.getElementById('listItem');

button.addEventListener('click', function() {
    if(userInput.value.length > 0){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        listItem.appendChild(li);
        userInput.value = '';
    }
   
  });

  userInput.addEventListener('keypress', function(event) {
    if(userInput.value.length > 0 && event.keyCode === 13 ){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        listItem.appendChild(li);
        userInput.value = '';
    }
   
  });