/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainBlue: "#064997",
        deepBlue: "#010F1E",
        lightPurple: "#9747FF",
        lightBlue: "#4399FD",
        lightGrey: "#D1D3D4"
      },
      screens: {
        sm: {
          max: "768px",
        },
      },
      fontFamily: {
        body: ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
