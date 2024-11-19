// import React from 'react';

import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center items-center py-20 gap-6">
        <h1 className="font-bold text-4xl md:text-5xl text-gray-800">Welcome,</h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-600">
          {user.displayName || "User"}!
        </h2>
        <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8 w-full max-w-lg mt-8">
          <div className="flex justify-center mb-6">
            <img
              src={user.photoURL || "no photo"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700">Email: <span className="font-semibold">{user.email}</span></p>
            <p className="text-lg text-gray-700">Name: <span className="font-semibold">{user.displayName || "No Name Set"}</span></p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleUpdateProfile}
            className="btn btn-primary px-6 py-3 text-white font-semibold text-lg bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
