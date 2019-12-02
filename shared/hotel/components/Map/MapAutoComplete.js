import React, { useState, useRef } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs } from 'react-google-maps';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import Input from '@iso/ui/Antd/Input/Input';

const SearchInput = compose(
  withProps({
    googleMapURL: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  withScriptjs
)(props => {
  const { getinputvalue } = props;
  const [locationInput, setLocationInput] = useState({
    searchedLocation: '',
    searchedPlaceAPIData: [],
  });
  const handleOnChange = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }
    setLocationInput({
      searchedLocation: event.target.value,
    });
  };
  const refs = useRef({});
  const onPlacesChanged = () => {
    const places = refs.current.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
    getinputvalue({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
  };

  const handleOnPressEnter = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }
    setLocationInput({ searchedLocation: event.target.value });
    getinputvalue(locationInput);
  };

  return (
    <div className="map_autocomplete">
      <StandaloneSearchBox ref={refs} onPlacesChanged={onPlacesChanged}>
        <Input
          type="text"
          defaultValue=""
          value={locationInput.searchedLocation || ''}
          placeholder="Try “Thailand, Asia”"
          size="large"
          onChange={handleOnChange}
          onPressEnter={handleOnPressEnter}
        />
      </StandaloneSearchBox>
    </div>
  );
});

const MapAutoComplete = props => {
  const { updatevalue } = props;
  return <SearchInput getinputvalue={updatevalue} />;
};

export default MapAutoComplete;
