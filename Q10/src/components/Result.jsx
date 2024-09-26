import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const score = useSelector((state) => state.quiz.score);
  return (
    <div>
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Result;
