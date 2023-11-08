
import React, { useState } from 'react';

interface CardProps {
    question: string;
    answer: string[];
    onClick: () => void;
    isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({ question, answer, onClick, isFlipped }) => {


    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
            {!isFlipped &&
                <div className="question">
                    {question}
                </div>
            }

            {isFlipped &&
                <div className="answer">
                    <ul>
                       {answer.map((answer, index) => (
                           <li key={index}>{answer}</li>
                          ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Card;
