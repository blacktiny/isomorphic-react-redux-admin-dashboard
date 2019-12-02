import React from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import CreateTaskForm from './Task/TaskCreateOrUpdate/TaskCreateOrUpdate';
import TaskDetails from './Task/TaskDetails/TaskDetials';
import drawerActions from '@iso/redux/drawer/actions';
import { createGlobalStyle } from 'styled-components';

const DrawerStyles = createGlobalStyle`
.ant-drawer {}
.ant-drawer-content-wrapper{
  width: 100% !important;
  @media (min-width: 768px){
    width: 500px!important;
  }
  @media (min-width: 1200px){
    width: 700px!important;
  }
}

`;
const DRAWER_COMPONENTS = {
  CREATE_OR_EDIT_TASK: CreateTaskForm,
  CARD_DETAILS: TaskDetails,
  /* other modals */
};

const DrawerRoot = ({
  drawerType,
  drawerProps,
  drawerVisibility,
  closeDrawer,
  openDrawer,
}) => {
  if (!drawerType) {
    return null;
  }

  const SpecificDrawer = DRAWER_COMPONENTS[drawerType];
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={closeDrawer}
      visible={drawerVisibility}
      // width={700}
      destroyOnClose={true}
    >
      <DrawerStyles />

      <SpecificDrawer
        {...drawerProps}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
      />
    </Drawer>
  );
};

export default connect(
  state => state.drawer,
  { ...drawerActions }
)(DrawerRoot);
