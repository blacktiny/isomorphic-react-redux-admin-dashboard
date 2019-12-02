import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from '@iso/ui/UI/Card/Card';
import Heading from '@iso/ui/Heading/Heading';
import Text from '@iso/ui/Text/Text';
import TextLink from '@iso/ui/TextLink/TextLink';
import RenderReservationForm from './RenderReservationForm';

const CardHeader = ({ priceStyle, pricePeriodStyle, linkStyle }) => {
  return (
    <Fragment>
      <Heading
        content={
          <Fragment>
            $162 <Text as="span" content="/ night" {...pricePeriodStyle} />
          </Fragment>
        }
        {...priceStyle}
      />
      <TextLink link="/#1" content="Contact Hotel" {...linkStyle} />
    </Fragment>
  );
};

export default function Reservation() {
  return (
    <Card
      className="reservation_sidebar"
      header={<CardHeader />}
      content={<RenderReservationForm />}
      footer={
        <p>
          Special offers available. <TextLink to="/#1" content="See details" />
        </p>
      }
    />
  );
}

CardHeader.propTypes = {
  priceStyle: PropTypes.object,
  pricePeriodStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

CardHeader.defaultProps = {
  priceStyle: {
    color: '#2C2C2C',
    fontSize: '25px',
    fontWeight: '700',
  },
  pricePeriodStyle: {
    fontSize: '15px',
    fontWeight: '400',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};
