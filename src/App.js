import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import Progress from './components/progress'

import { getQuizes } from './actions/'
import QuizeBox from './components/quize-box'

function App() {
  const quizes = useSelector((state) => state.quizes);
  const loadingQuizes = useSelector((state) => state.loadingQuizes);

  const dispatch = useDispatch();

  const [quizeNum, setQuizeNum] = useState(0);

  const [answers, setAnswers] = useState([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);

  useEffect(() => {
    if (!loadingQuizes && quizes.length === 0) {
      dispatch(getQuizes());
    }

    if (quizes.length > 0) {
      const quize = quizes[quizeNum];

      const index = Math.floor(
        Math.random() * (quize.incorrect_answers.length + 1)
      );

      setCorrectAnswerIndex(index);

      let array = [...quize.incorrect_answers];
      array.splice(index, 0, quize.correct_answer);

      setAnswers(array);
    }
  }, [loadingQuizes]);

  const handleNextClick = () => {
    setQuizeNum(quizeNum + 1);
  }

  return (
    <div className='App'>
      <Progress val={(quizeNum + 1) * 5} />
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <div className='col-sm-8 col-md-6 mt-5'>
            <h3 style={{ textAlign: 'left' }}>Question {quizeNum + 1} of 20</h3>
            {loadingQuizes ? (
              "loading..."
            ) : quizes.length > 0 ? (
                <QuizeBox
                  quize={quizes[quizeNum]}
                  onNextClick={handleNextClick}
                  correctAnswerIndex={correctAnswerIndex}
                  answers={answers}
                />
            ): null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
