import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import config from '../../config'
import '../style/main.scss'

export default function Layout({ children, data }) {
  const { title } = data.site.siteMetadata;
  const { description, content, name } = config;
  const { facebookLink, twitterLink, instagramLink, linkedInLink } = config.link;
  
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: content },
        ]}
      />
      <Header 
        siteTitle={title}
        titles={config.descriptions.map(desc => desc.headerTitle)}
      />
      <div className='body' >
        {children()}
      </div>
      <Footer 
        facebookLink={facebookLink}
        twitterLink={twitterLink}
        instagramLink={instagramLink}
        linkedInLink={linkedInLink}
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
      }
    }
  }
`
