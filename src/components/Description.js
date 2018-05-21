import React from 'react';

export default function Description({ header, title, index, text}) {
    return (
        <div id={'description-' + index} className={'description'}>
            <div className='content'>
                <h1 className='description-title title'>{title}</h1>
                <div className='description-text'>{text}</div>
            </div>
        </div>
    )
};