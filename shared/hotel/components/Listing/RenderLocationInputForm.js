import React, { useState, useEffect } from 'react';
import Map from '../Map/Map';
import MapWithSearchBox from '../Map/MapSearchBox';
import MapLocationBox, { MapDataHelper } from '../Map/MapLocationBox';

export const FormMapComponent = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc,
  ...props
}) => {
  let tempFormData = [];
  const [formLocationState, setFormLocationState] = useState([]);
  const getUpdateValue = value => {
    setFormLocationState(value);
  };

  if (formLocationState) {
    tempFormData = MapDataHelper(formLocationState);
  }

  useEffect(() => {
    form.setFieldValue(field.name, tempFormData[0]);
  }, [formLocationState]);

  return (
    <Map>
      <MapWithSearchBox
        draggable={true}
        updatevalue={value => getUpdateValue(value)}
        {...field}
        {...props}
      />
      <MapLocationBox infoValue={formLocationState} />
    </Map>
  );
};
