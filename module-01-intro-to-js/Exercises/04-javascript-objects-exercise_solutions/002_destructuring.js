// You can work here or download the template!
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

const [fruit1, fruit2] = fruits;
console.log(fruit1); // apple
console.log(fruit2); // banana

const [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit); // apple
console.log(thirdFruit); // cherry

const { name, age } = person;
console.log(name); // John Doe
console.log(age); // 30

const {
  address: { city },
} = person;
console.log(city); // New York

// Initial function
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
// Call the function
displayPerson(person);
