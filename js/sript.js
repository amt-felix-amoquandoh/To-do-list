var button = document.getElementById('addButton'); 
var userInput = document.getElementById('userInput');
var listItem = document.getElementById('listItem');

button.addEventListener('click', function() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(''));
    listItem.appendChild(li);
  });