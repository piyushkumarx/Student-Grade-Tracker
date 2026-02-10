import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StudentContextProvider from "./components/StudentContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentContextProvider>
      <App />
    </StudentContextProvider>
  </StrictMode>
)
