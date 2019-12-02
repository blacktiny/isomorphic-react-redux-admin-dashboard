import React from 'react';
import isEmpty from 'lodash/isEmpty';

import Map, { MapDataProcessing } from '@hotel/components/Map/Map';
import useDataApi from '@iso/lib/hooks/useDataApi';
import { FixedMap } from './Listing.style';

const ListingMap = () => {
  const { data, loading } = useDataApi('/data/hotel.json');
  if (isEmpty(data) || loading) return <div>Loading</div>;

  return (
    <FixedMap>
      <Map>
        <MapDataProcessing location={data} multiple={true} />
      </Map>
    </FixedMap>
  );
};

export default ListingMap;
