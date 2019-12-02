import React from 'react';
import { Icon } from 'antd';
import Tabs, { TabPane } from '@iso/components/uielements/tabs';
import Select, { SelectOption } from '@iso/components/uielements/select';
import Button from '@iso/components/uielements/button';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import IntlMessages from '@iso/components/utility/intlMessages';

// const TabPane = Tabs.TabPane;
const Option = SelectOption;

function callback(key) {}

const operations = <Button>Extra Action</Button>;
const panes = [
  {
    title: 'Tab 1',
    content: 'Content of Tab 1',
    key: '1',
    closable: false,
  },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
];
export default function() {
  const [state, setState] = React.useState({
    activeKey: panes[0].key,
    panes: panes,
    tabPosition: 'top',
    newTabIndex: 0,
  });

  const onChange = activeKey => {
    setState({ ...state, activeKey });
  };

  // required for onEdit funtionality
  const add = () => {
    const panes = state.panes;
    const activeKey = `newTab${state.newTabIndex++}`;
    panes.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      key: activeKey,
    });
    setState({ ...state, panes, activeKey });
  };
  const remove = targetKey => {
    let activeKey = state.activeKey;
    let lastIndex;
    state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    setState({ ...state, panes, activeKey });
  };
  const changeTabPosition = tabPosition => {
    setState({ ...state, tabPosition });
  };

  const onEdit = (targetKey, action) => {
    if (action === 'remove') {
      remove(targetKey);
    } else {
      add(targetKey);
    }
  };
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="forms.Tabs.header" />}</PageHeader>
      <Box title={<IntlMessages id="forms.Tabs.basicTitle" />}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Box>
      <Box
        title={<IntlMessages id="forms.Tabs.simpleTabTitle" />}
        subtitle={<IntlMessages id="forms.Tabs.simpleTabSubTitle" />}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            Tab 1
          </TabPane>
          <TabPane tab="Tab 2" disabled key="2">
            Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Tab 3
          </TabPane>
        </Tabs>
      </Box>
      <Box title={<IntlMessages id="forms.Tabs.iconTabTitle" />}>
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
                <Icon type="apple" />
                Tab 1
              </span>
            }
            key="1"
          >
            Tab 1
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="android" />
                Tab 2
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
        </Tabs>
      </Box>
      <Box title={<IntlMessages id="forms.Tabs.miniTabTitle" />}>
        <Tabs defaultActiveKey="2" size="small">
          <TabPane tab="Tab 1" key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </Box>
      <Box title={<IntlMessages id="forms.Tabs.extraTabTitle" />}>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="Tab 1" key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </Box>
      <Box
        title={<IntlMessages id="forms.Tabs.TabpositionTitle" />}
        subtitle={<IntlMessages id="forms.Tabs.TabpositionSubTitle" />}
      >
        <div style={{ marginBottom: 16 }}>
          Tab position：
          <Select
            defaultValue="top"
            value={state.tabPosition}
            onChange={changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </div>
        <Tabs tabPosition={state.tabPosition}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </Box>
      <Box title={<IntlMessages id="forms.Tabs.cardTitle" />}>
        <Tabs onChange={callback} type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Box>
      <Box title={<IntlMessages id="forms.Tabs.editableTitle" />}>
        <Tabs
          onChange={onChange}
          activeKey={state.activeKey}
          type="editable-card"
          onEdit={onEdit}
        >
          {state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </Box>
      <Box title={<IntlMessages id="forms.Tabs.verticalTitle" />}>
        <div className="card-container">
          <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 220 }}>
            <TabPane tab="Tab 1" key="1">
              Content of tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of tab 3
            </TabPane>
            <TabPane tab="Tab 4" key="4">
              Content of tab 4
            </TabPane>
            <TabPane tab="Tab 5" key="5">
              Content of tab 5
            </TabPane>
            <TabPane tab="Tab 6" key="6">
              Content of tab 6
            </TabPane>
            <TabPane tab="Tab 7" key="7">
              Content of tab 7
            </TabPane>
            <TabPane tab="Tab 8" key="8">
              Content of tab 8
            </TabPane>
            <TabPane tab="Tab 9" key="9">
              Content of tab 9
            </TabPane>
            <TabPane tab="Tab 10" key="10">
              Content of tab 10
            </TabPane>
            <TabPane tab="Tab 11" key="11">
              Content of tab 11
            </TabPane>
          </Tabs>
        </div>
      </Box>
    </LayoutWrapper>
  );
}
