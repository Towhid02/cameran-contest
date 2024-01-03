import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";

import Slider from "../Components/Slider";

import About from "../Home/About";
import Contest from "../Home/Contest";
import Features from "../Home/Features";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Cameran | Home</title>
      </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <About></About>
            <Contest></Contest>
            <Features></Features>
        </div>
    );
};

export default Home;