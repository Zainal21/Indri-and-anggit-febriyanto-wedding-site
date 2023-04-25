const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bellefair'],
        times: ['Times New Roman'],
        brittany: ['Brittany Signature'],
        serif: ['Bellefair'],
        mono: ['SFMono-Regular', 'Menlo'],
        poppin: ['Bellefair']
      },
      backgroundImage: () => ({
        gingko: "url('/images/gingko.png')"
      }),
      colors: {
        gold: {
          100: '#D6CFC1',
          900: '#AA7A32'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/custom-forms')]
}
