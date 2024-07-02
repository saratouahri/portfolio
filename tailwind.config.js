/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "surface-background": '#171023',
        "surface-secondary": '#2C243B',
        "button-primary-default":'#8A42DB',
        "button-primary-hover":'#8A42DB',
        "surface-primary":'#4E4563',
        "custom-gradient": 'linear-gradient(to right, #9955E8, #7BFFAF)',
        "text-secondary":'#CDD0D4',
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
     
      boxShadow: {
        'custom-bottom': '0 8px 16px rgba(0, 0, 0, 0.25)',
        'shadow2': '0 8px 16px #171023',

        "shadow-card":'0px 0px 16px #7BFFAF'
      },

    },
  },
  plugins: [],
};
