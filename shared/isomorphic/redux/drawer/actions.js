const drawerActions = {
  SHOW_DRAWER: 'SHOW_DRAWER',
  HIDE_DRAWER: 'HIDE_DRAWER',

  openDrawer: payload => ({
    type: drawerActions.SHOW_DRAWER,
    payload,
  }),
  closeDrawer: () => ({
    type: drawerActions.HIDE_DRAWER,
  }),
};

export default drawerActions;
