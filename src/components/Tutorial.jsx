import { NavLink } from "react-router-dom";
import { FaBookOpen, FaPlayCircle } from "react-icons/fa"; // Icons for buttons and title

const Tutorial = () => {
  
  const videos = [
    "https://www.youtube.com/embed/t7-nb1wlnyA?autoplay=1&mute=1&loop=1&playlist=t7-nb1wlnyA",
    "https://www.youtube.com/embed/DAp_v7EH9AA?autoplay=1&mute=1&loop=1&playlist=DAp_v7EH9AA", 
    "https://www.youtube.com/embed/bK4EBWp3suk?autoplay=1&mute=1&loop=1&playlist=bK4EBWp3suk",
    "https://www.youtube.com/embed/kJQjXAVEWt0?autoplay=1&mute=1&loop=1&playlist=kJQjXAVEWt0",
    "https://www.youtube.com/embed/FRV9fvWjMHA?autoplay=1&mute=1&loop=1&playlist=FRV9fvWjMHA",
    "https://www.youtube.com/embed/hyLl_0d0EBw?autoplay=1&mute=1&loop=1&playlist=hyLl_0d0EBw",
    "https://www.youtube.com/embed/ylKWkYVNzuk?autoplay=1&mute=1&loop=1&playlist=ylKWkYVNzuk",
    "https://www.youtube.com/embed/8Ozf-mSpMFk?autoplay=1&mute=1&loop=1&playlist=8Ozf-mSpMFk",
  ];

  return (
    <div className="p-6">
     
      <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-6 text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold flex items-center justify-center gap-3">
          <FaPlayCircle className="text-yellow-300" /> Tutorial Page
        </h1>
        <p className="text-lg mt-2">
          Watch and learn! Master the basics of this language through engaging tutorials.
        </p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <iframe
              className="w-full h-48 sm:h-64 md:h-48 lg:h-64"
              src={video}
              title={`Tutorial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      
      <div className="mt-12 text-center">
        <NavLink
          to="/learning"
          className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-3 px-8 rounded-lg shadow-md flex items-center gap-2 justify-center transition-transform transform hover:scale-105"
        >
          <FaBookOpen /> Learn Vocabularies
        </NavLink>
      </div>
    </div>
  );
};

export default Tutorial;
