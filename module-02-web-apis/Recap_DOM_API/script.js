// SELECTING ELEMENTS
// querySelectorAll() - selects ALL elements with class 'p-4'
const heading = document.querySelectorAll('.p-4');
// Alternative: getElementsByClassName('p-4')
console.log(heading); // Shows NodeList with 3 headings

// CHANGING CLASSES
// setAttribute replaces ALL classes
heading[0].setAttribute('class', 'bg-red-500');

// classList is better - it adds/removes individual classes
heading[0].classList.add('p-2'); // Adds a class
heading[0].classList.toggle('bg-red-500'); // Removes (because it exists)
heading[0].classList.toggle('bg-red-500'); // Adds back (because it's gone)

// LOOPING THROUGH ELEMENTS
for (const singleHeading of heading) {
  // Skip the second heading
  if (singleHeading.textContent === 'This is heading two') {
    continue;
  }
  console.log(singleHeading.textContent);
  singleHeading.classList.add('text-green-500');
}

// EVENT LISTENERS
const button = document.querySelector('button'); // Selects first button
button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

// ===========================================
// DOM SELECTION EXAMPLES
// ===========================================

// Single element selection methods:
// document.getElementById('id-name')           // Select by ID
// document.querySelector('.class-name')        // Select first element with class
// document.querySelector('#id-name')           // Select by ID using CSS selector
// document.querySelector('tag-name')           // Select first element by tag

// Multiple element selection methods:
// document.querySelectorAll('.class-name')     // All elements with class
// document.getElementsByClassName('class-name') // All elements with class (live)
// document.getElementsByTagName('tag-name')    // All elements with tag (live)
// document.getElementsByName('name-attribute') // All elements with name attribute

// ===========================================
// COMMON DOM PROPERTIES TO REMEMBER
// ===========================================

// element.textContent      // Get/set text content
// element.innerHTML        // Get/set HTML content (use carefully!)
// element.style.property   // Access inline styles
// element.classList        // Manage classes
// element.id              // Get/set ID
// element.getAttribute()   // Get any attribute
// element.setAttribute()   // Set any attribute
// element.removeAttribute() // Remove attribute
