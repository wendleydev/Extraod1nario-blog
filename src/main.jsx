// Importações necessárias
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Aplica o tema (dark/claro) antes do primeiro render.
// Isso garante que telas montadas imediatamente (ex: spinner de carregamento) já
// respeitem o modo escuro sem depender do useEffect do Header.
const storedTheme =
  window.localStorage.getItem("theme") ??
  (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");
const initialIsDark = storedTheme === "dark";
document.documentElement.classList.toggle("dark", initialIsDark);

// Renderiza a aplicação React no elemento root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
