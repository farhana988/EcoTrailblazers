// import React from 'react';
import logo from '../assets/navlogoo-removebg-preview.png'
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import 'animate.css';

const Navbar = () => {
  const { user, handleSignOut, } = useContext(authContext);
  const links = (
    <>
    
  <NavLink 
    to="/" 
    className={({ isActive }) =>
      ` ${isActive ? 'active text-[#536493] text-3xl font-extrabold' : 'font-thin text-xl text-gray-400 hover:text-[#536493]'}`
    }
  >
   <i> Home</i>
  </NavLink>


  <NavLink 
    to="/updateProfile" 
    className={({ isActive }) =>
      ` ${isActive ? 'active text-[#536493] text-3xl font-extrabold' : 'font-thin text-xl text-gray-400 hover:text-[#536493]'}`
    }
  >
    <i>Update Profile</i>
  </NavLink>

  <NavLink 
    to="/userProfile" 
    className={({ isActive }) =>
      ` ${isActive ? 'active text-[#536493] text-3xl font-extrabold' : 'font-thin text-xl text-gray-400 hover:text-[#536493]'}`
    }
  >
    <i>User profile</i>
  </NavLink>

    </>
  );

  return (
    <div className="navbar bg-base-100 fixed  backdrop-blur-xl bg-white/30 z-50 pt-3 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
         <div id='logo' className='flex relative'>
          <div className=' absolute -top-3 left-3 -rotate-12'>

          <img className='w-14 animate__animated animate__fadeInTopLeft animate__infinite
          animate__slower animate__delay-5s' src={logo} alt="" />
          </div>
          <Link to="/" className="font-bold text-primary text-2xl md:text-3xl lg:text-5xl
           ml-10 z-10
         ">
        <>  EcoTrailblazers</>
        </Link>
         </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
      </div>
      <div className="navbar-end ">
      
          {user?.email ? (
            <div className="flex gap-2 justify-center items-center">
              <div className="user-info relative ">
                <img src={user.photoURL} alt="" 
                className="ring-2 ring-offset-4 ring-primary w-10 h-10 rounded-full" />
                <div
                  className="user-name absolute bottom--10 left-0 w-full text-xs  text-center
            font-semibold p-2 rounded opacity-0 transition-opacity duration-300"
                >
                  {user.displayName }
                </div>
              </div>
              <button className="btn bg-primary mx-4 text-white   lg:text-xl"
               onClick={handleSignOut}>logout</button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn bg-primary mr-4 text-white   lg:text-xl">
                Login</button>
            </NavLink>
          )}
      
      </div>
    </div>
  );
};

export default Navbar;
