import FeaturesItem from "../Components/FeaturesItem";
import UseFeatures from "../Hook/UseFeatures";
import SectionTitle from "../Shared/SectionTitle";



const Features = () => {

    const [features] = UseFeatures()
    return (
        <div>
            <SectionTitle
                heading="CONTEST FEATURES"
            ></SectionTitle>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 my-8"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
                {
                    features.map ( features => <FeaturesItem 
                        key={features._id}
                        features = {features}
                        >
                        </FeaturesItem> )
                }
            
             
            </div>
            
        </div>
    );
};

export default Features;