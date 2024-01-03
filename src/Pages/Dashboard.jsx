import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Hook/UseAdmin";
import UseCart from "../Hook/UseCart";
import {FaHome, FaList, FaSearch, FaShoppingCart, FaUsers,} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

const Dashboard = () => {
    const [cart] = UseCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = UseAdmin();
    return (
        <div className="flex ">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-red-400 text-black font-itim text-xl">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageContests">
                                    <FaList></FaList>
                                    Manage Contests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addContest">
                                <IoMdAddCircle />
                                    Add Contests</NavLink>
                            </li>
                           
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Participated Contests ({cart.length})</NavLink>
                                </li>
                               
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contests">
                            <FaSearch></FaSearch>
                            Contests</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;