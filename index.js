const submitBtn = document.getElementById('submit');
const listSection = document.getElementById('list-section');
const itemList = document.createElement('ul'); // creates unordered list (not yet appended)
itemList.setAttribute('id', 'user-item-list');

function handleSubmit(event) { // when submit button is clicked (Mario assumes)
   event.preventDefault(event); // prevent app from reloading
   const eachItem = document.createElement('li');
   eachItem.setAttribute('id', 'each-item');
   
   if (listDoesntExist) { //
      // add item to the existing list
      listSection.appendChild(itemList); // makes the list (<ul>) (happens once)
      
   } else {
      // list created here
      // append to the dom
      // and add item
   }
   listSection.appendChild(eachItem); // appends each item
   itemList.appendChild('each-item');
}

submitBtn.addEventListener('click', handleSumbit);
// itemList.id = 'user-items'; // Mario says: would this work?
// console.log('itemList', itemList);

/*
  <div id='listsection'>
    <ul id='user-item-list'>
      <li> appended item after clicking submit </li>
    </ul>
  </div>
*/