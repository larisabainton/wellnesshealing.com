module.exports = {
  siteMetadata: {
    title: 'Basic Website Template',
    description: 'Sample',
    content: 'Sample',
    name: 'Sample Name',
    links: [
      { name: 'facebook', url: 'https://www.facebook.com' },
      { name: 'twitter', url: 'https://www.twitter.com'},
      { name: 'instagram', url: 'https://www.instagram.com'},
      { name: 'linkedIn', url: 'https://www.linkedin.com'}
    ],
    sections: [
      { name: 'intro', title: 'Hey', text: 'Hey this is the intro'},
      { name: 'gallery', title: 'Gallery',text: 'Here is some text about what I do'},
      { name: 'contact', title: 'Say Hello.', text: 'Keep in touch'}
    ],
    descriptions: [
      { headerTitle: 'About Me', title: 'Section 1 Title', text: 'This is the text for section 1'},
      { headerTitle: 'What I Do', title: 'Section 2 Title', text: 'This is the text for section 2'},
    ],
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass'],
}
