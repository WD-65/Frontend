// Set Timeout
const callbackFunc = () => {
  console.log('Hello');
};

const millisesonds = 2000;

setTimeout(callbackFunc, millisesonds);

// setTimeout(() => {
//   console.log('Hello again');

//   setTimeout(() => {
//     console.log('Hello again!!!!');
//   }, 3000);
// }, 3000);

// Set Interval
// setInterval(() => {
//   console.log('Bye');
// }, 2000);
const number = document.getElementById('number');

const interval = setInterval(() => {
  number.textContent = number.textContent + 1;
}, 1000);

// clearTimeout();
setTimeout(() => {
  clearInterval(interval);
}, 10000);
