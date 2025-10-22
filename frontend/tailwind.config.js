/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3FE458',
        'primary-dark': '#1BAB57',
        'background-light': '#F6F8F6',
        'background-dark': '#112114',
        'card-light': '#FFFFFF',
        'card-dark': '#1E1E1E',
        'surface-light': '#FFFFFF',
        'surface-dark': '#1A2E1A',
        'content-light': '#111712',
        'content-dark': '#E9F5E9',
        'subtle-light': '#648769',
        'subtle-dark': '#A8C2A8',
        'border-light': '#F0F4F1',
        'border-dark': '#2A4A2C',
        'mint-green-accent': '#E6FBF3',
        'mint-green-dark': '#174C34',
        'text-light': '#1f2937',
        'text-muted': '#6b7280',
        'text-dark': '#E5E5E7',
        'text-muted-dark': '#9CA3AF',
        'danger': '#FF4D4D',
      },
      fontFamily: {
        display: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        soft: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'subtle-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'mint-glow': '0 0 20px 5px rgba(63, 228, 88, 0.4)',
      },
      borderRadius: {
        lg: '1.5rem',
        xl: '2rem',
      },
    },
  },
  plugins: [],
}

