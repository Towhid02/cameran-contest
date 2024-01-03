/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily : {
        galada : "'Galada', cursive",
        grand : "'Grand Hotel', cursive",
        itim : "'Itim', cursive",
        moli : "'Mooli', sans-serif",
        script : "'Style Script', cursive",
        deco : "'Stylish', serif"

      },
      backgroundImage : {
        'navBg': "url(../src/assets/nav.png)",
        'about1': "url(../public/assets/about1.jpg)",
        'about2': "url(../../public/assets/about2.jpg)",
        'about3': "url(../public/assets/about3.jpg)",
        'bannerBg': "url(../public/assets/one-person-holding-camera-photographing-mountain-peak-generated-by-ai.jpg)",
        'aboutBg': "url(../public/assets/slide_2.jpg)",
        'bnr1': "url(../public/assets/fig.jpg)",
        'bnr2': "url(../public/assets/all.jpg)",
        'bnr3': "url(../public/assets/mbl.jpg)",
        'bnr4': "url(../public/assets/wild.jpg)",
        'bnr5': "url(../public/assets/woman.jpg)",
        'gallery': "url(../public/assets/gal.jpg)",
        
      }
    },
  },
  plugins: [require("daisyui"),  require('flowbite/plugin')],
}

