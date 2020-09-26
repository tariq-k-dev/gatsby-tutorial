import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SiteDataStaticQuery = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
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
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  />
);

export default SiteDataStaticQuery;
