import React from 'react';
import { Link } from 'react-router-dom';
import Image from '@iso/assets/images/rob.png';
import IntlMessages from '@iso/components/utility/intlMessages';
import FiveZeroZeroStyleWrapper from './500.styles';

export default function() {
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
        <Link to="/dashboard">
          <button type="button">
            <IntlMessages id="page500.backButton" />
          </button>
        </Link>
      </div>

      <div className="iso500Artwork">
        <img alt="#" src={Image} />
      </div>
    </FiveZeroZeroStyleWrapper>
  );
}
