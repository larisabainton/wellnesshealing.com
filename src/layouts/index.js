import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/main.scss'

const getUrlForLink = (name, links) => links.find(link => link.name === name).url

export default function Layout({ children, data }) {
  const { title, name, description, content, descriptions, links } = data.site.siteMetadata;
    
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content },
        ]}
      />
      <Header 
        siteTitle={title}
        titles={descriptions.map(desc => desc.headerTitle)}
      />
      <div className='body' >
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
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        name
        description
        content
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
`
