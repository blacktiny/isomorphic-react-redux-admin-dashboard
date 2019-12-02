import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Map, { MapDataProcessing } from '@hotel/components/Map/Map';
import Loader from '@hotel/components/Loader/Loader';
import { FixedMap } from './Listing.style';

const ListingMap = props => {
  const { mapData, loading } = props;
  return (
    <FixedMap>
      {isEmpty(mapData) || loading ? (
        <Loader />
      ) : (
        <Map>
          <MapDataProcessing location={mapData} multiple={true} />
        </Map>
      )}
    </FixedMap>
  );
};

export default ListingMap;
