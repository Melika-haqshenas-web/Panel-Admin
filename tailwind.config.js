/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobiles': '320px',
        'mobileM': '375px',
        'mobileL': '425px',
        'loptapL' : '1440px',
        'mobileFourK' : '2560px',
      },
    },
  },
  plugins: [],
};
