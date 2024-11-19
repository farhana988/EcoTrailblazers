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
    <div>
      <div className="hero  bg-green-50 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl">
            <h2 className="text-3xl font-semibold text-center text-gray-800 my-6">
              Update Your Profile
            </h2>
            <form
              className="card-body w-96 lg:w-[500px]"
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
                <button className="btn btn-primary px-6 py-3 text-white font-semibold text-lg bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300" type="submit">
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
