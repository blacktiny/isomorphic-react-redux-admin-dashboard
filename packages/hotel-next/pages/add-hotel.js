import { useState } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import FormStepper from '@iso/ui/Steppers/FormStepper';
import { AntInput, AntTextArea } from '@iso/ui/Antd/AntdInputWithFormik';
import InputIncDec from '@iso/ui/InputIncDec/InputIncDec';
import Row from '@iso/ui/Antd/Grid/Row';
import Col from '@iso/ui/Antd/Grid/Col';
import Heading from '@iso/ui/Heading/Heading';
import Text from '@iso/ui/Text/Text';

import {
  PorpertyType,
  Parking,
  Pool,
  AirCondition,
  ExtraBed,
} from '@hotel/components/Listing/RenderAmenitiesForm';

import { PhotoUploadComponent } from '@hotel/components/Listing/RenderUploadPhotosForm';
import { FormMapComponent } from '@hotel/components/Listing/RenderLocationInputForm';

import StepperWrapper, {
  UploaderWrapper,
  LocationWrapper,
  AmenitiesWrapper,
  HeaderSection,
  Title,
  Description,
} from '@hotel/components/Listing/AddListing.style';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const required = value => (value ? undefined : 'Required');

const formValue = {
  hotelName: '',
  priceParNight: '',
  hotelDetails: '',
  guest: 0,
  beds: 0,
  price: 0,
  hotelPhotos: [],
  location: [],
  locationDescription: '',
  contactNumber: null,
  wifiAvailability: '',
  airCondition: '',
  parking: '',
  poolAvailability: '',
  extraBed: '',
};

const QuantityInput = ({ field, form }) => {
  const [state, setState] = useState(field ? field.value : 0);

  const handleIncrement = () => {
    let currentValue = state;
    setState(++currentValue);
    form.setFieldValue(field.name, ++currentValue);
  };

  const handleDecrement = () => {
    let currentValue = state;
    if (currentValue <= 0) {
      return false;
    }
    setState(--currentValue);
    form.setFieldValue(field.name, --currentValue);
  };

  const handleOnChange = e => {
    setState(e.target.value);
    form.setFieldValue(field.name, e.target.value);
  };

  return (
    <InputIncDec
      value={state}
      name={field && field.name}
      onChange={handleOnChange}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  );
};

const RenderCreateOrUpdateForm = ({ fieldLabel }) => {
  return (
    <StepperWrapper className="hotel-submission-form">
      <FormStepper
        initialValues={formValue}
        onSubmit={(values, actions) => {
          sleep(300).then(() => {
            window.alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          });
        }}
      >
        <FormStepper.Page>
          <HeaderSection>
            <Title>Step 1: Start with the basics</Title>
          </HeaderSection>

          <Row gutter={30}>
            <Col sm={12}>
              <Field
                component={AntInput}
                name="hotelName"
                type="text"
                label="Hotel Name"
                validate={required}
                placeholder="Write your hotel name here"
                hasFeedback
              />
            </Col>
            <Col sm={12}>
              <Field
                component={AntInput}
                name="priceParNight"
                type="number"
                label="Price Per Night (USD)"
                validate={required}
                placeholder="$00"
                hasFeedback
              />
            </Col>
          </Row>

          <Field
            component={AntTextArea}
            name="hotelDetails"
            type="text"
            label="Hotel Description"
            validate={required}
            placeholder="Tell people about your hotel: your room, location, amenities?"
            hasFeedback
            rows={4}
          />
          <Heading
            as="h3"
            {...fieldLabel}
            content="How Many guests can your Hotel accommodate?"
          />
          <Field
            component={QuantityInput}
            name="guest"
            label="Guest Input"
            hasFeedback
            rows={4}
          />
          <Heading
            {...fieldLabel}
            as="h3"
            content="How Many beds can guests use?"
          />
          <Field
            component={QuantityInput}
            name="beds"
            label="Bed Input"
            hasFeedback
            rows={4}
          />
        </FormStepper.Page>

        <FormStepper.Page>
          <HeaderSection>
            <Title>Step 2: Hotel Photos</Title>
          </HeaderSection>

          <UploaderWrapper>
            <Field
              component={PhotoUploadComponent}
              name="hotelPhotos"
              type="file"
              label="Hotel Photos"
              validate={required}
              hasFeedback
              rows={4}
            />
          </UploaderWrapper>
        </FormStepper.Page>

        <FormStepper.Page
          validate={values => {
            const errors = {};
            if (!values.locationDescription) {
              errors.locationDescription = 'Required';
            }
            if (!values.contactNumber) {
              errors.contactNumber = 'Required';
            }
            return errors;
          }}
        >
          <HeaderSection>
            <Title>Step 3: Hotel Location</Title>
          </HeaderSection>

          <LocationWrapper>
            <Row gutter={30}>
              <Col sm={12}>
                <Field
                  component={AntInput}
                  name="contactNumber"
                  type="number"
                  label="Contact Number"
                  placeholder="Phone"
                  hasFeedback
                />
              </Col>
            </Row>

            <Field
              component={AntTextArea}
              name="locationDescription"
              type="textarea"
              label="Details description for Hotel Component"
              placeholder="Write your hotel direction in details , it may help traveler to find your hotel easily"
              hasFeedback
              rows={4}
            />

            <Field
              component={FormMapComponent}
              type="text"
              name="location"
              label="Choose Location"
              hasFeedback
            />
          </LocationWrapper>
        </FormStepper.Page>

        <FormStepper.Page>
          <AmenitiesWrapper>
            <HeaderSection>
              <Title>
                Step 4: Hotel Amenities <span> (optional)</span>
              </Title>
              <Description>
                Add your hotel amenities , it can help travelers to choose their
                perfect hotel. Thanks.
              </Description>
            </HeaderSection>
            <Row gutter={30}>
              <Col md={8}>
                <Text as="h3" {...fieldLabel} content="Wifi Availability" />
                <Field
                  name="wifiAvailability"
                  component={PorpertyType}
                  placeholder="Wifi Availability"
                />
              </Col>

              <Col md={8}>
                <Text as="h3" {...fieldLabel} content="Parking Availability" />
                <Field
                  name="parking"
                  component={Parking}
                  placeholder="Parking Availability"
                />
              </Col>

              <Col md={8}>
                <Text as="h3" {...fieldLabel} content="Pool Availability" />
                <Field
                  name="poolAvailability"
                  component={Pool}
                  placeholder="Pool Availability"
                />
              </Col>

              <Col md={8}>
                <Text as="h3" {...fieldLabel} content="Air-Conditioner" />
                <Field
                  name="airCondition"
                  component={AirCondition}
                  placeholder="Air-Conditioner"
                />
              </Col>

              <Col md={8}>
                <Text
                  as="h3"
                  {...fieldLabel}
                  content="Extra Bed Availability"
                />
                <Field
                  name="extraBed"
                  component={ExtraBed}
                  placeholder="Extra Bed Availability"
                />
              </Col>
            </Row>
          </AmenitiesWrapper>
        </FormStepper.Page>
      </FormStepper>
    </StepperWrapper>
  );
};

RenderCreateOrUpdateForm.propTypes = {
  fieldLabel: PropTypes.object,
};

RenderCreateOrUpdateForm.defaultProps = {
  fieldLabel: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '18px',
    fontWeight: '700',
    mt: ['30px', '47px'],
    mb: ['15px', '30px'],
  },
};

export default RenderCreateOrUpdateForm;
