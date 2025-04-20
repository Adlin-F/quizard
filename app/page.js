'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-8 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Quizard!</h1>
      <p className="text-lg text-gray-700 mb-8">Test your knowledge and challenge yourself!</p>
      <button
        onClick={() => router.push('/quiz')}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
      >
        Start Quiz
      </button>
    </div>
  );
}
