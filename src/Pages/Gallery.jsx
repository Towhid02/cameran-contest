import { Helmet } from "react-helmet";
import GalleryItems from "../Components/GalleryItems";
import UseGallery from "../Hook/UseGallery";


const Gallery = () => {
    const [gallery] = UseGallery()
    console.log(gallery);
    return (
        <div>
            <Helmet>
                <title>Cameran | Gallery </title>
            </Helmet>
            <div className="pt-10">
            <div className="hero min-h-screen bg-gallery bg-cover ">
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="px-10 md:px-24 ">
      <h1 className="mb-5 text-6xl font-bold text-red-800 font-itim">GALLERY</h1>
      <p className="mb-5 text-red-300 text-2xl font-moli">An image gallery is a visually appealing collection of images, displayed in a grid or slideshow format. It serves as a convenient and engaging way to showcase diverse visual content, commonly used on websites and digital platforms for events, portfolios, or artistic displays.</p>
    </div>
  </div>
</div>
            </div>
             <div  data-aos="fade-up"
     data-aos-duration="2000" className=" grid grid-cols-1 md:grid-cols-2 gap-2  py-5">
                {
                    gallery.map ( gallery => <GalleryItems 
                        key={gallery._id}
                        gallery = {gallery}
                        >
                        </GalleryItems> )
                }
            
             
            </div>
        </div>
    );
};

export default Gallery;