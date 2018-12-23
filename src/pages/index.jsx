import PropTypes from 'prop-types';
import React from 'react';
import Intro from '../components/Intro';
import Description from '../components/Description';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

const getSection = (name, sections) => sections.find(section => section.name === name);

export default function IndexPage({ data }) {
    const { descriptions, sections } = data.site.siteMetadata;

    const intro = getSection('intro', sections);
    const gallery = getSection('gallery', sections);
    const contact = getSection('contact', sections);

    return (
        <div>
            <Intro title={intro.title} text={intro.text} />
            { descriptions.map((desc, index) => (
                <Description
                    title={desc.title}
                    key={desc.title}
                    index={index}
                    text={desc.text}
                />
            ))
            }
            <Gallery
                title={gallery.title}
                text={gallery.text}
                videos={gallery.videos}
            />
            <Contact title={contact.title} text={contact.text} />
        </div>
    );
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                descriptions: PropTypes.arrayOf(PropTypes.shape({
                    title: PropTypes.string,
                    text: PropTypes.string,
                })),
                sections: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                    title: PropTypes.string,
                    text: PropTypes.string,
                })),
            }),
        }),
    }).isRequired,


};

export const query2 = graphql`
  query PageQuery {
    site {
      siteMetadata {
        sections {
          name
          title
          text
          videos
        }
        descriptions {
          title
          text
        }
      }
    }
  }
`;
