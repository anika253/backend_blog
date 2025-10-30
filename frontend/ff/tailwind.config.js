// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // For the main HTML file
    "./src/**/*.{js,jsx,ts,tsx,html}", // To scan all files in src/
    // Adjust paths if your files are structured differently
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
