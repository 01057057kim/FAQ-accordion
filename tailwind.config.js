/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors :{
        'l-pink' : 'hsl(275, 100%, 95%)',
        'g-purple' : 'hsl(292, 16%, 49%)',
        'd-purple' : 'hsl(292, 42%, 14%)',
        'ppurple' : '#AD28EB',
      },
      fontFamily:{
        'workSans':'Work Sans, sans-serif'
      },
    },
  },
  plugins: [],
}
