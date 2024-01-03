
  

const Banner = () => {
  
    return (
      
       
        <div>
        <div className="hero min-h-screen bg-bannerBg w-full h-full  bg-center n" >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content" data-aos="flip-down">
        <div className="max-w-md " >
        <h1 className="mb-5 text-6xl font-bold text-white"> <span className=" font-galada ">Cameran</span> <br />
        Photo Contest </h1>
        <p className="mb-5 text-2xl text-white">Capture. Create. Compete. Our Photography Contest is your canvas. Submit your best shots, compete with fellow photographers, and win recognition. Unleash your talent now!</p>
        <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">About Us</button>
        </div>
        </div>
        </div>
        </div>
    )
};

export default Banner;