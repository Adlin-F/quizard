'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import questions from './questions';
import QuestionCard from '../components/QuestionCard';

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      router.push(`/results?score=${score + (selected === questions[current].answer ? 1 : 0)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <QuestionCard
        question={questions[current].question}
        options={questions[current].options}
        onAnswer={handleAnswer}
      />
      <p className="mt-6 text-gray-600">
        Question {current + 1} of {questions.length}
      </p>
    </div>
  );
}
