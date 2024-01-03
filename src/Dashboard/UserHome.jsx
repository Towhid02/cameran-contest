import { Helmet } from "react-helmet";
import useAuth from "../Hook/UseAuth";



const UserHome = () => {
    const {user } = useAuth();
    return (
        <div>
            <Helmet>
                <title>Cameran | User Home</title>
            </Helmet>
        <div>
        <h2 className="text-3xl">
            <span>Hi, Welcome</span> <br />
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </h2>
        <h2 className="text-3xl">
            <span>Email: </span> 
            {
                user?.email ? user.email : 'Back'
            }
        </h2>
        <h2 className="text-3xl">
            <span>Photo </span> 
            {
                <img src={user?.photoURL} alt="" />
                
            }
        </h2>
    </div>
    </div>
    );
};

export default UserHome;