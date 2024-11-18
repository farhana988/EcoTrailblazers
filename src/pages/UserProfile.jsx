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
   
    navigate('/updateProfile');
  };

  return (
    <div className="flex flex-col justify-center items-center my-20 gap-10">
      <h2 className="text-5xl">Welcome, {user.displayName || 'User'}!</h2>
      <div className="flex flex-col gap-3 card-body shadow-2xl rounded-2xl">
        <div className="flex items-center justify-center">
        <img
          src={user.photoURL || 'default-avatar.png'}
          alt="Profile"
          className="w-20 rounded-full"
        />
        </div>
        <p >Email: {user.email}</p>
        <p>Name: {user.displayName || 'No Name Set'}</p>
        <p>Photo URL: {user.photoURL || 'No Photo Set'}</p>
      </div>
      <button onClick={handleUpdateProfile} className="btn btn-primary">
        Update Profile
      </button>
    </div>
  );
};

export default UserProfile;