import "./index.css";

import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { StrictMode } from "react";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
