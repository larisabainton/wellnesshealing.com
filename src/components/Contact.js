import React from 'react';

export default function Contact({ title, text}) {
    return (
        <div className='contact' id='contact'>
            <div className='content'>
                <h1 className='contact-title title'>{title}</h1>
                <div className='contact-text'>{text}</div>
                <div className='contact-form'>
                    <form method='post'>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='email' name='email' placeholder='Email' />
                        <textarea name='message' placeholder='Message' rows='6' />
                        <input type='submit' value='Send Message' />
                    </form>
                </div>
            </div>
        </div>
    )
}