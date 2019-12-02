import React from 'react';
import { InfoWindow } from 'react-google-maps';
import Rating from '@iso/ui/Rating/Rating';
import GridCard from '../GridCard/GridCard';

const HotelInfoWindow = props => {
  const { postData } = props;

  const id = postData && postData.id;
  const title = postData && postData.title;
  const thumbUrl = postData && postData.thumbUrl;
  const formattedAddress = postData && postData.formattedAddress;
  const price = postData && postData.price;
  const rating = postData && postData.rating;
  const ratingCount = postData && postData.ratingCount;

  return (
    <InfoWindow id={id}>
      <GridCard
        className="info_window_card"
        location={formattedAddress}
        title={title}
        price={`$${price}/Night - Free Cancellation`}
        rating={
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        }
      >
        <img src={thumbUrl} alt={title} />
      </GridCard>
    </InfoWindow>
  );
};

export default HotelInfoWindow;
