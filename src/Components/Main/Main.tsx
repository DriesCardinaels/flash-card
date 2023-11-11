import React, { useEffect, useState } from 'react';
import Card from './Components/Card';

type CardProp = {
    question: string;
    answer: string[];
}

export default function Main({ cards }: { cards: CardProp[] }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardIndex, setCardIndex] = useState(0);

    function onClick() {
        setIsFlipped(!isFlipped);
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.code === 'Space') {
                setIsFlipped(false);

                if (cardIndex === cards.length - 1) {
                    setCardIndex(0);
                } else {
                    setCardIndex(cardIndex + 1);
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [cardIndex]);

    return (
        <div className='body'>
            <Card
                isFlipped={isFlipped}
                question={cards[cardIndex].question}
                answers={cards[cardIndex].answer}
                onClick={onClick}
            />
        </div>
    );
}
