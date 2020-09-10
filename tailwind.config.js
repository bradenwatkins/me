const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem",
        "120": "30rem",
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
