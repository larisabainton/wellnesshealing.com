import Parser from 'html-react-parser';
import React from 'react';

class Gallery extends React.Component {
    constructor({
        title, text, videos,
    }) {
        super();
        this.title = title;
        this.text = text;
        this.videos = videos;
    }

    render() {
        return (
            <div className="gallery" id="gallery">
                <div className="image" />
                <div className="content">
                    <h1 className="gallery-title title">
                        {this.title}
                    </h1>
                    <div className="gallery-text">
                        {this.text}
                    </div>
                    <div className="gallery-videos">
                        {Parser(this.videos)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
