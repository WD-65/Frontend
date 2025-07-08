/**
 * =================================================================
 * PROMISES: A QUICK LOOK
 * =================================================================
 *
 * A Promise is an object representing the eventual completion or
 * failure of an asynchronous operation. Think of it as a placeholder
 * for a value you don't have yet.
 *
 * A Promise can be in one of three states:
 * - pending: The initial state, neither fulfilled nor rejected.
 * - fulfilled: The operation was successful. We get a value.
 * - rejected: The operation failed. We get a reason (an error).
 *
 * We handle these outcomes using the .then() and .catch() methods.
 */

// Example of a simple Promise.
// Try changing `resolve` to `reject` to see how the .catch() block runs!
const groceryPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation, like going to the grocery store.
  const gotGroceries = true;

  if (gotGroceries) {
    resolve('Success! We got the groceries. 🍎');
  } else {
    reject('Failure! The store was closed. 😞');
  }
});

groceryPromise
  .then((successMessage) => {
    // This block runs if the promise is resolved.
    console.log('Promise fulfilled:', successMessage);
  })
  .catch((errorMessage) => {
    // This block runs if the promise is rejected.
    console.log('Promise rejected:', errorMessage);
  });

/**
 * =================================================================
 * FETCH API: GETTING DATA FROM A SERVER
 * =================================================================
 *
 * The Fetch API provides a simple, modern way to make network
 * requests (e.g., to get data from a server). It returns a Promise!
 *
 * The most common type of request is a GET request, which is the
 * default method for `fetch()`.
 */

// We'll fetch a list of users from a public API.
const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';

// This function creates a new list item (<li>) and adds it to the page.
const createUserListItem = (userName) => {
  const userItem = document.createElement('li');
  userItem.textContent = userName;
  document.body.appendChild(userItem); // Appends the <li> to the <body>
};

fetch(usersApiUrl)
  .then((response) => {
    // The first .then() block receives a Response object.
    // This object contains information about the response, but not the actual data yet.
    // We need to convert the response body from JSON format to a JavaScript object.
    // The .json() method does this and also returns a Promise!
    return response.json();
  })
  .then((users) => {
    // This second .then() receives the actual data (the array of users).
    console.log('Fetched user data:', users);

    // We can now loop through the data and do something with it.
    users.forEach((user) => {
      createUserListItem(user.name);
    });
  })
  .catch((error) => {
    // The .catch() block will run if the network request fails for any reason
    // (e.g., network error, invalid URL).
    console.error('Failed to fetch users:', error);
  });

/**
 * =================================================================
 * FETCH API: SENDING DATA TO A SERVER (POST)
 * =================================================================
 *
 * Besides getting data, we can also send data to a server using
 * different HTTP methods. A 'POST' request is used to create a new
 * resource on the server.
 *
 * To do this, we need to provide more information to the `fetch()` call.
 */

// The URL for creating new posts.
const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts';

// The data we want to send. This is a standard JavaScript object.
const newPostData = {
  title: 'My Awesome New Post',
  body: 'This is the content of my fantastic post.',
  userId: 5,
};

fetch(postsApiUrl, {
  // 1. Method: Specify that we are making a POST request.
  method: 'POST',

  // 2. Headers: Tell the server what kind of data we are sending.
  //    In this case, it's JSON.
  headers: {
    'Content-Type': 'application/json',
  },

  // 3. Body: The actual data we want to send.
  //    We must convert our JavaScript object into a JSON string.
  body: JSON.stringify(newPostData),
})
  .then((response) => response.json()) // Convert the server's response back to a JS object
  .then((responseData) => {
    // The server often sends back the newly created object (with an ID).
    console.log('Server response to POST request:', responseData);
  })
  .catch((error) => {
    console.error('Failed to create post:', error);
  });
