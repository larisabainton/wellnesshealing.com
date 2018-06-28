import React from 'react';

class Intro extends React.Component {
    constructor({ title, text }) {
        super();
        this.title = title;
        this.text = text;
    }

    render() {
        return (
            <div className="intro" id="intro">
                <div className="content">
                    <h1 className="intro-title title">
                        {this.title}
                    </h1>
                    <div className="intro-text">
                        {this.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;
