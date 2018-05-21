import React from 'react';

export default function Intro({ title, text }) {
    return (
        <div className="intro" id='intro'>
            <div className='content'>
                <h1 className='intro-title title'>{title}</h1>
                <div className="intro-text">{text}</div>
            </div>
        </div>
    )
}