import { addNumbers } from './math.js';
import greet from './utils.js';
import * as Greet from './greetings.js';
console.log('hello');
import { counter, increaseCounter } from './global.js';
import data from "./data.json" with {"type": "json"}

import fetchedData  from "./getData.js"

console.log(addNumbers(4, 5));
console.log(greet('Karl'));

Greet.greetA();
Greet.greetB();

// count++;

counter.value++;
console.log('value', counter.value);

console.log(data)

fetchedData.forEach((post) => {
    const listElement = document.createElement("li")
    listElement.textContent = post.title
    document.body.appendChild(listElement)
})

console.log(increaseCounter())
console.log(increaseCounter())