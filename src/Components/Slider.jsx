import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img1 from "../../public/Images/camera.svg"
import img2 from "../../public/Images/panorama.svg"
import img3 from "../../public/Images/image.svg"
import img4 from "../../public/Images/video.svg"

const Slider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { origin: "center", perView: 2.5, spacing: 10 },
        range: {
          min: -4,
          max: 4,
        },
      })
    return (
        <div ref={sliderRef} className="keen-slider ">
            <div className="keen-slider__slide number-slide1 bg-white text-justify items-center flex flex-col px-5 py-8 rounded-2xl">
                <img className="w-12 h-10 mb-5"  src={img1} alt="" />
                <h1 className="text-3xl font-itim font-bold text-red-800 mb-5">Photo Branding</h1>
                <p className=" text-slate-900 font-moli font-medium px-6">It aims to create a recognizable and cohesive visual identity, enhancing brand recognition and engagement.  Watermarks can be used for protection and identification. </p>
            </div>

            <div className="keen-slider__slide number-slide2 bg-white flex flex-col px-5 py-8 text-justify items-center rounded-2xl">
                <img className="w-12 h-10 mb-5" src={img2} alt="" />
                <h1 className="text-3xl font-itim font-bold text-red-800 mb-5">Photo Editing</h1>
                <p className=" text-slate-900 font-moli font-medium px-6"> It involves adjustments to elements such as brightness, contrast, color balance, and sharpness, as well as more advanced techniques like retouching, cropping, and applying filters. </p>
            </div>

            <div className="keen-slider__slide number-slide3 bg-white flex flex-col px-5 py-8 text-justify items-center rounded-2xl">
                <img className="w-12 h-10 mb-5" src={img3} alt="" />
                <h1 className="text-3xl font-itim font-bold text-red-800 mb-5">Photo-shot</h1>
                <p className=" text-slate-900 font-moli font-medium px-6">It seems like there might be a small typo in your question. If you are referring to Photoshop it is a popular photo editing software developed by Adobe. </p>
            </div>

            <div className="keen-slider__slide number-slide4 bg-white flex flex-col px-5 py-8 text-justify items-center rounded-2xl">
                <img className="w-12  mb-5" src={img4} alt="" />
                <h1 className="text-3xl font-itim font-bold text-red-800 mb-5">Videography</h1>
                <p className=" text-slate-900 font-moli font-medium px-6"> It involves using a video camera or other recording devices to record moving images, and it often includes aspects of storytelling, composition. </p>
            </div>
      
        </div>
    );
};

export default Slider;