
import PopularContests from "../Components/PopularContests";
import UseContest from "../Hook/UseContest";
import SectionTitle from "../Shared/SectionTitle";


const Contest = () => {
        const [contests] = UseContest()
        const popular = contests.filter (items => items.category === 'Popular')
    return (
        <div>
            <SectionTitle
            heading="Popular Running Contest"
            ></SectionTitle>

<div className=" px-5 grid  md:grid-cols-2 lg:grid-cols-3  gap-4 my-8"
    data-aos="fade-up"
    data-aos-duration="1000">
                {
                    popular.map ( items => <PopularContests 
                        key={items._id}
                        items = {items}
                        >
                        </PopularContests> )
                }
            
             
            </div>
            
        </div>
    );
};

export default Contest;