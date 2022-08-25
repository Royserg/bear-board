const primaryColor = {
  primary: '#B0816D',
  'primary-focus': '#7E5E50',
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          ...primaryColor,
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          ...primaryColor,
        },
      },
    ],
  },
};
