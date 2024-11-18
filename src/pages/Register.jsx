// import React from 'react';

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    registerUser(email, password).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Navbar></Navbar>
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
                  name="photoUrl"
                  placeholder="photoUrl"
                  className="input input-bordered"
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
