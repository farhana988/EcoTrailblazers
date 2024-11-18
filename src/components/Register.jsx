// import React from 'react';

import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { authContext } from "../provider/AuthProvider";

const Register = () => {
  const { registerUser,manageProfile } = useContext(authContext);

  const [error,setError]=useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;

    // console.log(email, password);


    if(password.length<6){
      setError("Password must contain at least 6 characters")
      return 
    }
    if(!/[a-z]/.test(password)){
      setError("Password must contain at least one lowercase letter")
      return;
  }
  if(!/[A-Z]/.test(password)){
      setError("Password must contain at least one uppercase letter")
      return;
  }

    registerUser(email, password).then(res => {
      manageProfile(name,image)
      console.log(res)
    });
  };
  return (
    <div>
      
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="card-body w-96 lg:w-[500px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-2xl text-gray-600">
                    Name
                  </span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600  font-bold text-2xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600  font-bold text-2xl">
                    Photo Url
                  </span>
                </label>
                <input
                  type="photoUrl"
                  name="image"
                  placeholder="photoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600  font-bold text-2xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <h2 className="text-lg mt-3">
                Already have an account?{" "}
                <Link to="/login">
                  <span className=" ml-5  text-blue-600 font-semibold">
                    Log in
                  </span>
                </Link>
              </h2>
            </form>
            {
              error && <p className="text-red-900">{error}</p>
            }
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Register;