import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Example of StaticQuery hook, the newest way to create a GraphQL query
const getData = graphql`
  query SiteDatQuery {
    site {
      info:siteMetadata {
        author
        queryArray
        description
        person {
          age
          name
        }
        siteUrl
        title
      }
    }
  }
`;

const SiteData = () => {
  const siteData = useStaticQuery(getData).site.info;
  const { author, queryArray } = siteData;

  return (
    <div>
      <h2>
        Coded by:
        {' '}
        {author}
      </h2>
      <p>
        This page uses a
        {' '}
        {queryArray[1]}
        {' '}
        to retrieve siteMetadata from the gatsby-config.js file.
      </p>
      <br />
      <p>
        Only use
        {' '}
        {queryArray[2]}
        ❗️
      </p>
      <br />
      <pre>
        {JSON.stringify(siteData, null, 4)}
      </pre>
    </div>
  );
};

export default SiteData;
