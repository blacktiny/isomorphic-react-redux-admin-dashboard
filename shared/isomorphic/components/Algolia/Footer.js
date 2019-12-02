import React from 'react';
import AlgoliaLogo from './algolia.svg';
import { FooterWrapper } from './AlgoliaComponent.style';

const Footer = () => (
  <FooterWrapper className="isoAlgoliaFooter">
    <span>Powred by</span>
    <div className="isoLogoWrapper">
      <img alt="#" src={process.env.PUBLIC_URL + AlgoliaLogo} />
    </div>
  </FooterWrapper>
);

export default Footer;
