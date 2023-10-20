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
      colors:{
        'bg-custom-color':'#dcbc88',
        'text-custom-color-white':'#fafafa',
        'text-custom-color-dark':'#05000A',
        'text-custom-color-Details':'#F5A524'
      },      
      keyframes: {
          spin: {
            '0%, 100%': { transform: 'rotate(-5deg)' },
            '50%': { transform: 'rotate(5deg)' },
          }
        },
      
      animation: {
        'spin': "spin 3s linear infinite",
      },      
    },
  },
  plugins: [],
}
