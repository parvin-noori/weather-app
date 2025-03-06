import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RQProvider from "./services/RQProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RQProvider>
      <App />
    </RQProvider>
  </StrictMode>
);
