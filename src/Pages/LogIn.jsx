import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "../Components/SocialLogIn";
import { Helmet } from "react-helmet";
import login from "../../public/assets/Mobile login-bro.png"


const LogIn = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()

    const handleLogin = event => { 
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate("/");
            })
    }
    return (
      <>
      <Helmet>
                <title>Cameran | Log In</title>
            </Helmet>
            <div>

<div className="hero min-h-screen bg-white ">

<div className="hero-content flex flex-col md:flex-row mt-20">
<div className="text-center md:w-1/2 lg:text-left">
<h1 className="text-5xl font-bold font-moli  text-red-900">Login now!</h1>
<img src={login} alt="" />
</div>
<div className="card md:w-1/2 max-w-sm shadow-2xl bg-red-200">
<form onSubmit={handleLogin} className="card-body">

<div className="form-control">
<label className="label">
<span className="label-text text-xl font-moli text-red-700">Email</span>
</label>
<input type="email"  name="email" placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text text-xl font-moli text-red-700">Password</span>
</label>
<input type="password" name="password" placeholder="password" className="input input-bordered" required />
<label className="label">
<a href="#" className="label-text-alt link link-hover  font-moli text-red-700">Forgot password?</a>
</label>
</div>
<div className="form-control mt-4">
<input className="btn text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2" type="submit" value="Login" />
</div>
</form>
<p className=" font-moli text-red-700 ">New Here? <Link to={"/signUp"}>Sign Up</Link></p>
<SocialLogin></SocialLogin>
</div>
</div>
</div>
</div>
      </>
       
    );
};

export default LogIn;