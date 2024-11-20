import { NavLink } from "react-router-dom";
import img from "../assets/preview-removebg-preview.png"

const Learning = () => {
 
  const lessons = Array.from({ length: 10 }, (_, index) => ({
    lesson_no: index + 1,
    title: `Lesson ${index + 1}`,
  }));

  return (
    <div>
     
      <div className=" text-black py-6 text-center">

        <h1 className="text-3xl font-extrabold">Language <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">Learning</span> Lessons</h1>
        <p className="text-lg mt-2">Explore lessons to start your learning journey!</p>
      </div>
        <div>
            <img src={img} alt=""  className="w-36 h-36 mx-auto"/>
        </div>
      
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <NavLink
            key={lesson.lesson_no}
            to={`/lesson/${lesson.lesson_no}`}
            className="group"
          >
            <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform group-hover:scale-105">
              <h2 className="text-xl font-bold text-center text-indigo-600">
                {lesson.title}
              </h2>
            </div>
          </NavLink>
        ))}
      </div>

     
      <div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-extrabold mb-4 text-center text-indigo-600">
          Learn the Alphabet
        </h2>
        <p className="text-lg mb-6 text-center">
          In this tutorial, you will learn how to pronounce the alphabet for
          this language. Watch the video below to get started.
        </p>

        
        <div className="flex justify-center items-center">
          <iframe
            className="rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o_XVt5rdpFY?si=_421rXzvjwG0K2hy"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      
      <div className="flex justify-center mt-8">
        <NavLink
          to="/tutorials"
          className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
        >
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default Learning;
