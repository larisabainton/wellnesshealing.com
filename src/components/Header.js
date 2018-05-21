import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, titles }) => (
  <div className='header' >
      <h1 className='header-title title'>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      {titles.map((title, index) => <a className='header-link' href={'#description-'+ index}>{title}</a>)}
      <a className='header-link' href='#gallery'>Gallery</a>
      <a className='header-link' href='#contact'>Contact</a>
  </div>
)

export default Header
