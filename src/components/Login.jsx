import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import googleLogo from "../assets/google-logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { toast, ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { signIn, signInWithGoogle,} = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        navigate(location.state?.from || '/');
        console.log(res);
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom, 
        });
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        navigate(location.state?.from || '/');
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom, 
        });
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
      navigate(`/forgetPassword?email=${email}`);
        
       
  };

  return (
    <div>
      <div className="hero bg-base-200 py-32">
        <div className="hero-content flex-col ">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14 text-primary 
          active animate__animated animate__heartBeat animate__infinite animate__slower animate__delay-5s">
            Login Form
          </h2>
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl shadow-primary">
            <form onSubmit={handleSubmit} className="card-body w-96 lg:w-[500px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl text-gray-600">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
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
                <label onClick={handleForgetPass} className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-xl text-gray-500"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-primary text-white font-bold text-2xl">Login</button>
              </div>

              <h2 className="text-lg mt-3 flex items-center gap-2">
                No account yet?{" "}
                <Link to="/reg">
                  <span className=" flex items-center gap-4  text-primary active text-2xl font-extrabold">
                    <FaLongArrowAltRight />Register
                  </span>
                </Link>
              </h2>
            </form>

            <div className="divider text-primary font-bold text-xl">OR</div>
            <div className="space-y-4">
              <button
                onClick={handleGoogleLogIn}
                className="pb-8 w-full flex items-center justify-center gap-2"
              >
                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
