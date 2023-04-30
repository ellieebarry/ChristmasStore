/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('./light.jpeg')",
      },
    },
  },
  plugins: [],
}


// module.exports = {
//  theme: {
//     extend: {
//       backgroundImage: theme => ({
// +         'hero-pattern': "url('/img/hero-pattern.svg')",
// +         'footer-texture': "url('/img/footer-texture.png')",
//       })
//     } 
//   }
// }