import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
