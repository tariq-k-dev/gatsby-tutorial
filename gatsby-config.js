/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'GatsbyJS Tutorial',
    siteUrl: 'http://127.0.0.1:8001',
    description: 'A Gatsby.js tutorial code along',
    data: ['Array item #1', 'Array item #2', 'Array item #3'],
    person: {
      name: 'Tariq Khan',
      age: '56'
    }
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components'
  ],
};
