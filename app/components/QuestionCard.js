export default function QuestionCard({ question, options, onAnswer }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{question}</h2>
        <ul className="space-y-3">
          {options.map((option, index) => (
            <li key={index}>
              <button
                className="w-full text-left px-4 py-2 bg-purple-100 hover:bg-purple-300 rounded transition"
                onClick={() => onAnswer(index)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  