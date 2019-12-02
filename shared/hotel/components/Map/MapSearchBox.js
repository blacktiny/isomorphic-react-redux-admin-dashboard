import React, { Fragment, useState, useRef } from 'react';
import _ from 'lodash';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';
import Input from '@iso/ui/Antd/Input/Input';
import MakerImage from './hotelMapMarker.png';
const {
  SearchBox,
} = require('react-google-maps/lib/components/places/SearchBox');

const MapWithSearchBoxComp = compose(
  withProps({
    googleMapURL: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const [dragNDropData, setDragNDropData] = useState([]);
  const { getinputvalue } = props;
  const [locationInput, setLocationInput] = useState({ searchedLocation: '' });
  const [locationDetails, setLocationDetails] = useState({
    center: {
      lat: 40.7128,
      lng: -74.006,
    },
    markers: [
      {
        position: {
          lat: 40.7128,
          lng: -74.006,
        },
      },
    ],
    places: [],
  });
  const googleMapRef = useRef({});
  const SearchBoxRef = useRef({});
  const onPlacesChanged = () => {
    const places = SearchBoxRef.current.getPlaces();
    const bounds = new window.google.maps.LatLngBounds();
    console.log(places, bounds);
    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location,
    }));
    const nextCenter = _.get(nextMarkers, '0.position', locationDetails.center);
    console.log(nextCenter, 'nextCenter');

    setLocationDetails({
      places,
      center: nextCenter,
      markers: nextMarkers,
    });
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
    });
  };

  const handleOnChange = event => {
    if (event.which == '13') {
      event.preventDefault();
      event.stopPropagation();
    }
    setLocationInput({ searchedLocation: event.target.value });
  };

  const handleOnPressEnter = event => {
    if (event.which == '13') {
      event.preventDefault();
      event.stopPropagation();
    }
    setLocationInput({ searchedLocation: event.target.value });
  };

  const onDragEndFunc = marker => {
    let tempLocArray = [];
    var geocoder = new window.google.maps.Geocoder();
    const latlng = {
      lat: Number(marker.latLng.lat().toFixed(4)),
      lng: Number(marker.latLng.lng().toFixed(4)),
    };

    setLocationDetails({
      ...locationDetails,
      center: latlng,
    });

    geocoder.geocode({ latLng: latlng }, function(results, status) {
      if (results[0] && results[0].formatted_address) {
        setLocationInput({
          searchedLocation: results[0] && results[0].formatted_address,
        });
        const location = {
          place_id: results[0].place_id,
          formatted_address: results[0].formatted_address,
          address_components: results[0].address_components,
          geometry: results[0].geometry,
        };
        tempLocArray.push(location);
      }
      setDragNDropData(tempLocArray);
    });
  };

  if (dragNDropData && dragNDropData.length !== 0) {
    getinputvalue(dragNDropData);
  } else {
    getinputvalue(locationDetails.places);
  }

  return (
    <GoogleMap
      ref={googleMapRef}
      defaultZoom={15}
      center={locationDetails.center}
    >
      <SearchBox
        ref={SearchBoxRef}
        controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={onPlacesChanged}
      >
        <Input
          type="text"
          placeholder="Enter your hotel location"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `260px`,
            height: `40px`,
            marginTop: `10px`,
            padding: `0 12px`,
            borderRadius: `2px`,
            boxShadow: `0 3px 6px rgba(0, 0, 0, 0.16)`,
            fontSize: `15px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
          defaultValue=""
          value={locationInput ? locationInput.searchedLocation : ''}
          onChange={handleOnChange}
          onPressEnter={handleOnPressEnter}
        />
      </SearchBox>
      {locationDetails.markers.map((marker, index) => {
        return (
          <Marker
            icon={MakerImage}
            key={index}
            position={marker.position}
            draggable
            onDragEnd={marker => onDragEndFunc(marker)}
          />
        );
      })}
    </GoogleMap>
  );
});

const MapWithSearchBox = props => {
  const [mapValue, setMapValue] = useState([]);
  const { updatevalue } = props;
  const updateFunc = value => {
    setMapValue(value);
  };
  updatevalue(mapValue);

  return (
    <Fragment>
      <MapWithSearchBoxComp
        getinputvalue={value => updateFunc(value)}
        {...props}
      />
    </Fragment>
  );
};

export default MapWithSearchBox;
