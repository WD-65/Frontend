import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const light = {
    text: "text-gray-700",
    ui: "bg-gray-200",
    bg: "bg-white",
  };

  const dark = {
    text: "text-gray-200",
    ui: "bg-gray-800",
    bg: "bg-gray-900",
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <ThemeContext value={{ isLightMode, light, dark, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};

export { ThemeContext, ThemeContextProvider };
