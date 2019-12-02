import React from 'react';
import { Row, Col } from 'antd';
import AutoComplete, {
  AutoCompleteOption,
} from '@iso/components/uielements/autocomplete';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';

const Option = AutoCompleteOption;

export default function() {
  const [result, setResult] = React.useState([]);
  const [dataSource, setDataSource] = React.useState([]);

  const handleCustomizedChange = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(
        domain => `${value}@${domain}`
      );
    }
    setResult(result);
  };

  const handleChange = value => {
    setDataSource(!value ? [] : [value, value + value, value + value + value]);
  };

  const children = result.map(email => {
    return <Option key={email}>{email}</Option>;
  });
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="forms.autocomplete.header" />}</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.autocomplete.simpleTitle" />}
            subtitle={<IntlMessages id="forms.autocomplete.simpleSubTitle" />}
          >
            <ContentHolder>
              <AutoComplete
                onChange={handleCustomizedChange}
                placeholder="Input here"
              >
                {children}
              </AutoComplete>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="forms.autocomplete.customizeTitle" />}
            subtitle={
              <IntlMessages id="forms.autocomplete.customizeSubTitle" />
            }
          >
            <ContentHolder>
              <AutoComplete
                dataSource={dataSource}
                style={{ height: 70 }}
                onChange={handleChange}
                placeholder="Input here"
              >
                <textarea style={{ height: 70 }} />
              </AutoComplete>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
