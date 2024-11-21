import img from "../assets/preview.jpg";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen relative">
        <div className="hero-content flex-col lg:flex-row-reverse relative z-10">
          
          <div className="relative">
           
            <img
              src={img}
              className="max-w-sm rounded-full  shadow-2xl animate__animated animate__zoomInDown animate__slow  animate__slow"
              alt="Preview"
            />
          </div>
          
          <div className="w-6/12">
            <h1 className="text-5xl font-bold">
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
            <p className="py-6">
              It is a beautiful platform for learning a new language for you. So
              lets go and make our life very meaningful!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
