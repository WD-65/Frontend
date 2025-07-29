
function Counter({ count }) {
  return <button>{count > 0 ? `${count}` : "Go!"}</button>;
}

export default Counter;
