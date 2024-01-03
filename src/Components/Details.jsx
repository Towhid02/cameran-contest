/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2';
import useAuth from '../Hook/UseAuth';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import UseCart from '../Hook/UseCart';
import SectionTitle from '../Shared/SectionTitle';
// import UseContest from '../Hook/UseContest';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    // const contests = UseContest()
    // console.log(contests);
    const navigate = useNavigate()
    const { _id, name, image, participantCount, description, deadline, category, price } = useLoaderData();
    const {user} = useAuth()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure();
    const[ refetch] = UseCart()

    const handleAddToCart = contests => {
      
        if (user && user.email) {
          console.log(contests, user.email);
          //send cart item to the database
          const cartContests = {
              menuId: _id,
              email: user.email,
              name,
              image,
              price  
            }
            axiosSecure.post('/carts', cartContests)
                  .then(res => {
                      console.log(res.data)
                      if (res.data.insertedId) {
                          Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${name} added to your cart`,
                              showConfirmButton: false,
                              timer: 1500
                          });
                          
                          refetch();
                      }
  
                  })
          }
          else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            })
            .then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
      } 

    return (
        <div>
            <div className="card w-full bg-red-50">
            <figure><img className='mt-16 rounded-2xl' src={image} /></figure>
            <div className="card-body px-20 text-center">
            <h2 className="card-title mt-5 font-moli text-red-600 text-4xl font-bold text-center"> {name} Contest</h2>
            
            <p className=' font-itim text-black mt-5'>  {description}</p>
            <div className='flex flex-row gap-20 justify-center font-galada text-2xl text-orange-700 mt-5'>
            <h3> Category  : {category}</h3>
            <h3> Fees  : {price} Tk</h3>
            </div>
            <div className='flex flex-row gap-20 justify-center font-galada text-2xl text-orange-700 mt-5'>
            <h3> Participants   : {participantCount}</h3>
            <h3> Deadline   : {deadline} days</h3>
            </div>

            <div className="card-actions justify-center mt-5">
            <button onClick={()=>handleAddToCart()} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Details;