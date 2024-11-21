
import one from "../assets/133478701_10251756.jpg";
import two from "../assets/22111201_6538953.jpg";
import three from "../assets/29764882_7587973.jpg";
import four from "../assets/different-language-speech-bubble-hello-concept.jpg";

const Banner = () => {
  return (
    <div className="relative w-11/12 mx-auto h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div className="carousel w-full h-full">
        <div id="slide1" className="carousel-item relative w-full h-full transition-all duration-700">
          <img
            src={four}
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
            <div className="text-white p-6">
              <h1 className="text-3xl font-extrabold mb-2">Welcome to Lingo Bingo!</h1>
              <p className="text-lg">Learn languages in the most exciting way.</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❮</a>
            <a href="#slide2" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full transition-all duration-700">
          <img
            src={one}
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
            <div className="text-white p-6">
              <h1 className="text-3xl font-bold mb-2">Dive into Fun Learning</h1>
              <p className="text-lg">Interactive tools to make your experience enjoyable.</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❮</a>
            <a href="#slide3" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full transition-all duration-700">
          <img
            src={two}
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
            <div className="text-white p-6">
              <h1 className="text-3xl font-bold mb-2">Learn Anytime, Anywhere</h1>
              <p className="text-lg">Access our platform from any device.</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❮</a>
            <a href="#slide4" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-full transition-all duration-700">
          <img
            src={three}
            className="w-full h-full object-cover"
            alt="Slide 4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
            <div className="text-white p-6">
              <h1 className="text-3xl font-bold mb-2">Join the Lingo Community</h1>
              <p className="text-lg">Start your language journey today!</p>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❮</a>
            <a href="#slide1" className="btn btn-circle btn-outline hover:bg-white hover:text-black">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
