import Banner from "../Components/Banner";
import Slider from "../Components/Slider";

import About from "./About";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            
            <About></About>
        </div>
    );
};

export default Home;