/** @type {import('tailwindcss').Config} */
// Configuração do Tailwind CSS para o projeto Extraord1nário
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Paleta de cores personalizada
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      // Configuração das fontes
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      // Configuração da tipografia
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#374151",
            a: {
              color: "#0ea5e9",
              "&:hover": {
                color: "#0284c7",
              },
            },
          },
        },
      },
    },
  },
  // Plugins do Tailwind CSS
  plugins: [require("@tailwindcss/typography")],
};
