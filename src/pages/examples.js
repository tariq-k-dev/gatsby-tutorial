import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SiteData from '../examples/SiteData';

// Example of how to use Page Query
export const dataQuery = graphql`
  query DataQuery {
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

const QueryExample = ({ data }) => {
  // const { queryArray } } = data.site.info;
  const { site: { info: { queryArray } } } = data;

  return (
    <Layout>
      <>
        <h1>
          Examples -
          {' '}
          {queryArray[0]}
        </h1>
        <SiteData />
      </>
    </Layout>
  );
};

QueryExample.propTypes = {
  data: PropTypes.shape,
  queryArray: PropTypes.arrayOf
};

QueryExample.defaultProps = {
  data: {},
  queryArray: []
};

export default QueryExample;
