import React from 'react';
import Item from './Components/Item';

type HeaderProps = {
    fileNames: string[];
    onClick: (index: number) => void;
    activeIndex: number;
}

export default function Header({fileNames, onClick, activeIndex}: HeaderProps) {
    return (
        <div className='header'>
            {fileNames.map((fileName: string, index: number) => (
                <Item key={index} fileName={fileName} onClick={() => onClick(index)} isActive={activeIndex === index} />
            ))}
        </div>
    )
}