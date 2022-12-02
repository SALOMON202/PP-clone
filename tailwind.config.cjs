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
        }
      }

      
    
    },
  },
  plugins: [],
}
