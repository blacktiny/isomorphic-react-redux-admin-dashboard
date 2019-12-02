import React from 'react';
import TableWrapper, { CustomizedTableWrapper } from '../AntTables.styles';
import Switch from '@iso/components/uielements/switch';
import Form from '@iso/components/uielements/form';
const FormItem = Form.Item;

const expandedRowRender = record => (
  <p>{`${record.firstName} lives in ${record.city}`}</p>
);
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };

const toggleOptions = [
  {
    defaultValue: true,
    title: 'Bordered',
    key: 'bordered',
  },
  {
    defaultValue: true,
    title: 'Loading',
    key: 'loading',
  },
  {
    defaultValue: true,
    title: 'Pagination',
    key: 'pagination',
  },
  {
    defaultValue: title,
    title: 'Title',
    key: 'title',
  },
  {
    defaultValue: showHeader,
    title: 'Show Header',
    key: 'showHeader',
  },
  {
    defaultValue: footer,
    title: 'Footer',
    key: 'footer',
  },
  {
    defaultValue: expandedRowRender,
    title: 'Expanded Row Render',
    key: 'expandedRowRender',
  },
  {
    defaultValue: {},
    title: 'Checkbox',
    key: 'rowSelection',
  },
  {
    defaultValue: scroll,
    title: 'Scrollable',
    key: 'scroll',
  },
];
export default function(props) {
  const [state, setState] = React.useState({
    bordered: undefined,
    loading: undefined,
    pagination: true,
    size: 'default',
    expandedRowRender,
    title,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
  });

  function renderSwitch(option) {
    const checked = state[option.key] !== undefined;
    const onChange = () => {
      if (!checked) {
        setState({ [option.key]: option.defaultValue });
      } else {
        setState({ [option.key]: undefined });
      }
    };
    return (
      <FormItem label={option.title} key={option.key}>
        <Switch checked={checked} onChange={onChange} />
      </FormItem>
    );
  }
  return (
    <CustomizedTableWrapper className="isoCustomizedTableWrapper">
      <div className="isoCustomizedTableControlBar">
        <Form layout="inline">
          {toggleOptions.map(option => renderSwitch(option))}
        </Form>
      </div>
      <TableWrapper
        {...state}
        columns={props.tableInfo.columns}
        dataSource={props.dataList.getAll()}
        className="isoCustomizedTable"
      />
    </CustomizedTableWrapper>
  );
}
