/* eslint-disable react/prop-types */
const SectionTitle = ({ heading}) => {
    return (
        <div className="mx-auto  md:w-4/12 my-8">
   
            <h2 className=" text-3xl font-bold border-b-4 border-red-100 py-3 text-red-600 font-itim ">{heading}</h2>
        </div>
    );
};

export default SectionTitle;