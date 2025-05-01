/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'dancing': 'var(--dancingScript)',
      'lato':'var(--lato)',
      'poppins':'var(--poppins)',  
    },

    extend: {
      colors: {
        'yellow': 'var(--yellow)',
        'gray':'var(--gray)',       

      },
      boxShadow: {
        'soft-black': '0 4px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

