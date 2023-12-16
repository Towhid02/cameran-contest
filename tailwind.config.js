/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily : {
        galada : "'Galada', cursive",
        grand : "'Grand Hotel', cursive",
        itim : "'Itim', cursive",
        mooli : "'Mooli', sans-serif",
        script : "'Style Script', cursive",
        deco : "'Stylish', serif"

      },
      backgroundImage : {
        'navBg': "url(../src/assets/nav.png)",
        'bannerBg': "url(../../public/Images/one-person-holding-camera-photographing-mountain-peak-generated-by-ai.jpg)",
        
      }
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
}

