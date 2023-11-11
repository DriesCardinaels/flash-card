import React from 'react';

type ItemProps = {
    fileName: string;
    onClick: any;
    isActive: boolean;
}

export default function Item({fileName, onClick, isActive}: ItemProps) {
    const className = isActive ? 'item active' : 'item';

    return (
        <div className={className} onClick={onClick}>
            {fileName}
        </div>
    )
}