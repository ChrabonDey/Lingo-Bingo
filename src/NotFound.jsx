import { useNavigate } from "react-router-dom";
import img from "./assets/preview-removebg-preview.png"; // Ensure this path is correct

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); 
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-6xl font-bold text-red-500">4</h1>
          <img src={img} alt="Not Found" className="w-16 h-16 mx-2" />
          <h1 className="text-6xl font-bold text-red-500">4</h1>
        </div>
        <p className="text-2xl text-gray-800 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={goHome}
          className="btn btn-primary px-6 py-2 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
