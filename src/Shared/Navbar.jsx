import { Link } from "react-router-dom";


const Navbar = () => {
    const links = <>
            <li ><Link to="/">HOME</Link></li>
            <li><Link to="/menus">MENU</Link></li>   
            <li><Link to="/secret">Secret</Link></li>      
            <li><Link to="/order/salad">ORDER</Link></li>   
     
    </>
    return (
        <div className="navbar max-w-screen-xl fixed z-30 font-deco text-2xl bg-white  text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
       {links}

      </ul>
    </div>
    <a className="btn btn-ghost text-2xl uppercase font-grand">Camran</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        
      {links}
      
    </ul>
  </div>
  <div className="navbar-end">
  <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Sign in</button>
  </div>
</div>
    );
};

export default Navbar;