import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { manageProfile } = useContext(authContext);

  console.log(name, image);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    setName(name);
    setImage(image);

    manageProfile(name, image)
      .then(() => {
        navigate("/userProfile");
      })
      .catch((err) => {
        console.error("Error updating profile: ", err);
        setError("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="bg-green-50 py-32  lg:py-60">
      <h2 className="font-bold text-2xl md:text-5xl text-primary aa animate__animated animate__heartBeat animate__infinite
          animate__slower animate__delay-5s text-center mb-6">
             <i> Update Your Profile</i>
            </h2>
      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl shadow-primary">
            
            <form
              className="card-body w-96 lg:w-[500px] "
              onSubmit={handleSubmit}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-2xl text-gray-600">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 font-bold text-2xl">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="image"
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              {error && <div className="text-red-500 mt-2">{error}</div>}

              <div className="form-control mt-6">
                <button 
               className="btn bg-primary  text-white  ring-1 ring-offset-8 ring-primary lg:text-xl" type="submit">
                  Update Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
