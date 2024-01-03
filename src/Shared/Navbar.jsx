import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
    const links = <>
            <li ><Link to="/">HOME</Link></li>
            <li><Link to="/contests">Contests</Link></li>   
            <li><Link to="/gallery">Gallery</Link></li>      
            <li><Link to="/winner">Winners</Link></li>   
     
    </>
    return (
        <div className="navbar max-w-screen-xl fixed z-30 font-deco text-2xl text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
       {links}

      </ul>
    </div>
    
    <a className="btn btn-ghost text-3xl text-white font-galada">
    <img className="" src="../../public/Images/instagram.svg" alt="" />
      Cameran</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        
      {links}
      
    </ul>
  </div>
  <div className="navbar-end">
  
  {
  !user ?  <li type="button" className="text-white bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"><Link to={'/signIn'}>Log In</Link></li> 
          :  <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
               <div className="w-8 md:w-12 rounded-full">
                    <img src={user?.photoURL ? user?.photoURL : "../../public/assets/avater.avif"} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                  
                  <li><a   onClick={()=>logOut()}>Logout</a></li>
                </ul>
              </div>
              }

  
  </div>
</div>
    );
};

export default Navbar;