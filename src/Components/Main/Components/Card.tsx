import React, { useEffect, useState } from 'react';

type CardProps = {
    question: string;
    answers: string[];
    isFlipped: boolean;
    onClick: () => void;
}

export default function Card({ question, answers, isFlipped, onClick}: CardProps) {
    return (
        <div className='card' onClick={onClick}>
            <div className="title">
                <p>{isFlipped ? 'Antwoord' : 'Vraag'}</p>
            </div>

            {!isFlipped && (
                <div className="question">
                    <h1>{question}</h1>
                </div>
            )}

            {isFlipped && (
                <div className="answers">
                    {answers.length === 1 ? (
                        <p>{answers[0]}</p>
                    ) : (
                        <ul>
                            {answers.map((answer: string, index: number) => (
                                <li key={index}>{answer}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}
