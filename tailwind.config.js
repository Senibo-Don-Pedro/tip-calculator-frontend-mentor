/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        QVeryDarkCyan: 'hsl(183, 100%, 15%)',
        QStrongCyan: 'hsl(172, 67%, 45%)',
        QDarkGrayishCyan: 'hsl(186, 14%, 43%)',
        QGrayishCyan: 'hsl(184, 14%, 56%)',
        QLightGrayishCyan: 'hsl(185, 41%, 84%)',
        QVerylightGrayishCyan: 'hsl(189, 41%, 97%)',
      },
    },
  },
  plugins: [],
}
