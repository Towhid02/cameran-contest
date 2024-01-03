/* eslint-disable react/prop-types */


const GalleryItems = ({gallery}) => {
    const {image, details} = gallery;
    return (
        <div>
        <div className="card flex gap-5 h-full bg-red-100 px-8 py-5 shadow-xl">
    <figure><img className=" h-full rounded-2xl " src={image}/></figure>
    <div className="  ">
      <p className=" text-sm text-left text-black font-itim">{details}.</p>
      
    </div>
  </div>
          </div>
    );
};

export default GalleryItems;