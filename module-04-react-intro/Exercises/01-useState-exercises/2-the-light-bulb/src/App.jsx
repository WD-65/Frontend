import "./style.css";
import LightBulb from "./components/LightBulb";
import { useState } from "react";

const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const maxTurns = 10;

  const handleToggle = () => {
    if (!isLightOn && counter >= maxTurns) {
      alert(
        "You have reached the limit! Please reset to turn the light on again."
      );
      return;
    }

    if (!isLightOn) {
      setCounter((count) => count + 1);
    }

    setIsLightOn((prev) => !prev);
  };

  const handleReset = () => {
    setIsLightOn(false);
    setCounter(0);
  };

  const buttonLabel =
    !isLightOn && counter >= maxTurns
      ? "Locked"
      : isLightOn
      ? "Turn off"
      : "Turn on";

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button onClick={handleToggle}>{buttonLabel}</button>
        <button onClick={handleReset}>Reset</button>
        <p>You have turned the light on {counter} times</p>
        <LightBulb isLightOn={isLightOn} />
      </div>
    </>
  );
};

export default App;
