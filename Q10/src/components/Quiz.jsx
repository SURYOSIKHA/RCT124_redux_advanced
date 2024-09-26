import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from '../thunk/quizThunk';
import { updateScore } from '../redux/actions/quizActions';

const Quiz = () => {
  const dispatch = useDispatch();
  const { quiz, loading, error } = useSelector((state) => state.quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const handleSkip = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = () => {
    dispatch(updateScore(1));
    setCurrentQuestion(currentQuestion + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (currentQuestion >= quiz.length) {
    return <p>Quiz Completed!</p>;
  }

  const question = quiz[currentQuestion];

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index}>{option}</button>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleSkip}>Skip</button>
    </div>
  );
};

export default Quiz;
