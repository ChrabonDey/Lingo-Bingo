import { useContext, useState } from "react";
import { authContext } from "../Authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, manageProfile } = useContext(authContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await manageProfile(name, photo);
      alert("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="card bg-white shadow-lg p-6 rounded-lg w-full max-w-md"
      >
        <h2 className="text-center text-xl font-bold mb-6">Update Profile</h2>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter your photo URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
