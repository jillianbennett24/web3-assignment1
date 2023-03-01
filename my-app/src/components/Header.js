import { Link } from "react-router-dom";
import logo from '../logo.jpeg';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from './Toast';


const Header = (props) => {
  
  //show about info toast
  const aboutClick = () => {
    toast.dark(<Toast />, {position: 'top-center'})
  }

  return (
    <header>
      <div className="bg-black h-16 flex items-center justify-center">
        <Link to="/" onClick={props.resetData}>
          <img src={logo} className="w-24 hover:cursor-pointer border-r-2 border-gray-300 pr-4 mr-9 h-12"></img>
        </Link>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded border-2 border-gray-300 focus:outline-none focus:ring-gray-300 transition duration-300 ease-in-out group">
          <span onClick={aboutClick} className="text-gray-300 font-sans font-light border-gray-500 underline group-hover:font-semibold">
            About
          </span>
        </button>
      </div>
      <ToastContainer />
    </header>
    
  );
}

export default Header;