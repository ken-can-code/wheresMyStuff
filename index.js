const submitBtn = document.getElementById('submit');
const listSection = document.getElementById('list-section');
let itemList;

function handleSubmit(event) {
   event.preventDefault(event);

   if (listSection) {
      // add item to the existing list
   } else {
      // list created here
   }
}

itemList = document.createElement('li');
// itemList.setAttribute('id', 'user-items');
itemList.id = 'user-items'; // Mario says: would this work?
console.log('itemList', itemList)

// It'sa me! Mario!