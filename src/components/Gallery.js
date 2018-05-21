import React from 'react';

export default function Gallery({ title, text }) {
    return (
        <div className='gallery' id='gallery'>
            <div className='content'>
                <h1 className='gallery-title title'>{title}</h1>
                <div className='gallery-text'>{text}</div>
                <div className='gallery-images'></div>
            </div>
        </div>
    );
};