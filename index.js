const submitBtn = document.getElementById('submit');
console.log('submitBtn', submitBtn);
const listDiv = document.getElementById('list-div');
const itemList = document.createElement('ul'); // creates unordered list (not yet appended)
itemList.setAttribute('id', 'user-item-list');
let idNum = 0;

function handleSubmit(event) { // when submit button is clicked (Mario assumes)
   event.preventDefault(event); // prevent app from reloading
   const eachItem = document.createElement('li');
   eachItem.setAttribute('id', `each-item${idNum}`);
   idNum += 1;
   
   if (listDoesntExist) { // runs only once
      listDiv.appendChild(itemList); // makes the list (<ul>) (happens once)
   }
   itemList.appendChild(eachItem);
}

submitBtn.addEventListener('click', handleSubmit);

// console.log('itemList', itemList);

/*
  <div id='listDiv'>
    <ul id='user-item-list'>
      <li> appended item after clicking submit </li>
    </ul>
  </div>
*/