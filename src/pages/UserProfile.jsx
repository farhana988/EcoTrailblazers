// import React from 'react';

import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import 'animate.css';
const UserProfile = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  if (!user) {
    return <h1>Loading...</h1>;
  }

  const handleUpdateProfile = () => {
    navigate("/updateProfile");
  };

  return (
    <div className="py-32  lg:py-60  bg-green-50 px-5">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="font-bold text-4xl md:text-5xl text-primary animate__animated animate__heartBeat animate__infinite
          animate__slower animate__delay-5s">
            <i>Welcome</i>
            </h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-600">
          {user.displayName || "User"}!
        </h2>
        <div className="flex flex-col items-center  shadow-2xl shadow-primary rounded-2xl
         py-20 w-full max-w-xl my-8 bg-white">
          <div className="flex justify-center mb-6">
            <img
              src={user.photoURL || "no photo"}
              alt="Profile"
              className="ring-4 ring-offset-8 ring-primary w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700">Email: <span className="font-semibold">{user.email}</span></p>
            <p className="text-lg text-gray-700">Name: <span className="font-semibold">{user.displayName || "No Name Set"}</span></p>
          </div>

          <div className="mt-8">
          <button
            onClick={handleUpdateProfile}
            className="btn bg-primary mr-4 text-white   lg:text-xl ring-1 ring-offset-8 ring-primary"
          >
            Update Profile
          </button>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default UserProfile;
