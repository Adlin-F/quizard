export default function ResultSummary({ score, total }) {
    const isPerfect = score === total;
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Score: {score} / {total}
        </h2>
        <p className="text-lg text-gray-600">
          {isPerfect ? "Perfect score! 🎉" : "Nice effort! Try again to improve!"}
        </p>
      </div>
    );
  }
  