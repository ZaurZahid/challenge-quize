import React, { useState } from 'react'

import ScoreBar from './scorebar'

import './quize-box.css'

const QuizeBox = ({ quize, onNextClick, correctAnswerIndex, answers }) => {
    const [answerIndex, setAnswerIndex] = useState(-1);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [answerCount, setAnswerCount] = useState(0);
    
    let stars = 1;
    switch (quize.difficulty) {
        case "easy":
            stars = 1;
            break;
        case "medium":
            stars = 2;
            break;
        case "hard":
            stars = 3;
            break;
        default:
            stars = 0;
            break;
    }

    const handleClickAnswer = (index, correct) => {
        setAnswerIndex(index);

        if (correct) {
            const ccount = correctAnswerCount + 1;
            setCorrectAnswerCount(ccount);
        }

        const count = answerCount + 1;
        setAnswerCount(count);
    }
    
    return (
        <div>
            <p className="text-secondary m-0">{unescape(quize.category)}</p>
            {[1, 2, 3, 4, 5].map((index) => {
                if (index <= stars) return <span className='fa fa-star' key={index} />;
                else return <span className='fa fa-star unchecked' key={index} />;
            })}
            <h5 className='mt-4'>{unescape(quize.question)}</h5>

            <div className='d-flex flex-wrap mt-5 justify-content-between'>
                {answers.map((answer, index) => {
                    let correct = false;
                    if (index === correctAnswerIndex) {
                        correct = true;
                    }
                    return (
                        <button type='button' className={
                            'btn btn-secondary my-4' + (index === answerIndex ? ' bg-dark':"")
                        }
                            style={{ width: 256 }}
                            onClick={() => {
                                handleClickAnswer(index, correct);
                            }}
                            disabled={answerIndex !== -1}
                            key={index}
                        >
                            {unescape(answer)}
                        </button>
                    );
            })}
            </div>

            <div className='col d-flex flex-column align-items-center mt-3 mb-5'>
                <h3>
                    {answerIndex !== -1
                        ? answerIndex === correctAnswerIndex
                            ? "Correct!"
                            : "Sorrry!"
                        : ""}
                </h3>
                < br />
                {answerIndex !== -1 && answerCount < 20 ? (
                    <button
                        type="button"
                        className="btn btn-outline-dark"
                        style={{ width: 256 }}
                        onClick={() => {
                            setAnswerIndex(-1);
                            onNextClick();
                        }}
                    >Next Question</button>
                ):null}
            </div>
            {
                <ScoreBar
                    val1={correctAnswerCount * 5}
                    val2={answerCount ? (correctAnswerCount / answerCount) * 100 : 0}
                    val3={(correctAnswerCount + (20 - answerCount)) * 5}
                />
            }
        </div>
    )
}

export default QuizeBox;