import React, { useState } from 'react';
import moment from 'moment';
import Button from '@iso/ui/Antd/Button/Button';
import Slider from '@iso/ui/Antd/Slider/Slider';
import Checkbox from '@iso/ui/Antd/Checkbox/Checkbox';
import ViewWithPopup from '@iso/ui/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from '@iso/ui/InputIncDec/InputIncDec';
import DateRangePickerBox from '@iso/ui/DatePicker/ReactDates';
import { setStateToUrl, getStateFromUrl } from '../url_handler';
import {
  priceInit,
  calenderItem,
  getAmenities,
  getPropertyType,
} from '../SearchParams';
import CategroySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';

const CategorySearchNext = ({ searchParams, history, location }) => {
  // const searchParams = getStateFromUrl(location);
  const searchState = {
    amenities: searchParams.amenities || [],
    property: searchParams.property || [],
    date_range: searchParams
      ? {
          setStartDate: searchParams.startDate,
          setEndDate: searchParams.endDate,
        }
      : {
          setStartDate: null,
          setEndDate: null,
        },
    price: searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    },
    location: searchParams.location || {
      lat: null,
      lng: null,
    },
    room: parseInt(searchParams.room) || 0,
    guest: parseInt(searchParams.guest) || 0,
  };
  const { amenities, property, date_range, price, room, guest } = searchState;

  // Room guest state
  const [countRoom, setRoom] = useState(room);
  const [countGuest, setGuest] = useState(guest);

  // data handling
  const onChange = (value, type) => {
    const query = {
      ...searchState,
      [type]: value,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/listing',
      search: search,
    });
  };

  const handleRoomGuestApply = () => {
    const query = {
      ...searchState,
      room: countRoom,
      guest: countGuest,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/listing',
      search: search,
    });
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);
    const query = {
      ...searchState,
      room: 0,
      guest: 0,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/listing',
      search: search,
    });
  };

  // Clear search data
  const onSearchReset = () => {
    setRoom(0);
    setGuest(0);
    const search = setStateToUrl({ reset: '' });
    history.push({
      pathname: '/listing',
      search: search,
    });
  };

  return (
    <CategroySearchWrapper>
      <ViewWithPopup
        className={amenities.length ? 'activated' : ''}
        key={getAmenities.id}
        noView={true}
        view={
          <Button type="default">
            {getAmenities.name}
            {amenities.length > 0 && `: ${amenities.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getAmenities.options}
            defaultValue={amenities}
            onChange={value => onChange(value, 'amenities')}
          />
        }
      />

      <ViewWithPopup
        className={property.length ? 'activated' : ''}
        key={getPropertyType.id}
        noView={true}
        view={
          <Button type="default">
            {getPropertyType.name}
            {property.length > 0 && `: ${property.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getPropertyType.options}
            defaultValue={property}
            onChange={value => onChange(value, 'property')}
          />
        }
      />

      <ViewWithPopup
        className={
          Object.keys('date_range').length !== null &&
          date_range.setStartDate !== null
            ? 'activated'
            : ''
        }
        key={400}
        noView={true}
        view={<Button type="default">Choose Date</Button>}
        popup={
          <DateRangePickerBox
            startDateId="startDate-id-category"
            endDateId="endDate-id-category"
            startDate={
              date_range.setStartDate ? moment(date_range.setStartDate) : null
            }
            endDate={
              date_range.setEndDate ? moment(date_range.setEndDate) : null
            }
            numberOfMonths={1}
            small={true}
            item={calenderItem}
            updateSearchData={value => onChange(value, 'date_range')}
          />
        }
      />

      <ViewWithPopup
        className={
          price.min === price.defaultMin && price.max === price.defaultMax
            ? ''
            : 'activated'
        }
        key={300}
        noView={true}
        view={
          <Button type="default">
            {price.min > 0 || price.max < 100
              ? `Price: ${price.min}, ${price.max}`
              : `Price per night`}
          </Button>
        }
        popup={
          <Slider
            range
            marks={priceInit}
            min={price.defaultMin}
            max={price.defaultMax}
            defaultValue={[price.min, price.max]}
            onAfterChange={value => onChange(value, 'price')}
          />
        }
      />

      <ViewWithPopup
        key={200}
        noView={true}
        className={countRoom || countGuest ? 'activated' : ''}
        view={
          <Button type="default">
            Room {countRoom > 0 && `: ${countRoom}`}, Guest
            {countGuest > 0 && `: ${countGuest}`}
          </Button>
        }
        popup={
          <RoomGuestWrapper>
            <ItemWrapper>
              <strong>Room</strong>
              <InputIncDec
                id="room"
                increment={() => setRoom(countRoom => countRoom + 1)}
                decrement={() =>
                  setRoom(countRoom => countRoom > 0 && countRoom - 1)
                }
                onChange={e => setRoom(e.target.value)}
                value={countRoom}
              />
            </ItemWrapper>

            <ItemWrapper>
              <strong>Guest</strong>
              <InputIncDec
                id="guest"
                increment={() => setGuest(countGuest => countGuest + 1)}
                decrement={() =>
                  setRoom(countGuest => countGuest > 0 && countGuest - 1)
                }
                onChange={e => setGuest(e.target.value)}
                value={countGuest}
              />
            </ItemWrapper>

            <ActionWrapper>
              {countRoom || countGuest ? (
                <Button type="default" onClick={handleRoomGuestCancel}>
                  Cancel
                </Button>
              ) : (
                ''
              )}
              <Button type="primary" onClick={handleRoomGuestApply}>
                Apply
              </Button>
            </ActionWrapper>
          </RoomGuestWrapper>
        }
      />

      <ViewWithPopup
        key={100}
        noView={true}
        view={<Button type="default">Reset</Button>}
        popup={<Button onClick={onSearchReset}>Reset Search Page URL</Button>}
      />
    </CategroySearchWrapper>
  );
};

export default CategorySearchNext;
