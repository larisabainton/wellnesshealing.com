import React from 'react'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

import config from '../../config';

export default function IndexPage() {
  const { intro, descriptions, gallery, contact } = config;

  return (
    <div>
      <Intro title={intro.title} text={intro.text}/>
      { descriptions.map((desc, index) => <Description title={desc.title} key={index} index={index} text={desc.text} header={desc.headerTitle} />) }
      <Gallery title={gallery.title} text={gallery.text} images={gallery.images} />
      <Contact title={contact.title} text={contact.text} />
    </div>
  )
}
