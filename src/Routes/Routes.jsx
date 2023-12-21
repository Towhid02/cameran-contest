
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Layout/Root";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

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
            path: "signIn",
            element:<LogIn></LogIn>
        },
        {
            path: "signUp",
            element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;