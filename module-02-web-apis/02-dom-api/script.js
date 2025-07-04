// console.log(document);

// Getting a single element
const subheading = document.getElementById('sub-heading');
// console.log('getElementById: ', subheading);

subheading.innerText = 'JavaScript is SUPER cool!'; // innerText keeps styling, like linebreaks, etc.
subheading.style.color = 'red';
subheading.classList.add('m-2', 'bg-red');

// Getting multiple elements - returns HTMLCollection (live, array-like)
const paras = document.getElementsByClassName('para');
// console.log('getElementsByClassName: ', paras);

const parasByTagName = document.getElementsByTagName('p');
console.log('getElementsByTagName: ', parasByTagName);

// console.log(paras[1]);

// How to loop through HTML Collection
// for (let i = 0; i < paras.length; i++) {
//   console.log(paras[i]);
// }

// OR convert to array first:
// const parasArray = [...paras];
// console.log(parasArray);
// parasArray.forEach((item) => console.log(item.textContent));

// OR
// const paraArray = Array.from(paras);
// paraArray.forEach((item) => console.log(item.textContent));

// for (const para of paras) {
//   console.log(para.textContent);
//   para.style.color = 'blue';
// }

// Query Selector - Modern approach using CSS selectors
const subheadingUsingQS = document.querySelector('#sub-heading');
// console.log('querySelector :', subheadingUsingQS);

// Returns NodeList (static) with forEach() built-in
const parasUsingQS = document.querySelectorAll('.para');
console.log('querySelector :', parasUsingQS);

// Creating Elements
const createPara = (text) => {
  const newPara = document.createElement('p');
  newPara.textContent = text; // textContent is safer than innerHTML
  // newPara.innerHTML = userInput; // SECURITY risk! Can execute scripts

  // newPara.setAttribute('class', 'para'); // old way
  newPara.classList.add('para'); // modern way

  const paraContainer = document.querySelector('.para-container');
  paraContainer.appendChild(newPara);
};

createPara('JS created this page');
createPara('JS created this para again');

// Event Listeners
const changeColorBtn = document.getElementById('change-color-btn');

const handleClick = () => {
  // Toggle between red and blue
  const newColor = subheading.style.color === 'blue' ? 'red' : 'blue';
  subheading.style.color = newColor;
};

changeColorBtn.addEventListener('click', handleClick);

window.addEventListener('load', (chicken) => {
  console.log('Page has been loaded');
});

// Form Handling
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload

  const newParagraph = event.target.name_paragraph.value;

  if (!newParagraph) {
    alert('Please enter a text');
    return;
  }

  createPara(newParagraph);
  event.target.name_paragraph.value = ''; // Clear input
});
