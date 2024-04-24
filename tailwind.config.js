/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {       
        'pops': ['Poppins', 'sans-serif',],
        
        colors: {    
          'overlay': 'rgba(0,0,0,0.6)'
          },

          backgroundImage: {
            'hero': "url(../../assets/homebanner.png)",
          }
        
        
      }
    },
  },
  plugins: [require("limbcss")],
}





