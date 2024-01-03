/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const PopularContests = ({items}) => {
    const {_id, name, image, participantCount, description} = items;
    return (
        <div>
            <div className="max-w-sm bg-white border border-red-300 rounded-lg shadow dark:bg-gray-800 dark:border-red-300">
    <a href="#">
        <img className="rounded-t-lg h-60 w-full" src={image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-galada  tracking-tight text-red-900 dark:text-red-400">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-itim">{description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-itim">Participant   : {participantCount} person </p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        <Link to={`/details/${_id}`}>
            Details
            </Link>
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
        </div>
    );
};

export default PopularContests;