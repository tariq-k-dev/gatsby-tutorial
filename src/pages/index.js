import React, { useState } from 'react';
import Layout from '../components/Layout';
import NoDroidsButton from '../components/button';
import stormtrooper from '../../static/animated-stormtrooper-head.gif';
import obiwan from '../../static/not-the-droids.png';

const TrooperImg = () => (
  <img style={{ marginTop: '2rem' }} src={stormtrooper} alt="Animated storm trooper head GIF" />
);
const ObiWanImg = () => (
  <img src={obiwan} alt="Obi-Wan Kenobi 'Not the droids you are looking for'" />
);
const DisplayImage = () => {
  const [showObiWan, setShowObiWan] = useState(true);

  return (
    <>
      <div style={{ height: '15.8rem' }}>
        { showObiWan ? <ObiWanImg /> : <TrooperImg /> }
      </div>
      <NoDroidsButton onMouseUp={() => setShowObiWan(!showObiWan)}>{showObiWan ? 'Not the Droids!' : 'What Droids?'}</NoDroidsButton>
    </>
  );
};

export default () => (
  <Layout>
    <>
      <h1>Hello from Gatsby!</h1>
      <DisplayImage style={{ height: '5rem' }} />
    </>
  </Layout>
);
