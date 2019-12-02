import React from 'react';
import Link from 'next/link';
import Logo from '@iso/ui/Logo/Logo';
import Footers from '@hotel/components/Footer/Footer';
import LogoImage from '@hotel/assets/images/logo-alt.svg';
import FooterMenu from './FooterMenu';

const Footer = ({ path }) => {
  return (
    <Footers
      path={path}
      logo={
        <Link href="/">
          <a>
            <Logo src={LogoImage} title="hotel" />
          </a>
        </Link>
      }
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} ReaQ, Inc.`}
    />
  );
};

export default Footer;
