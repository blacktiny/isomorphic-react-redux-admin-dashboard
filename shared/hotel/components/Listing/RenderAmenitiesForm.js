import React, { useEffect, useState } from 'react';
import Radio from '@iso/ui/Antd/Radio/Radio';

/*
 *
 *  Property Form Component
 *
 */

export const PorpertyType = ({ field, form, ...props }) => {
  const getPropertyType = {
    identifier: 'wifiAvailability',
    options: [
      { label: 'Free', value: 'free' },
      { label: 'Paid', value: 'paid' },
    ],
  };
  const [wifiAvailability, setWifiAvailability] = useState('');
  const onChangeWifi = checkedValue => {
    setWifiAvailability(checkedValue.target.value);
  };
  useEffect(() => {
    form.setFieldValue(field.name, wifiAvailability);
  }, [wifiAvailability]);
  return (
    <Radio.Group options={getPropertyType.options} onChange={onChangeWifi} />
  );
};

/*
 *
 *  Parking Form Component
 *
 */

export const Parking = ({ field, form, ...props }) => {
  const getParkingType = {
    identifier: 'parking',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [parking, setParking] = useState('');
  const onChangeParking = checkedValue => {
    setParking(checkedValue.target.value);
  };
  useEffect(() => {
    form.setFieldValue(field.name, parking);
  }, [parking]);

  return (
    <Radio.Group options={getParkingType.options} onChange={onChangeParking} />
  );
};

/*
 *
 *  Pool Form Component
 *
 */

export const Pool = ({ field, form, ...props }) => {
  const getPool = {
    identifier: 'pool',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [pool, setPool] = useState('');
  const onChangePool = checkedValue => {
    setPool(checkedValue.target.value);
  };
  useEffect(() => {
    form.setFieldValue(field.name, pool);
  }, [pool]);

  return <Radio.Group options={getPool.options} onChange={onChangePool} />;
};

/*
 *
 *  AirCondition Form Component
 *
 */

export const AirCondition = ({ field, form, ...props }) => {
  const getAirCondition = {
    identifier: 'airCondition',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [airCondition, setAirCondition] = useState('');
  const onChangeAirCondition = checkedValue => {
    setAirCondition(checkedValue.target.value);
  };
  useEffect(() => {
    form.setFieldValue(field.name, airCondition);
  }, [airCondition]);

  return (
    <Radio.Group
      options={getAirCondition.options}
      onChange={onChangeAirCondition}
    />
  );
};

/*
 *
 *  Extra Bed Form Component
 *
 */

export const ExtraBed = ({ field, form, ...props }) => {
  const getExtraBed = {
    identifier: 'extraBed',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [extraBed, setExtraBed] = useState('');
  const onChangeExtraBed = checkedValue => {
    setExtraBed(checkedValue.target.value);
  };
  useEffect(() => {
    form.setFieldValue(field.name, extraBed);
  }, [extraBed]);

  return (
    <Radio.Group options={getExtraBed.options} onChange={onChangeExtraBed} />
  );
};
