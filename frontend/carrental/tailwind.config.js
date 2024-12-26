/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        lightGray: '#F4F4F4',
        lightpurple:'#4A43C4',
        orange:'#EB662B',
        main:'#F7F7F9',
        next:'#FCFCFD',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
        fadeInUp: 'fadeInUp 3s ease-in-out',
      },
      // fontFamily: {
      //   hangover: ['Hangover', 'cursive'],
      //   petemoss: ['Petemoss', 'cursive'],
      },
      
    
    },
  // },
  plugins: [],
}
