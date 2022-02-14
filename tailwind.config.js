module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      screens: {
        'sm': {'max': '640px'},
  
        'mbk': {'max': '768px'},
  
        'lg': {'max': '1024px'},
  
        'xl': {'max': '1280px'},
      }
    },
    variants: {},
    plugins: [],
  }