import React from 'react';
import { posts } from '../config';
import googleConfig from '@iso/config/google_map.config';
import { GoogleApiWrapper } from 'google-maps-react';
import BasicMapWrapper from './Maps.styles';

function BasicMap(props) {
  const [state] = React.useState({
    center: { lat: 40.78306, lng: -73.971249 }, // 40.783060, -73.971249
    zoom: 13,
    posts,
    infoWindow: null,
  });

  function loadMap(element) {
    const { google } = props;
    if (!element || !google) return;
    new google.maps.Map(element, {
      zoom: state.zoom,
      center: state.center,
      scrollwheel: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
    });
  }
  const { loaded } = props;
  return (
    <div>
      {loaded ? (
        <BasicMapWrapper>
          <div
            className="isoGoogleMap"
            style={{ height: '650px', width: '100%' }}
            ref={loadMap}
          />
        </BasicMapWrapper>
      ) : (
        <span>API is Loading</span>
      )}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: googleConfig.apiKey,
})(BasicMap);
