const layoutConfig = {
  className: 'isoCardBoxLayout',
  autoSize: true,
  verticalCompact: true,
  cols: { lg: 96, md: 96, sm: 96, xs: 96, xxs: 96 },
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 200 },
  draggableHandle: '.isoDragBox',
  isResizable: true,
  rowHeight: 1,
  margin: [0, 0],
};

const gutter = {
  gutterWidth: 10,
  gutterHeight: 10,
};
export { layoutConfig, gutter };
