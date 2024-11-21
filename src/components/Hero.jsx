import img from "../assets/preview.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen md:relative">
        <div className="hero-content flex-col lg:flex-row-reverse md:relative md:z-10 gap-6 lg:gap-12">
         
          <div className="relative flex justify-center lg:justify-end w-full lg:w-6/12">
            <img
              src={img}
              className="max-w-full sm:max-w-md sm:max-h-md rounded-full shadow-2xl animate__animated animate__zoomInDown animate__slow"
              alt="Preview"
            />
          </div>

        
          <div className="w-full lg:w-6/12 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Lingo{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Bingo
              </span>{" "}
              is your Learning{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Language
              </span>{" "}
              Platform
            </h1>
            <p className="py-4 text-sm sm:text-base lg:text-lg">
              It is a beautiful platform for learning a new language for you. So
              let's go and make our life very meaningful!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
