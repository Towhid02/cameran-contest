/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading}) => {
    return (
        <div className="mx-auto  md:w-4/12 my-8">
    <h6 className="text-red-600 font-galada mb-2">----{subHeading}----</h6>
            <h2 className=" text-4xl font-itim uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;