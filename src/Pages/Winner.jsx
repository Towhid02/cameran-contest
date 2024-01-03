import { Helmet } from "react-helmet";
import UseContest from "../Hook/UseContest";
import Winners from "../Components/Winners";
import img1 from "../../public/Images/young-asian-man-with-camera-isolated-white-background-photographer-concept.jpg"
import img2 from "../../public/Images/positive-female-tourist-with-photo-camera-travel-backpack.jpg"
import img3 from "../../public/Images/young-stylish-photographer-holds-professional-camera-taking-photos.jpg"
import img4 from "../../public/Images/medium-shot-specialized-photographer-working-studio.jpg"
import img5 from "../../public/Images/young-woman-black-t-shirt-with-camera.jpg"
import { Carousel } from 'flowbite-react';
import SectionTitle from "../Shared/SectionTitle";

const Winner = () => {
    const [contests] = UseContest();
    return (
        <div>
              <Helmet>
                <title>Cameran | Winner </title>
            </Helmet>

            <div className=" h-80 sm:h-screen xl:h-screen 2xl:h-screen w-full pt-20">
            <Carousel>
        <img src={img1} />
        <img src={img2} />
        <img src={img5} />
        <img src={img3} />
        <img src={img4} />
      </Carousel>

            </div>
            
            <div>
                <SectionTitle
            heading="Winners Of Last year"
            ></SectionTitle>
            <div className=" grid md:grid-cols-3 gap-3 pb-5 ">
                {
                    contests.map ( contests => <Winners 
                        key={contests._id}
                        contests = {contests}
                        >
                        </Winners> )
                }
            
             
            </div>
            </div>
        </div>
    );
};

export default Winner;