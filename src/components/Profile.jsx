

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider/AuthProvider";

const Profile = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  console.log(user)

  const handleUpdateProfile = () => {
    navigate("/update");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="card bg-white shadow-lg p-6 rounded-lg w-full max-w-md text-center">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{user?.displayName || "Name not set"}</h2>
        <p className="text-gray-600 mb-4">{user?.email}</p>
        <button
          onClick={handleUpdateProfile}
          className="btn btn-primary px-4 py-2"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};




export default Profile;