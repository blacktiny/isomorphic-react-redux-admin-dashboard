import React from 'react';
import clone from 'clone';
import TableWrapper from '../AntTables.styles';
import { EditableCell, DeleteCell } from '@iso/components/Tables/HelperCells';

export default function(props) {
  const [state, setState] = React.useState({
    columns: createcolumns(clone(props.tableInfo.columns)),
    dataList: props.dataList.getAll(),
  });
  const { columns, dataList } = state;

  function createcolumns(columns) {
    const editColumnRender = (text, record, index) => (
      <EditableCell
        index={index}
        columnsKey={columns[1].key}
        value={text[columns[1].key]}
        onChange={onCellChange}
      />
    );
    columns[1].render = editColumnRender;
    const deleteColumn = {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) => (
        <DeleteCell index={index} onDeleteCell={onDeleteCell} />
      ),
    };
    columns.push(deleteColumn);
    return columns;
  }
  function onCellChange(value, columnsKey, index) {
    dataList[index][columnsKey] = value;
    setState({ ...state, dataList });
  }
  function onDeleteCell(index) {
    dataList.splice(index, 1);
    setState({ ...state, dataList });
  }

  return (
    <TableWrapper
      columns={columns}
      dataSource={dataList}
      pagination={{ pageSize: 5 }}
      className="isoEditableTable"
    />
  );
}
