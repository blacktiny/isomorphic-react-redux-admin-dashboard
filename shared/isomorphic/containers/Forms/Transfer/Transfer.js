import React from 'react';
import Transfer from '@iso/components/uielements/transfer';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';

export default function() {
  const [state, setState] = React.useState({
    mockData: [],
    targetKeys: [],
  });
  React.useEffect(() => {
    getMock();
  }, []);
  const getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    setState({ mockData, targetKeys });
  };
  const filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  };
  const handleChange = targetKeys => {
    setState({ ...state, targetKeys });
  };
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="forms.transfer.header" />}</PageHeader>

      <Box
        title={<IntlMessages id="forms.transfer.Title" />}
        subtitle={<IntlMessages id="forms.transfer.SubTitle" />}
      >
        <ContentHolder>
          <Transfer
            dataSource={state.mockData}
            showSearch
            filterOption={filterOption}
            targetKeys={state.targetKeys}
            onChange={handleChange}
            render={item => item.title}
            className="isomorphicTransfer"
          />
        </ContentHolder>
      </Box>
    </LayoutWrapper>
  );
}
