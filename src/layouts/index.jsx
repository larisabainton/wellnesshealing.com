import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/main.scss';

library.add(faTwitter, faFacebookF, faLinkedinIn, faInstagram, faCopyright);

const getSection = (name, sections) => sections.find(section => section.name === name);

const getUrlForLink = (name, links) => {
    const matchingLink = links.find(link => link.name === name);
    return matchingLink && matchingLink.url;
};

export default function Layout({ children, data }) {
    const {
        title, name, description, content, descriptions, links, sections,
    } = data.site.siteMetadata;

    return (
        <div>
            <Helmet
                title={name}
                meta={[
                    { name: 'description', content: description },
                    { name: 'keywords', content },
                ]}
            />
            <Header
                siteTitle={title}
                titles={descriptions.map(desc => desc.headerTitle)}
                galleryTitle={getSection('gallery', sections).headerTitle}
                contactTitle={getSection('contact', sections).headerTitle}
            />
            <div className="body">
                {children()}
            </div>
            <Footer
                facebookLink={getUrlForLink('facebook', links)}
                twitterLink={getUrlForLink('twitter', links)}
                instagramLink={getUrlForLink('instagram', links)}
                linkedInLink={getUrlForLink('linkedIn', links)}
                name={name}
            />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string,
                name: PropTypes.string,
                description: PropTypes.string,
                content: PropTypes.string,
                links: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                    url: PropTypes.string,
                })),
                descriptions: PropTypes.arrayOf(PropTypes.shape({
                    headerTitle: PropTypes.string,
                })),
            }),
        }),
    }).isRequired,
};

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        name
        description
        content
        sections {
            name
            headerTitle
        }
        links {
          name
          url
        }
        descriptions {
          headerTitle
        }
      }
    }
  }
`;
