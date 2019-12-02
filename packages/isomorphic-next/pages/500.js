import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import IntlMessages from '@iso/components/utility/intlMessages';
import FiveZeroZeroStyleWrapper from '../styled/500.styles';
import Image from '@iso/assets/images/rob.png';

function FiveHundred() {
  return (
    <FiveZeroZeroStyleWrapper className="iso500Page">
      <div className="iso500Content">
        <h1>
          <IntlMessages id="page500.title" />
        </h1>
        <h3>
          <IntlMessages id="page500.subTitle" />
        </h3>
        <p>
          <IntlMessages id="page500.description" />
        </p>
        <button type="button">
          <Link href="/dashboard">
            <a className="isoMenuHolder">
              <span className="nav-text">
                <IntlMessages id="page500.backButton" />
              </span>
            </a>
          </Link>
        </button>
      </div>

      <div className="iso500Artwork">
        <img alt="#" src={Image} />
      </div>
    </FiveZeroZeroStyleWrapper>
  );
}

export default () => (
  <>
    <Head>
      <title>500</title>
    </Head>
    <FiveHundred />
  </>
);
