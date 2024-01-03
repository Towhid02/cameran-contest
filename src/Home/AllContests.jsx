import { Helmet } from "react-helmet";
import ContestItem from "../Components/ContestItem";
import UseContest from "../Hook/UseContest";
import SectionTitle from "../Shared/SectionTitle";






const AllContests = () => {
    const [contests] = UseContest()
    console.log(contests);
    return (
        <div>
            <Helmet>
                <title>Cameran | All Contests</title>
            </Helmet>
            <div className="pt-16" >
            <SectionTitle heading="All Contests"></SectionTitle>
            </div>
            <div data-aos="fade-up"  className=" px-5 grid  md:grid-cols-2 lg:grid-cols-3  gap-4 py-10">
                {
                    contests.map ( contests => <ContestItem 
                        key={contests._id}
                        contests = {contests}
                        >
                        </ContestItem> )
                }
            
             
            </div>
        </div>
    );
};

export default AllContests;