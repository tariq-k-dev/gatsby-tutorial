/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'GatsbyJS Tutorial',
    author: 'Tariq Khan',
    siteUrl: 'http://127.0.0.1:8001',
    description: 'A Gatsby.js tutorial code along',
    queryArray: ['GraphQL Page Query', 'GraphQL StaticQuery by importing the useStaticQuery hook', 'Only use Page Queries with in a Gatsby page, not a component'],
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
