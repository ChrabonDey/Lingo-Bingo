import CountUp from 'react-countup';
import { FaUsers, FaBook, FaLanguage, FaChalkboardTeacher } from 'react-icons/fa';

const Success = () => {
  return (
    <div>

      <div className="py-12 bg-gradient-to-b from-gray-100 to-blue-50 w-11/12 mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-black">Our <span className='bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent'>Achievements</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-blue-600 text-4xl">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Count</h3>
              <p className="text-4xl font-bold text-blue-600">
                <CountUp end={1200} duration={4} />
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-green-600 text-4xl">
                <FaBook />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lesson Count</h3>
              <p className="text-4xl font-bold text-green-600">
                <CountUp end={50} duration={4} />
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-red-600 text-4xl">
                <FaLanguage />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vocabulary Count</h3>
              <p className="text-4xl font-bold text-red-600">
                <CountUp end={200} duration={4} />
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-purple-600 text-4xl">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tutorial Count</h3>
              <p className="text-4xl font-bold text-purple-600">
                <CountUp end={30} duration={4} />
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-600 p-10 rounded-lg shadow-xl text-white">
        <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide">
          Why Choose Lingo Bingo?
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          Lingo Bingo offers a comprehensive language learning experience, blending interactive lessons with engaging real-world examples. Our platform keeps learning fun, motivating, and easy-to-follow for every learner.
        </p>
        <ul className="text-lg space-y-3 list-inside list-disc max-w-xl mx-auto">
          <li className="flex items-center">
            <span className="inline-block mr-3 bg-white rounded-full p-2 text-indigo-600 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Interactive and user-friendly platform with a smooth learning curve.
          </li>
          <li className="flex items-center">
            <span className="inline-block mr-3 bg-white rounded-full p-2 text-indigo-600 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Tailored content for multiple languages with real-world examples.
          </li>
          <li className="flex items-center">
            <span className="inline-block mr-3 bg-white rounded-full p-2 text-indigo-600 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Track your progress and achieve new milestones on your language journey.
          </li>
        </ul>
      </div>

      
      <section className='mt-14'>
  <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div className="mb-10 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          We have some User.
        </h2>
      </div>

      <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
       
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">User</p>
            </div>
          </div>
          <p className="mt-8">Lingo Bingo appears to be a well-thought-out language-learning platform that combines fun and interactive methods with educational tools to help users learn new languages. The use of modern design elements, responsive layouts, and user-focused content makes it a strong contender in the language-learning app space</p>
        </div>

       
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">User</p>
            </div>
          </div>
          <p className="mt-8">Lingo Bingo appears to be a well-thought-out language-learning platform that combines fun and interactive methods with educational tools to help users learn new languages. The use of modern design elements, responsive layouts, and user-focused content makes it a strong contender in the language-learning app space</p>
        </div>

      
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/18.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">User</p>
            </div>
          </div>
          <p className="mt-8">Lingo Bingo appears to be a well-thought-out language-learning platform that combines fun and interactive methods with educational tools to help users learn new languages. The use of modern design elements, responsive layouts, and user-focused content makes it a strong contender in the language-learning app space</p>
        </div>

        
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">User</p>
            </div>
          </div>
          <p className="mt-8">Lingo Bingo appears to be a well-thought-out language-learning platform that combines fun and interactive methods with educational tools to help users learn new languages. The use of modern design elements, responsive layouts, and user-focused content makes it a strong contender in the language-learning app space</p>
        </div>

       
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/62.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">Andy Doe</h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">User</p>
            </div>
          </div>
          <p className="mt-8">Lingo Bingo appears to be a well-thought-out language-learning platform that combines fun and interactive methods with educational tools to help users learn new languages. The use of modern design elements, responsive layouts, and user-focused content makes it a strong contender in the language-learning app space</p>
        </div>

     
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">User</p>
            </div>
          </div>
          <p className="mt-8">Lingo Bingo appears to be a well-thought-out language-learning platform that combines fun and interactive methods with educational tools to help users learn new languages. The use of modern design elements, responsive layouts, and user-focused content makes it a strong contender in the language-learning app space</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Success;
