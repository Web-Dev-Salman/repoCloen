/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    color: {
      paimariColor: '#E9E9E9'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

