import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // Ensure this is set to 'false'
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // Ensure only the light theme is enabled
  },
};
