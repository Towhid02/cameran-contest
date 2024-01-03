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
        'about1': "url(../../public/Images/about1.jpg)",
        'about2': "url(../../public/Images/about2.jpg)",
        'about3': "url(../../public/Images/about3.jpg)",
        'bannerBg': "url(../../public/Images/one-person-holding-camera-photographing-mountain-peak-generated-by-ai.jpg)",
        'aboutBg': "url(../../public/Images/slide_2.jpg)",
        'bnr1': "url(../../public/Images/fig.jpg)",
        'bnr2': "url(../../public/Images/all.jpg)",
        'bnr3': "url(../../public/Images/mbl.jpg)",
        'bnr4': "url(../../public/Images/wild.jpg)",
        'bnr5': "url(../../public/Images/woman.jpg)",
        'gallery': "url(../../public/Images/gal.jpg)",
        
      }
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
}

