import React, { useState, useContext, useReducer } from 'react';
import moment from 'moment';
import { createBrowserHistory } from 'history';
import Router from 'next/router';
import Heading from '@iso/ui/Heading/Heading';
import Slider from '@iso/ui/Antd/Slider/Slider';
import Drawer from '@iso/ui/Antd/Drawer/Drawer';
import Button from '@iso/ui/Antd/Button/Button';
import Checkbox from '@iso/ui/Antd/Checkbox/Checkbox';
import InputIncDec from '@iso/ui/InputIncDec/InputIncDec';
import DateRangePicker from '@iso/ui/DatePicker/ReactDates';
import { setStateToUrl } from '../../../helpers/url_handler';
import { SearchContext } from '../../../context/SearchProvider';
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

const history = process.browser ? createBrowserHistory() : false;
const location = process.browser && window.location;

function serchReducer(state, action) {
  switch (action.type) {
    case 'amenities':
      return { ...state, amenities: action.payload };
    case 'property':
      return { ...state, property: action.payload };
    case 'date_range':
      return {
        ...state,
        setStartDate: action.payload.setStartDate,
        setEndDate: action.payload.setEndDate,
      };
    case 'price':
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    case 'room':
      return {
        ...state,
        room: action.payload.room,
      };
    case 'guest':
      return {
        ...state,
        guest: action.payload.guest,
      };
    case 'reset':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

const FilterDrawer = props => {
  const { state, dispatch } = useContext(SearchContext);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: parseInt(state.room) || 0,
    guest: parseInt(state.guest) || 0,
  };
  const [current, dispatchCurrent] = useReducer(serchReducer, initialState);
  // state for drawer
  const [toggle, setToggle] = useState(false);
  // Room guest state
  const [countRoom, setRoom] = useState(current.room);
  const [countGuest, setGuest] = useState(current.guest);

  // Toggle Drawer
  const handleToggleDrawer = () => {
    setToggle(!toggle);
  };

  // data handling
  const onChange = (value, type) => {
    let query = {};
    let modifiedCurrent = current;

    for (const key in modifiedCurrent) {
      if (modifiedCurrent.hasOwnProperty(key)) {
        switch (key) {
          case 'date_range':
            delete modifiedCurrent.date_range;
            break;
          case 'price':
            delete modifiedCurrent.price;
            break;
        }
      }
    }

    if (type === 'date_range') {
      query = {
        ...current,
        setStartDate: value.setStartDate,
        setEndDate: value.setEndDate,
      };
      dispatchCurrent({ type: type, payload: value });
    } else if (type === 'price') {
      query = {
        ...current,
        minPrice: value ? value[0] : 0,
        maxPrice: value ? value[1] : 100,
      };
      dispatchCurrent({ type: type, payload: query });
    } else if (type === 'room') {
      query = {
        ...current,
        room: value ? value : 0,
      };
      dispatchCurrent({ type: type, payload: query });
    } else if (type === 'guest') {
      query = {
        ...current,
        guest: value ? value : 0,
      };
      dispatchCurrent({ type: type, payload: query });
    } else if (type === 'reset') {
      setRoom(0);
      setGuest(0);
      query = {
        ...current,
        setStartDate: null,
        setEndDate: null,
        room: 0,
        guest: 0,
        amenities: [],
        property: [],
        minPrice: 0,
        maxPrice: 100,
        location_lat: null,
        location_lng: null,
      };
      dispatchCurrent({ type: type, payload: query });
    } else {
      query = {
        ...current,
        [type]: value,
      };
      dispatchCurrent({ type: type, payload: value });
    }
  };

  const handleApplyFilter = () => {
    const params = setStateToUrl(current);
    dispatch({
      type: 'UPDATE',
      payload: {
        ...current,
      },
    });
    history.push({
      ...location,
      search: params,
    });
    setToggle(false);
  };

  const handleCloseDrawer = () => {
    setRoom(0);
    const query = {
      setStartDate: null,
      setEndDate: null,
      room: 0,
      guest: 0,
      amenities: [],
      property: [],
      minPrice: 0,
      maxPrice: 100,
      location_lat: null,
      location_lng: null,
    };
    dispatchCurrent({ type: 'reset', payload: query });
    dispatch({
      type: 'UPDATE',
      payload: {
        ...current,
        ...query,
      },
    });
    const params = setStateToUrl(query);
    history.push({
      ...location,
      search: params,
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
                  value={current.amenities}
                  onChange={value => onChange(value, 'amenities')}
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
                  value={current.property}
                  onChange={value => onChange(value, 'property')}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of property type filter element */}

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
                  min={0}
                  max={100}
                  defaultValue={[current.minPrice, current.maxPrice]}
                  onAfterChange={value => onChange(value, 'price')}
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
                  startDate={
                    current.setStartDate ? moment(current.setStartDate) : null
                  }
                  endDate={
                    current.setEndDate ? moment(current.setEndDate) : null
                  }
                  numberOfMonths={1}
                  small={true}
                  item={calenderItem}
                  updateSearchData={value => onChange(value, 'date_range')}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of date filter element */}

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
                      increment={() => {
                        setRoom(countRoom => countRoom + 1);
                        onChange(countRoom + 1, 'room');
                      }}
                      decrement={() => {
                        setRoom(countRoom => countRoom > 0 && countRoom - 1);
                        onChange(
                          countRoom => countRoom > 0 && countRoom - 1,
                          'room'
                        );
                      }}
                      value={countRoom}
                    />
                  </ItemWrapper>

                  <ItemWrapper>
                    <strong>Guest</strong>
                    <InputIncDec
                      id="guest"
                      increment={() => {
                        setGuest(countGuest => countGuest + 1);
                        onChange(countGuest + 1, 'guest');
                      }}
                      decrement={() => {
                        setGuest(
                          countGuest => countGuest > 0 && countGuest - 1
                        );
                        onChange(
                          countGuest => countGuest > 0 && countGuest - 1,
                          'guest'
                        );
                      }}
                      value={countGuest}
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
