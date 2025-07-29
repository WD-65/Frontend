import { useEffect } from "react";
import Counter from "./Counter";

function Interval({ count, setCount }) {
  useEffect(() => {
    // Creating an interval that decrements the count every second
    const interval = setInterval(() => {
      console.log("Interval running");
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Creating a timeout to clear the interval after 4 seconds, when the count state gets to 0
    // This prevents the interval from running indefinitely once the countdown reaches 0
    const timeout = setTimeout(() => {
      clearInterval(interval);
      console.log("Interval cleared");
    }, 4000);

    // Cleanup function to clear the interval and timeout when the component unmounts or when dependencies change
    // This prevents memory leaks and ensures that the interval does not continue running after the component is
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }; // Cleanup interval and timeout on unmount
  }, []);

  return (
    <div>
      <Counter count={count} />
    </div>
  );
}

export default Interval;
