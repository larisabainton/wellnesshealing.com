import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaLink = ({ icon, link }) => (
    <a className="social-media" href={link}>
        <FontAwesomeIcon icon={['fab', icon]} />
    </a>
);

SocialMediaLink.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

class Footer extends React.Component {
    constructor({
        facebookLink, twitterLink, instagramLink, linkedInLink, name,
    }) {
        super();
        this.facebook = facebookLink ? <SocialMediaLink icon="facebook-f" link={facebookLink} /> : '';
        this.twitter = twitterLink ? <SocialMediaLink icon="twitter" link={twitterLink} /> : '';
        this.instagram = instagramLink ? <SocialMediaLink icon="instagram" link={instagramLink} /> : '';
        this.linkedIn = linkedInLink ? <SocialMediaLink icon="linkedin-in" link={linkedInLink} /> : '';
        this.name = name;
    }

    render() {
        return (
            <div className="footer">
                {this.facebook}
                {this.twitter}
                {this.instagram}
                {this.linkedIn}
                <i className="far fa-copyright" />
                {this.name}
            </div>
        );
    }
}

export default Footer;
