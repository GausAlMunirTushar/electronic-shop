/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989ff",
        headPrimary: "#010f1c",
        headSecondary: "#021d35",
        pink: "#fd4b6b"
      },
      container: {
        center: true,
        padding: "15px",
      }
    },
  },
  plugins: [],
}