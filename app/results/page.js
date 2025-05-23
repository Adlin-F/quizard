'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import questions from '../quiz/questions';
import ResultSummary from '../components/ResultSummary';

function ResultsContent() {
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

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
