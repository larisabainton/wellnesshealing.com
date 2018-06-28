import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {
    constructor({ siteTitle, titles }) {
        super();
        this.siteTitle = siteTitle;
        this.titles = titles;
    }

    render() {
        return (
            <div className="header">
                <h1 className="header-title title">
                    <Link to="/">
                        {' '}
                        {this.siteTitle}
                        {' '}
                    </Link>
                </h1>
                {this.titles.map((title, index) => (
                    <a className="header-link" href={`#description-${index}`} key={title}>
                        {title}
                    </a>
                ))}
                <a className="header-link" href="#gallery">
                    {'Gallery'}
                </a>
                <a className="header-link" href="#contact">
                    {'Contact'}
                </a>
            </div>
        );
    }
}

export default Header;
