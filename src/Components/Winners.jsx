/* eslint-disable react/prop-types */


const Winners = ({contests}) => {
    const { winnerImage, winnerName, name }= contests;
    return (
        <div>
            <div className="card flex gap-5 h-full bg-red-100 px-8 py-5 shadow-xl">
    <figure><img className=" h-full rounded-2xl " src={winnerImage}/></figure>
    <div className="  ">
      <p className=" text-sm text-left text-black font-itim">{winnerName}.</p>
      <p className=" text-sm text-left text-black font-itim">{name}.</p>
      
    </div>
  </div>
        </div>
    );
};

export default Winners;