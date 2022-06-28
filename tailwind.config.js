/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui:{
    themes: ["lemonade", "forest"]
  },
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#111111',
      ckyellow: '#fde012',
      ckgreen_dark_3: '#032A3C',
      ckgreen_dark_2: '#054349',
      ckgreen_dark_1: '#07574D',
      ckgreen_dark_0: '#0A6446',
      ckgreen: '#0d703a',
      ckgreen_link: '#42b983',
      ckgreen_light_0: '#2C8544',
      ckgreen_light_1: '#4B9952',
      ckgreen_light_2: '#72AC6B',
      ckgreen_light_3: '#9ABF8B',
      ckgreen_light_4: '#BED2AC',
      ckgreen_light_5: '#DCE4CD',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}