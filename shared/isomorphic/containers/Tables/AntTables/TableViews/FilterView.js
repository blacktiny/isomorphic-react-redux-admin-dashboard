import React from 'react';
import { Icon } from 'antd';
import { FilterDropdown } from '@iso/components/Tables/HelperCells';
import TableWrapper from '../AntTables.styles';

export default function(props) {
  const [state, setState] = React.useState({
    dataList: props.dataList.getAll(),
    filterDropdownVisible: false,
    searchText: '',
    filtered: false,
  });

  function onSearch() {
    let { searchText } = state;
    searchText = searchText.toUpperCase();
    const dataList = props.dataList
      .getAll()
      .filter(data => data['firstName'].toUpperCase().includes(searchText));
    setState({
      dataList,
      filterDropdownVisible: false,
      searchText: '',
      filtered: false,
    });
  }
  function onInputChange(event) {
    setState({ ...state, searchText: event.target.value });
  }
  let { searchText } = state;
  const columns = props.tableInfo.columns;
  const filterDropdown = (
    <FilterDropdown
      searchText={searchText}
      onInputChange={onInputChange}
      onSearch={onSearch}
    />
  );
  columns[0] = {
    ...columns[0],
    filterDropdown,
    filterIcon: (
      <Icon
        type="search"
        style={{ color: state.filtered ? '#108ee9' : '#aaa' }}
      />
    ),
    filterDropdownVisible: state.filterDropdownVisible,
    onFilterDropdownVisibleChange: visible => {
      setState({ ...state, filterDropdownVisible: visible });
      document.getElementById('tableFilterInput').focus();
    },
  };
  return (
    <TableWrapper
      columns={columns}
      onChange={props.onChange}
      dataSource={state.dataList}
      className="isoSearchableTable"
    />
  );
}
