/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    
    extend: {
      colors:{
        surface:{
          Tbase:'rgb(var(--color-text-base-rgb) / <alpha-value> )',
          Tinverted:'rgb(var(--color-text-inverted-rgb) / <alpha-value> ) ',
          primary:'rgb(var(--color-base-primary-rgb) / <alpha-value> )',
          btnSpec:'rgb(var(--color-btn-spec-rgb) / <alpha-value> )',
          input:'rgb(var(--color-input-rgb) / <alpha-value> )',
          inverted:'rgb(var(--color-base-inverted-rgb) / <alpha-value> )'
        },
        gradient:{
          secondGradCol: 'rgba(255, 255, 255, 0.1) ' ,
          firstGradCol: 'transparent'
        }
      },
      animation:{
        backNforth: 'animation 4s ease-in-out infinite' , 
        miniBackForth : 'miniAnimation 4s ease-in-out infinite'
      },
      keyframes:{
        animation:{
          '0%, 100%': { transform: 'translateX(-50%)'} ,
          '50%': { transform: 'translateX(100%)' },
        },
        miniAnimation:{
          '0px , 100%': {transform: 'translateX(-50%)'} , 
          '50%': {transform:'translateX(15%)'}
        },
      },
      zIndex:{
        1000: 'z-index:100',
      },

    },
  },
  plugins: [],
}
