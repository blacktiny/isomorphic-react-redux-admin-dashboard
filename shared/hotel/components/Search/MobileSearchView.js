import React, { useState } from 'react';
import moment from 'moment';
import Slider from '@iso/ui/Antd/Slider/Slider';
import Button from '@iso/ui/Antd/Button/Button';
import Drawer from '@iso/ui/Antd/Drawer/Drawer';
import Checkbox from '@iso/ui/Antd/Checkbox/Checkbox';
import Heading from '@iso/ui/Heading/Heading';
import DateRangePicker from '@iso/ui/DatePicker/ReactDates';
import InputIncDec from '@iso/ui/InputIncDec/InputIncDec';
import { setStateToUrl, getStateFromUrl } from './url_handler';
import { IoIosArrowDown } from 'react-icons/io';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  priceInit,
  calenderItem,
  getAmenities,
  getPropertyType,
} from './SearchParams';
import {
  FilterArea,
  FilterElementsWrapper,
  ButtonGroup,
  RoomGuestWrapper,
  ItemWrapper,
} from './MobileSearchView.style';

const FilterDrawer = ({ history, location }) => {
  const searchParams = getStateFromUrl(location);

  // state for drawer
  const [toggle, setToggle] = useState(false);

  // Amenities state
  const [amenities, setAmenities] = useState(searchParams.amenities || []);

  // Property type state
  const [propertyType, setPropertyType] = useState(searchParams.property || []);

  // Date state
  const [searchDate, setSearchDate] = useState(
    searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    }
  );

  // Price state
  const [price, setPrice] = useState(
    searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    }
  );

  // Room guest state

  const roomAndGuest = {
    room: searchParams && searchParams.room ? parseInt(searchParams.room) : 0,
    guest:
      searchParams && searchParams.guest ? parseInt(searchParams.guest) : 0,
  };

  const [roomGuest, setRoomGuest] = useState(
    roomAndGuest || {
      room: 0,
      guest: 0,
    }
  );

  // Room Guest data handling
  const handleIncrement = type => {
    console.log('clicked handleIncrement');
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] + 1,
    });
  };

  const handleDecrement = type => {
    console.log('clicked handleDecrement');
    if (roomGuest[type] <= 0) {
      return false;
    }
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] - 1,
    });
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setRoomGuest({
      ...roomGuest,
      [type]: currentValue,
    });
  };

  // Toggle Drawer
  const handleToggleDrawer = () => {
    setToggle(!toggle);
  };

  // Amenities data handling
  const onChangeAmenity = checkedAmenityValue => {
    setAmenities(checkedAmenityValue);
  };

  // PropertyType data handling
  const onChangeProperty = checkedPropertValue => {
    setPropertyType(checkedPropertValue);
  };

  // Price data handling
  const handlePriceChange = setValue => {
    const maxValue = setValue ? setValue[1] : price.defaultMin;
    const minValue = setValue ? setValue[0] : price.defaultMax;
    setPrice({
      min: minValue,
      max: maxValue,
      defaultMin: price.defaultMin,
      defaultMax: price.defaultMax,
    });
  };

  // Date data handling
  const updateSearchDataFunc = setDateValue => {
    setSearchDate({
      setStartDate: setDateValue.setStartDate,
      setEndDate: setDateValue.setEndDate,
    });
  };

  const handleApplyFilter = () => {
    const search = setStateToUrl({
      amenities: amenities,
      property: propertyType,
      price: [price.min, price.max],
      date_range: searchDate,
      ...roomGuest,
    });
    history.push({
      pathname: '/listing',
      search: search,
    });
    setToggle(false);
  };

  const handleCloseDrawer = () => {
    setStateToUrl(null);
    setAmenities([]);
    setPropertyType([]);
    setSearchDate({
      setStartDate: null,
      setEndDate: null,
    });
    setPrice({
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    });
    setRoomGuest({
      room: 0,
      guest: 0,
    });
    setToggle(false);
  };

  return (
    <FilterArea>
      <Button className={toggle ? 'active' : ''} onClick={handleToggleDrawer}>
        More filters
      </Button>
      <Drawer
        className="filter_drawer"
        height="100vh"
        placement="bottom"
        closable={false}
        maskClosable={false}
        onClose={handleCloseDrawer}
        visible={toggle}
        maskStyle={{ backgroundColor: 'transparent' }}
      >
        <FilterElementsWrapper>
          <Accordion allowZeroExpanded={true}>
            {/* Start price range filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Select Price Range" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Slider
                  range
                  marks={priceInit}
                  min={price.defaultMin}
                  max={price.defaultMax}
                  value={[price.min, price.max]}
                  onChange={handlePriceChange}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of price range filter element */}

            {/* Start date filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Choose Date" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <DateRangePicker
                  startDateId="startDate-id-mobile"
                  endDateId="endDate-id-mobile"
                  numberOfMonths={1}
                  small={true}
                  item={calenderItem}
                  startDate={
                    searchDate.setStartDate
                      ? moment(searchDate.setStartDate)
                      : null
                  }
                  endDate={
                    searchDate.setEndDate ? moment(searchDate.setEndDate) : null
                  }
                  updateSearchData={setDateValue =>
                    updateSearchDataFunc(setDateValue)
                  }
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of date filter element */}

            {/* Start amenities filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Amenities" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Checkbox.Group
                  options={getAmenities.options}
                  value={amenities}
                  onChange={onChangeAmenity}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of amenities filter element */}

            {/* Start property type filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Property Type" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Checkbox.Group
                  options={getPropertyType.options}
                  value={propertyType}
                  onChange={onChangeProperty}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of property type filter element */}

            {/* Room & Guest type filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Choose Room and Guest" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <RoomGuestWrapper>
                  <ItemWrapper>
                    <strong>Room</strong>
                    <InputIncDec
                      id="room"
                      increment={() => handleIncrement('room')}
                      decrement={() => handleDecrement('room')}
                      onChange={e => handleIncDecOnChnage(e, 'room')}
                      value={roomGuest.room}
                    />
                  </ItemWrapper>

                  <ItemWrapper>
                    <strong>Guest</strong>
                    <InputIncDec
                      id="guest"
                      increment={() => handleIncrement('guest')}
                      decrement={() => handleDecrement('guest')}
                      onChange={e => handleIncDecOnChnage(e, 'guest')}
                      value={roomGuest.guest}
                    />
                  </ItemWrapper>
                </RoomGuestWrapper>
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of Room & Guest type filter element */}
          </Accordion>

          <ButtonGroup>
            <Button onClick={handleCloseDrawer}>Cancel Filter</Button>
            <Button type="primary" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
          </ButtonGroup>
        </FilterElementsWrapper>
      </Drawer>
    </FilterArea>
  );
};

export default FilterDrawer;
