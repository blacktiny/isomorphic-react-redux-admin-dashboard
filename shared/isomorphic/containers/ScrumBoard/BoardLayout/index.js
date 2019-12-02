import React from 'react';
import { connect } from 'react-redux';
import { Layout, Button, Input } from 'antd';
import modalActions from '@iso/redux/modal/actions';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';

const { Header, Content } = Layout;
const Search = Input.Search;

const BoardLayout = ({ children, openModal, searchTask }) => (
  <Layout>
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <Search
        placeholder="Filter: Card"
        // enterButton="Search"
        size="large"
        style={{ width: '40%' }}
        onChange={e => searchTask(e.target.value)}
      />

      <Button
        type="primary"
        shape="circle"
        icon="plus"
        size="large"
        onClick={() => openModal({ modalType: 'CREATE_COLUMN' })}
      />
    </Header>

    <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
  </Layout>
);

export default connect(
  null,
  { ...modalActions, ...scrumBoardActions }
)(BoardLayout);
