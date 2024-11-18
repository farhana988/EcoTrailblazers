import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { authContext } from "../provider/AuthProvider";
import googleLogo from "../assets/google-logo.png";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        navigate(location.state?.from); 
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle().then((res) => {
      console.log(res);
      navigate(location.state?.from );
    });
  };

  return (
    <div>
     
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body w-96 lg:w-[500px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl text-gray-600">Email</span>
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
                  <span className="label-text font-bold text-2xl text-gray-600">Password</span>
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
                    className="label-text-alt link link-hover text-xl text-gray-500"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold text-2xl">Login</button>
              </div>

              <h2 className="text-lg mt-3">
                No account yet?{" "}
                <Link to="/reg">
                  <span className="ml-5 text-blue-600 font-semibold">Register</span>
                </Link>
              </h2>
            </form>

            <div className="divider">OR</div>
            <div className="space-y-4">
              <button
                onClick={handleGoogleLogIn}
                className="pb-8 w-full flex items-center justify-center gap-2"
              >
                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
            </div>

            {/* Display Error Message */}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
