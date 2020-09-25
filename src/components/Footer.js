import React from 'react';

import './footer.module.scss';

const date = new Date();

export default () => (
  <footer>
    <div>
      &copy;
      {' '}
      {date.getFullYear()}
      {' '}
      <a href="https://www.gatsbyjs.com/docs/" target="_blank" rel="noreferrer">Gatsby Docs</a>
    </div>
  </footer>
);
