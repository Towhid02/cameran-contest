/* eslint-disable no-undef */
import img1 from "../../public/Images/about1.jpg"
import img2 from "../../public/Images/about2.jpg"
import img3 from "../../public/Images/about3.jpg"
import img4 from "../../public/Images/about4.jpg"
import SectionTitle from "../Shared/SectionTitle";





const About = () => {
    return (
        <div className=" bg-aboutBg bg-center bg-fixed bg-cover">
        <SectionTitle
        heading="About"
        >
        </SectionTitle>
        <div className=" flex flex-col md:flex-row justify-center items-center gap-5 px-8 py-5">
            <div className=" flex-1">
                <p className="text-2xl text-left px-5  text-red-100">
                Creating a captivating and effective photography website is essential for showcasing your talent and attracting potential clients or followers. A well-designed website not only serves as a visual portfolio but also reflects your unique style and professionalism. 
                </p>
            </div>
            <div className=" flex-1 h-96 carousel carousel-vertical rounded-box" data-aos="zoom-in">
  <div className="carousel-item h-full">
    <img src={img1}/>
  </div> 
  <div className="carousel-item h-full">
    <img src= {img2}/>
  </div> 
  <div className="carousel-item h-full">
    <img src= {img3}/>
  </div> 
  <div className="carousel-item h-full">
    <img src= {img4}/>
  </div> 
</div>
        </div>
        </div>
    );
};

export default About;