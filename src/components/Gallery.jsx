import React from 'react';

class Gallery extends React.Component {
    constructor({ title, text }) {
        super();
        this.title = title;
        this.text = text;
    }

    render() {
        return (
            <div className="gallery" id="gallery">
                <div className="content">
                    <h1 className="gallery-title title">
                        {this.title}
                    </h1>
                    <div className="gallery-text">
                        {this.text}
                    </div>
                    <div className="gallery-images" />
                </div>
            </div>
        );
    }
}

export default Gallery;
