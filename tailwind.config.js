// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    plugins: [
      require('daisyui'),
      require('autoprefixer'),
    ],
  };
  
  