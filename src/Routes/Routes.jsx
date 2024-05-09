
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import Details from "../Components/Details";
import Dashboard from "../Pages/Dashboard";
import Payment from "../Dashboard/Payments";
import AllContests from "../Home/AllContests";
import Cart from "../Dashboard/Cart";

import Gallery from "../Pages/Gallery";
import Winner from "../Pages/Winner";
import AllUser from "../Dashboard/AllUser";
import AdminRoutes from "../Provider/AdminRoutes";
import AdminHome from "../Dashboard/AdminHome";
import ManageContests from "../Dashboard/ManageContests";
import AddContests from "../Dashboard/AddContests";
import UpdateContests from "../Dashboard/UpdateContests";
import UserHome from "../Dashboard/UserHome";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children : [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "gallery",
            element:<Gallery></Gallery>
        },
        {
            path: "winner",
            element:<Winner></Winner>
        },
      {
            path: "signIn",
            element:<LogIn></LogIn>
        },
        {
            path: "signUp",
            element:<SignUp></SignUp>
        },
        {
            path: "contests",
            element:<AllContests></AllContests>
        },
        {
            path: "details/:id",
            element:<Details></Details>,
            loader: ({params}) => fetch(`https://contest-server-six.vercel.app/contests/${params.id}/`)
      
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        // normal user routes
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        
       
          // admin only routes
          {
            path: 'adminHome',
            element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
          },
          {
            path: 'manageContests',
            element: <ManageContests></ManageContests>
          },
          {
            path: 'updateContest/:id',
            element: <UpdateContests></UpdateContests>,
            loader: ({params}) => fetch(`https://contest-server-six.vercel.app/contests/${params.id}`)
          },
          {
            path: 'users',
            element: <AllUser></AllUser>
          },
          {
            path: 'addContest',
            element: <AdminRoutes><AddContests></AddContests></AdminRoutes>
          },

      ]
    }
  ]);

  export default router;