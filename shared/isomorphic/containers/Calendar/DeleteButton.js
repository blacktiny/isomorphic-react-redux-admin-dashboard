import React from 'react';
import Popconfirm from '@iso/components/Feedback/Popconfirm';
import Button from '@iso/components/uielements/button';
import { notification } from '@iso/components';

export default function({ handleDelete }) {
  return (
    <Popconfirm
      title="Sure to delete the event?"
      okText="DELETE"
      cancelText="No"
      onConfirm={() => {
        notification('error', 'Deleted', '');
        handleDelete();
      }}
    >
      <Button icon="close" type="default" className="isoDeleteBtn" />
    </Popconfirm>
  );
}
