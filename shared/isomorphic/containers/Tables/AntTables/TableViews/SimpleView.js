import React from 'react';
import TableWrapper from '../AntTables.styles';

export default function(props) {
  const dataSource = props.dataSource || props.dataList.getAll();
  const columns = props.columns || props.tableInfo.columns;
  return (
    <TableWrapper
      pagination={false}
      columns={columns}
      dataSource={dataSource}
      className="isoSimpleTable"
    />
  );
}
