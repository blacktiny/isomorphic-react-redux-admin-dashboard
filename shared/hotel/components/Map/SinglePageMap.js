import React from 'react';
import { Marker } from 'react-google-maps';
import HotelInfoWindow from './MapInfoWindow';
import MakerImage from './hotelMapMarker.png';

const SingleMapDisplay = props => {
  let locationArray = [];
  const { location, infoWindowToggle, isOpen, markerIndex } = props;

  locationArray.push({
    lat: location && location.location.lat,
    lng: location && location.location.lng,
    id: location && location.id,
    title: location && location.title,
    thumbUrl: location && location.image.thumb_url,
    formattedAddress: location && location.location.formattedAddress,
    price: location && location.price,
    rating: location && location.rating,
    ratingCount: location && location.ratingCount,
  });

  return locationArray.map((singlePostLoaction, index) => {
    return (
      <Marker
        key={index}
        icon={MakerImage}
        position={singlePostLoaction}
        onClick={() => {
          infoWindowToggle(singlePostLoaction.id);
        }}
      >
        {isOpen && markerIndex === singlePostLoaction.id ? (
          <HotelInfoWindow
            postData={singlePostLoaction}
            onCloseClick={() => {
              infoWindowToggle(singlePostLoaction.id);
            }}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

const HotelMapMarkerSingle = props => {
  return <SingleMapDisplay {...props} />;
};

export default HotelMapMarkerSingle;
