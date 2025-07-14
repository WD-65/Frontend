const data = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
);

export default await data;
