const userItem = document.getElementById('user-item');
const submitBtn = document.getElementById('submit');
const listDiv = document.getElementById('list-div');
const itemList = document.createElement('ul'); // creates unordered list (not yet appended)
itemList.setAttribute('id', 'user-item-list');
let idNum = 0;

function handleDelete(event) {
  event.preventDefault(event);
  event.target.parentNode.remove();
}

function handleSubmit(event) { // when submit button is clicked, enter works too
  event.preventDefault(); // prevent app from reloading
  const userInputText = userItem.value;
  userItem.value = ''; // clears input box after submitting
  const eachItem = document.createElement('li');
  eachItem.setAttribute('id', `each-item${idNum}`);
  eachItem.textContent = userInputText;
  const deleteButton = document.createElement('button'); // create delete button in memory
  deleteButton.textContent = 'delete';
  eachItem.appendChild(deleteButton); // delete btn added on of right every item

  deleteButton.addEventListener('click', handleDelete);
  idNum += 1;

  if (itemList.isConnected === false) { // itemList is connected to a DOM
    listDiv.appendChild(itemList); // makes the list (<ul>) (happens once)
  }
  itemList.appendChild(eachItem);
}

submitBtn.addEventListener('click', handleSubmit);