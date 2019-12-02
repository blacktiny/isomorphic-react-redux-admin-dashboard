import React from 'react';
import { Row, Col } from 'antd';
import Radio, { RadioGroup } from '@iso/components/uielements/radio';
import Input from '@iso/components/uielements/input';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import { direction } from '@iso/lib/helpers/rtl';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default function() {
  const [state, setState] = React.useState({
    value: 1,
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
    value4: 11,
  });
  const onChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="forms.radio.header" />}</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.radio.simpleTitle" />}
            subtitle={<IntlMessages id="forms.radio.simpleSubTitle" />}
          >
            <ContentHolder>
              <Radio>Radio</Radio>
              <br />
              <Radio defaultChecked={false} disabled>
                Disabled
              </Radio>
              <br />
              <Radio defaultChecked disabled>
                Disabled
              </Radio>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.radio.groupTitle" />}
            subtitle={<IntlMessages id="forms.radio.groupSubTitle" />}
          >
            <ContentHolder>
              <RadioGroup onChange={onChange} name="value" value={state.value}>
                <Radio style={radioStyle} value={1}>
                  Option A
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Option B
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Option C
                </Radio>
                <Radio style={radioStyle} value={4}>
                  More...
                  {state.value === 4 ? (
                    <Input
                      style={{
                        width: 100,
                        marginLeft: direction === 'rtl' ? 0 : 10,
                        marginRight: direction === 'rtl' ? 10 : 0,
                      }}
                    />
                  ) : null}
                </Radio>
              </RadioGroup>
            </ContentHolder>
          </Box>
        </Col>
      </Row>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.radio.groupSecondTitle" />}
            subtitle={<IntlMessages id="forms.radio.groupSecondSubTitle" />}
          >
            <ContentHolder>
              <RadioGroup
                onChange={onChange}
                name="value4"
                value={state.value4}
              >
                <Radio value={11}>A</Radio>
                <Radio value={22}>B</Radio>
                <Radio value={32}>C</Radio>
                <Radio value={43}>D</Radio>
              </RadioGroup>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.radio.groupThirdTitle" />}
            subtitle={<IntlMessages id="forms.radio.groupThirdSubTitle" />}
          >
            <ContentHolder>
              <RadioGroup
                options={plainOptions}
                onChange={onChange}
                name="value1"
                value={state.value1}
                style={{ marginBottom: '10px' }}
              />
              <RadioGroup
                options={options}
                onChange={onChange}
                name="value2"
                value={state.value2}
                style={{ marginBottom: '10px' }}
              />
              <RadioGroup
                options={optionsWithDisabled}
                onChange={onChange}
                name="value3"
                value={state.value3}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
