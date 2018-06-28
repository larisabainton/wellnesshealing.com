import React from 'react';

class Contact extends React.Component {
    constructor({ title, text }) {
        super();
        this.title = title;
        this.text = text;
    }

    render() {
        return (
            <div className="contact" id="contact">
                <div className="content">
                    <h1 className="contact-title title">
                        {this.title}
                    </h1>
                    <div className="contact-text">
                        {this.text}
                    </div>
                    <div className="contact-form">
                        <form method="post">
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <textarea name="message" placeholder="Message" rows="6" />
                            <input className="send-message" type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
