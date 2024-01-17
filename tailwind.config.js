/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Syne',
      secondary: 'Syne',
      tertiary: 'Syne',
    },
   
    screens: {
      xsm:'280px',
      sm: '370px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('/assets/site-bg.jpg')",
        about: "url('/assets/about.png')",
        services: "url('/assets/services.png')",
      },
    },
  },
  plugins: [],
};

