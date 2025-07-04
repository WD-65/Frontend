const addBtn = document.getElementById('add');

// HTMLCollection - LIVE (updates automatically when DOM changes)
const htmlCollection = document.getElementsByClassName('para');
console.log('Initial HTML Collection: ', htmlCollection);

// NodeList - STATIC (snapshot, doesn't update)
const nodeList = document.querySelectorAll('.para');
console.log('Initial NodeList: ', nodeList);

addBtn.addEventListener('click', () => {
  const paraContainer = document.querySelector('div');

  const newPara = document.createElement('p');
  newPara.textContent = 'Para three';
  newPara.classList.add('para');

  paraContainer.appendChild(newPara);

  // Uncomment to see the difference:
  // htmlCollection.length will increase each time
  // nodeList.length will stay at 2

  //   console.log('After HTML Collection: ', htmlCollection);
  //   console.log('After NodeList: ', nodeList);

  const todoCount = document.getElementById('todo_count');
  todoCount.textContent = htmlCollection.length; // Uses live collection for current count
});
