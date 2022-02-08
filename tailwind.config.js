module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#3A4256',
        'lightGray': "#8B8888",
        "black": "#0A0A0A",
        'primary': '#1CC7C1',
        "white": "#ffffff",
        'secondary': "#19D3AE - #0FCFEC",
        'danger': '#0FCFEC'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
