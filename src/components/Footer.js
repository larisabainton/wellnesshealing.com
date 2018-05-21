import React from 'react';

const SocialMediaLink = ({ icon, link }) => <a className={'social-media fab ' + icon} href={link} />

export default function Footer({ facebookLink, twitterLink, instagramLink, linkedInLink, name }) {
    const facebook = facebookLink ? <SocialMediaLink icon='fa-facebook-f' link={facebookLink} /> : '';
    const twitter = twitterLink ? <SocialMediaLink icon='fa-twitter' link={twitterLink} /> : '';
    const instagram = instagramLink ? <SocialMediaLink icon='fa-instagram' link={instagramLink} /> : '';
    const linkedIn = linkedInLink ? <SocialMediaLink icon='fa-linkedin-in' link={linkedInLink} /> : '';

    return (
        <div className="footer">
            {facebook}
            {twitter}
            {instagram}
            {linkedIn}
            <i className='far fa-copyright' />
            {name}
        </div>
    )
}
