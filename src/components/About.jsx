
import img from "../assets/preview-Photoroom.jpg"
const About = () => {
  return (
    <div className=" py-12 text-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        
        <h2 className="text-5xl font-extrabold text-center mb-8 text-black">
          About <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">Lingo Bingo</span>
        </h2>

       
        <p className="text-lg leading-relaxed text-center text-gray-600 mb-8 font-bold">
          Lingo Bingo is an <span className="text-blue-600 font-bold">innovative</span> and <span className="text-blue-600 font-medium">interactive</span> platform designed to make learning languages fun, engaging, and effective.
          Whether your a beginner or an advanced learner, our app empowers you to enhance your skills with ease.
        </p>

        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h3 className="text-5xl font-bold text-blue-700 mb-4">What We Offer</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-4">✓</span>
                <p className="text-gray-600 leading-relaxed">
                   Learn vocabulary with detailed pronunciation guides and examples.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-4">✓</span>
                <p className="text-gray-600 leading-relaxed">
                   Master new words through fun, interactive cards.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-4">✓</span>
                <p className="text-gray-600 leading-relaxed">
                   Access lessons in multiple languages.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-4">✓</span>
                <p className="text-gray-600 leading-relaxed">
                   Log in safely through Firebase authentication.
                </p>
              </li>
            </ul>
          </div>

         
          <div className="relative">
            <img
              src={img}
              alt="Language Learning Illustration"
              className=" rounded-e-full shadow-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
