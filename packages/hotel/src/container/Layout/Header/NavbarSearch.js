import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MapAutoComplete from '@hotel/components/Map/MapAutoComplete';
import { NavbarSearchWrapper } from './Header.style';
import { setStateToUrl, getStateFromUrl } from '@iso/lib/helpers/url_handler';
import { MapDataHelper } from '@hotel/components/Map/MapLocationBox';
import { LISTING_POSTS_PAGE } from '../../../settings/constant';

const NavbarSearch = props => {
  const updatevalueFunc = value => {
    const { searchedPlaceAPIData } = value;
    let tempLocation = [];
    const mapData = !isEmpty(searchedPlaceAPIData)
      ? MapDataHelper(searchedPlaceAPIData)
      : [];
    if (!isEmpty(mapData) && mapData.length !== 0) {
      mapData.forEach(singleMapData =>
        tempLocation.push({
          lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
          lng: singleMapData ? singleMapData.lng.toFixed(3) : null,
        })
      );
    }
    const searchLocation = tempLocation ? tempLocation[0] : {};
    if (!isEmpty(searchLocation)) {
      const state = getStateFromUrl(props.location);
      const query = {
        ...state,
        location: searchLocation,
      };
      const search = setStateToUrl(query);
      props.history.push({
        pathname: LISTING_POSTS_PAGE,
        search: search,
      });
    }
  };

  return (
    <NavbarSearchWrapper className="navbar_search">
      <FaMapMarkerAlt className="map-marker" />
      <MapAutoComplete updatevalue={value => updatevalueFunc(value)} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 144.083 144"
        enableBackground="new 0 0 144.083 144"
        className="target"
      >
        <path d="M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z" />
        <path d="M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z" />
      </svg>
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
