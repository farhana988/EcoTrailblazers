import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { toast, ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const location = useLocation();
  const { forgetPass } = useContext(authContext); 
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromQuery = params.get("email");
    if (emailFromQuery) {
      setEmail(emailFromQuery);
    }
  }, [location]);

  const handleResetPassword = () => {
    if (!email) {
          toast.error("please set an email", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
         
            });}
    forgetPass(email)
      .then(() => {
        toast.success('Password reset email sent! Please check your inbox.', {
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
        
        window.open ( 'https://mail.google.com', "_blank"); 
        
      })
      .catch((error) => {
        console.error("Error sending password reset email: ", error.message);
      });
  };
  
  return (
    <div className="hero bg-base-200 py-32">
      <div className="hero-content flex-col">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-14 text-primary 
          active animate__animated animate__heartBeat animate__infinite animate__slower animate__delay-5s">
          Forgot Password ?
        </h2>
        <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl shadow-primary">
          <form className="card-body w-96 lg:w-[500px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-2xl text-gray-600">Email</span>
              </label>
              <input
                type="email"
                value={email}
                className="input input-bordered text-black"
                onChange={(e) => setEmail(e.target.value)}  
                required
                
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="button"
                className="btn bg-primary text-white font-bold text-2xl"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
