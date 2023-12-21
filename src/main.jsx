/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
     <div className='max-w-screen-xl mx-auto items-center justify-center text-center'>
            <RouterProvider router={router} />
          </div>
     </AuthProvider>
    </HelmetProvider>
     
  
  </React.StrictMode>,
)
 