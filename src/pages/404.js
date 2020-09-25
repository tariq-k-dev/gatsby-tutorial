import React from 'react';
import Layout from '../components/Layout';
import stormtrooper from '../../static/animated-stormtrooper-head.gif';
import obiWan from '../../static/not-the-droids.png';
import '../styles/notfound.scss';

const NotFound = () => (
  <Layout>
    <h1>
      No such page, move along...
    </h1>
    <div className="center">
      <img src={stormtrooper} alt="Animated stormtrooper head" />
      <br />
      <img src={obiWan} alt="Obi-Wan Kenobi not the droids you are looking for" />
    </div>
  </Layout>
);

export default NotFound;
