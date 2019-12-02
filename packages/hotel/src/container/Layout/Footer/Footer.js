import React from 'react';
import Logo from '@iso/ui/Logo/Logo';
import Footers from '@hotel/components/Footer/Footer';
import { Link } from 'react-router-dom';
import LogoImage from '@hotel/assets/images/logo-alt.svg';
import FooterMenu from './FooterMenu';

const Footer = () => {
  return (
    <Footers
      logo={
        <Link to="/">
          <Logo src={LogoImage} title="hotel" />
        </Link>
      }
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} ReaQ, Inc.`}
    />
  );
};

export default Footer;
