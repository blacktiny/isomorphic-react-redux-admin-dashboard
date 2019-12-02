import React from 'react';
import { connect } from 'react-redux';
import { Layout, Button, Popover, Icon, Checkbox } from 'antd';
import SearchInput from '@iso/components/ScrumBoard/SearchInput/SearchInput';
import { Scrollbars } from 'react-custom-scrollbars';
import modalActions from '@iso/redux/modal/actions';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';
import { Title, Filters, Header, HeaderSecondary } from './AppLayout.style';

const { Content } = Layout;

const ALL_TYPES = [
  { label: 'Private', value: 'Private' },
  { label: 'Public', value: 'Public' },
];

const CATEGORIES = [
  { label: 'Software', value: 'Software' },
  { label: 'OPs', value: 'OPs' },
  { label: 'Service Desk', value: 'Service Desk' },
  { label: 'Business', value: 'Business' },
  { label: 'General', value: 'General' },
];

const AppLayout = ({ children, setSearchText, history, match }) => (
  <Layout style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
    <Header>
      <Title>My Projects</Title>

      <Button type="primary" onClick={() => history.push(`${match.url}/new`)}>
        Create Project
      </Button>
    </Header>

    <HeaderSecondary>
      <SearchInput onChange={value => setSearchText(value)} />

      <Filters>
        <Popover
          placement="bottom"
          overlayClassName=""
          content={
            <Checkbox.Group
              options={ALL_TYPES}
              defaultValue={['Apple']}
              onChange={value => console.log(value)}
            />
          }
          trigger="click"
        >
          <span>
            All Types <Icon type="caret-down" />
          </span>
        </Popover>
        <Popover
          placement="bottom"
          content={
            <Checkbox.Group
              options={CATEGORIES}
              defaultValue={['Apple']}
              onChange={value => console.log(value)}
            />
          }
          trigger="click"
        >
          <span>
            Categories
            <Icon type="caret-down" />
          </span>
        </Popover>
      </Filters>
    </HeaderSecondary>

    <Content
      style={{
        padding: '0 24px',
      }}
    >
      <Scrollbars style={{ width: '100%', height: 'calc(100vh - 300px)' }}>
        {children}
      </Scrollbars>
    </Content>
  </Layout>
);

export default connect(
  null,
  { ...modalActions, ...scrumBoardActions }
)(AppLayout);
