'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import questions from '../quiz/questions';
import ResultSummary from '../components/ResultSummary';

export default function ClientResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get('score') || '0');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <ResultSummary score={score} total={questions.length} />
      <button
        onClick={() => router.push('/')}
        className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded transition"
      >
        Restart Quiz
      </button>
    </div>
  );
}
