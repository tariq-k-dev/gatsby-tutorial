import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.scss';

const activeLink = {
  borderBottom: '2px solid #e6f1ff',
  color: '#e6f1ff'
};

export default () => (
  <header className={styles.header}>
    <Helmet>
      <title>Gatsby Tutorial</title>
    </Helmet>
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link to="/" activeStyle={activeLink}>
            <FontAwesomeIcon className={styles.faHome} icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog/" activeStyle={activeLink}>Blog</Link>
        </li>
        <li>
          <Link to="/services/" activeStyle={activeLink}>Services</Link>
        </li>
        <li>
          <Link to="/404/" activeStyle={activeLink}>404</Link>
        </li>
      </ul>
    </nav>
  </header>
);
