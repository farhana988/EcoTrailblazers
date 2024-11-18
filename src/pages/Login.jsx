// import React from 'react';

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import googleLogo from "../assets/google-logo.png";

const Login = () => {
  const { signIn } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password).then((res) => {
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
                  <span className="label-text font-bold text-2xl text-gray-600">
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
                  <span className="label-text font-bold text-2xl text-gray-600">
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
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover  text-xl"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold text-2xl">
                  Login
                </button>
              </div>
              <h2 className="text-lg mt-3">
                No account yet?{" "}
                <Link to="/reg">
                  <span className=" ml-5  text-blue-600 font-semibold">
                    Register
                  </span>
                </Link>
              </h2>
            </form>
            <div className="divider">OR</div>
            <div className="space-y-4">
              <button className="btn  w-full flex items-center justify-center gap-2">
                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
