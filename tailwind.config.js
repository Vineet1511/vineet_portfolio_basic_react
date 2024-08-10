/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)',

        'custom-gradient-hero': 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',

        'custom-gradient-card': 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',

        'custom-gradient-contact': 'linear-gradient(270deg, #DF8908 80%, #B415FF 100%)',

        'custom-gradient-exp': 'linear-gradient(270deg, #DF8908 50.41%, #B415FF 90.56%)',

        'custom-gradient-button' : 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)',

        'custom-gradient-card-hover' : 'linear-gradient(45deg, #3F0028, #582300)',

        'custom-gradient-card-submit' : 'linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%)'
      },
      screens: {
        'max-md': { 'max': '768px' }, 
      },
    },
  },
  plugins: [],
}