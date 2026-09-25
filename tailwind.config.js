/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      colors: {
        brand: {
          navy: '#172A3A',
          slate: '#243B53',
          dark: '#252A31',
          muted: '#616A73',
          bg: '#FAF9F6',
          lightBlue: '#F1F6FA',
          border: '#E3E5E7',
          wa: '#25D366',
          waHover: '#20ba5a',
        },
      },
    },
  },
  plugins: [],
};
