// Importações necessárias
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Configuração do Vite para o projeto React
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});

