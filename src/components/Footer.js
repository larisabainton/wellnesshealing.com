import React from 'react';

const SocialMediaLink = ({ icon, link }) => <a className={'social-media fab ' + icon} href={link} />

class Footer extends React.Component {
    constructor ({ facebookLink, twitterLink, instagramLink, linkedInLink, name }) {
        super();
        this.facebook = facebookLink ? <SocialMediaLink icon='fa-facebook-f' link={facebookLink} /> : '';
        this.twitter = twitterLink ? <SocialMediaLink icon='fa-twitter' link={twitterLink} /> : '';
        this.instagram = instagramLink ? <SocialMediaLink icon='fa-instagram' link={instagramLink} /> : '';
        this.linkedIn = linkedInLink ? <SocialMediaLink icon='fa-linkedin-in' link={linkedInLink} /> : '';
        this.name = name;
    }

    render() {
        return (
            <div className="footer">
                {this.facebook}
                {this.twitter}
                {this.instagram}
                {this.linkedIn}
                <i className='far fa-copyright' />
                {this.name}
            </div>
        )
    }
}

export default Footer;