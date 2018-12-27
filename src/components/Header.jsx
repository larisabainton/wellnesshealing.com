import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {
    constructor({
        siteTitle, titles, contactTitle,
    }) {
        super();
        this.siteTitle = siteTitle;
        this.titles = titles;
        this.contactTitle = contactTitle;
    }

    render() {
        return (
            <div className="header">
                <div className="image" />
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
                <a className="header-link" href="#contact">
                    {this.contactTitle}
                </a>
            </div>
        );
    }
}

export default Header;
