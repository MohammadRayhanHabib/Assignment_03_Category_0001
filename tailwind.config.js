// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',  // Custom breakpoint for small phones
        'sm': '480px',  // Custom breakpoint for larger mobile devices
      
      },
    },
  },
  plugins: [],
}
