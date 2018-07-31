import React from 'react';
import CoverArt from './coverArt';

const cover = props => (
  <section id="cover">
    <div className="heading">
      <div className="header">  
        <h1>DMYTRO MARCHENKO</h1>
        <h3>FULL STACK WEB DEVELOPER</h3>
      </div>
      <div className="logos-container">
        <div className="tech-logos"></div>
        <div className="tech-logos"></div>
        <div className="tech-logos"></div>
      </div>
    </div>
    <CoverArt />
  </section>
);

module.exports = cover;