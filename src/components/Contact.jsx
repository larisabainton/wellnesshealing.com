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
                <div className="image" />
                <div className="content">
                    <h1 className="contact-title title">
                        {this.title}
                    </h1>
                    <div className="contact-text">
                        {this.text}
                    </div>
                    <div className="contact-form">
                        <form action="https://formspree.io/val+info@wellnesshealing.com" method="post">
                            <input type="text" name="name" placeholder="Name" />
                            <input type="text" name="email" placeholder="Email" />
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
