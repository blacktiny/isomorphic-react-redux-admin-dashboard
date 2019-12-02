import React from 'react';
import { Row, Col } from 'antd';
import Checkbox, { CheckboxGroup } from '@iso/components/uielements/checkbox';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';

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
const defaultCheckedList = ['Apple', 'Orange'];

export default function() {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const handleOnChange = checkedValues => {};

  const onChange = checkedList => {
    setCheckedList(checkedList);
    setIndeterminate(
      !!checkedList.length && checkedList.length < plainOptions.length
    );
    setCheckAll(checkedList.length === plainOptions.length);
  };
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="forms.checkbox.header" />}</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.checkbox.basicTitle" />}
            subtitle={<IntlMessages id="forms.checkbox.basicSubTitle" />}
          >
            <ContentHolder>
              <Checkbox onChange={handleOnChange}>Checkbox</Checkbox>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.checkbox.groupTitle" />}
            subtitle={<IntlMessages id="forms.checkbox.groupSubTitle" />}
          >
            <ContentHolder>
              <CheckboxGroup
                options={plainOptions}
                defaultValue={['Apple']}
                onChange={handleOnChange}
              />
              <br />
              <CheckboxGroup
                options={options}
                defaultValue={['Pear']}
                onChange={handleOnChange}
              />
              <br />
              <CheckboxGroup
                options={optionsWithDisabled}
                disabled
                defaultValue={['Apple']}
                onChange={handleOnChange}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.checkbox.groupCheckTitle" />}
            subtitle={<IntlMessages id="forms.checkbox.groupCheckSubTitle" />}
          >
            <ContentHolder>
              <div>
                <div
                  style={{
                    borderBottom: '1px solid #E9E9E9',
                    paddingBottom: '15px',
                  }}
                >
                  <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                  >
                    Check all
                  </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                  options={plainOptions}
                  value={checkedList}
                  onChange={onChange}
                />
              </div>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
