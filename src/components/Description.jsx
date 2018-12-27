import Parser from 'html-react-parser';
import React from 'react';

class Description extends React.Component {
    constructor({ title, index, text }) {
        super();
        this.title = title;
        this.index = index;
        this.text = text;
    }

    render() {
        return (
            <div id={`description-${this.index}`} className="description">
                <div className="image" />
                <div className="content-image" />
                <div className="content-text">
                    <h1 className="description-title title">
                        {this.title}
                    </h1>
                    <div className="description-text">
                        {Parser(this.text)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;
