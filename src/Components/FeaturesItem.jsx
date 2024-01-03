/* eslint-disable react/prop-types */


const FeaturesItem = ({features}) => {
    const {title, image, details} = features;
    return (
        <div>
      <div className="card flex flex-row gap-5 h-full bg-red-100 px-8 py-5 shadow-xl">
  <figure><img className=" flex-1" src={image}/></figure>
  <div className=" flex-1 ">
    <h2 className=" text-3xl font-semibold text-left text-red-800 font-grand">{title}</h2>
    <p className=" text-sm text-left text-black font-itim">{details}.</p>
    
  </div>
</div>
        </div>
    );
};

export default FeaturesItem;