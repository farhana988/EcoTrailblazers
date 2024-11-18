// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(authContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/userProfile">User profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 fixed  backdrop-blur-xl bg-white/30 z-50 ">
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

        <Link to="/" className="font-bold text-xl lg:text-3xl">
          EcoTrailblazers
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end ">
      
          {user?.email ? (
            <div className="flex gap-2 justify-center items-center">
              <div className="user-info relative ">
                <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" />
                <div
                  className="user-name absolute bottom--10 left-0 w-full text-xs  text-center
            font-semibold p-2 rounded opacity-0 transition-opacity duration-300"
                >
                  {user.displayName }
                </div>
              </div>
              <button className="btn" onClick={handleSignOut}>logout</button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn mr-4 btn-primary">Login</button>
            </NavLink>
          )}
      
      </div>
    </div>
  );
};

export default Navbar;
