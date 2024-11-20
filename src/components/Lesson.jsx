import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai"; // React Fancy Icons
import { FaInfoCircle } from "react-icons/fa";

const Lesson = () => {
  const lesson = useLoaderData();
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState(null);

  // Function to speak the word
  const speakWord = (word, language = "en-US") => {
    const utterance = new SpeechSynthesisUtterance(word);

 
    if (language === "spanish") {
      utterance.lang = "es-ES"; 
    } else {
      utterance.lang = "en-US"; 
    }

   
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-6">
      
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-6 text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold flex items-center justify-center gap-3">
          <FaInfoCircle className="text-yellow-300" /> {`Lesson ${lesson[0]?.lesson_no}`}
        </h1>
        <p className="text-lg mt-2">
          Dive into the vocabulary and master its usage effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {lesson.map((vocabulary) => (
          <div
            key={vocabulary.word}
            className={`relative card p-6 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 ${
              vocabulary.difficulty === "easy"
                ? "bg-green-100"
                : vocabulary.difficulty === "medium"
                ? "bg-yellow-100"
                : "bg-red-100"
            }`}
          >
            <h2 className="text-xl font-bold text-indigo-800">
              {vocabulary.word}
            </h2>
            <p className="text-gray-700 mt-2">
              <strong>Meaning:</strong> {vocabulary.meaning}
            </p>
            <p className="text-gray-700">
              <strong>Pronunciation:</strong> {vocabulary.pronunciation}
            </p>
            <p className="text-gray-700">
              <strong>Part of Speech:</strong> {vocabulary.part_of_speech}
            </p>
            <button
              className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center justify-center gap-2 mt-4"
              onClick={() => {
                setSelectedWord(vocabulary);
                speakWord(vocabulary.word, vocabulary.language || "en-US"); // Add language support
              }}
            >
              <FaInfoCircle /> Details
            </button>
          </div>
        ))}
      </div>

      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-2xl w-11/12 sm:w-96 relative">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">
              {selectedWord.word}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Meaning:</strong> {selectedWord.meaning}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>When to Say:</strong> {selectedWord.when_to_say}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Example:</strong> {selectedWord.example}
            </p>
            <button
              className="absolute top-2 right-2 btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center gap-1 px-3 py-1 rounded-lg"
              onClick={() => setSelectedWord(null)}
            >
              <AiOutlineClose /> Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <button
          className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-3 px-8 rounded-lg shadow-md flex items-center gap-2 justify-center transition-transform transform hover:scale-105"
          onClick={() => navigate("/learning")}
        >
          <AiOutlineArrowLeft /> Back to Lessons
        </button>
      </div>
    </div>
  );
};

export default Lesson;
