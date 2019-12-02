import React from 'react';
import styled from 'styled-components';
import { Button, Popconfirm, Tooltip } from 'antd';
import { IconSvg } from '@iso/components/ScrumBoard/IconSvg/IconSvg';
import RemoveIcon from '@iso/assets/images/icon/02-icon.svg';
import ShareIcon from '@iso/assets/images/icon/03-icon.svg';
import ArrowIcon from '@iso/assets/images/icon/04-icon.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background-color: #ffffff;
  border-bottom: 1px solid #e9e9e9;
`;

const ActionButtons = styled.div`
  > img {
    margin-right: 15px;
    border: none;
    width: 40px;
    margin-left: -5px;
  }
`;

const IconButtons = styled.div`
  > img {
    margin-left: 15px;
    margin-right: 0;
  }
`;
export default function CreateTaskHeader({
  values,
  onCancel,
  onDelete,
  onEditCancel,
}) {
  return (
    <Container>
      <ActionButtons>
        <IconSvg src={ArrowIcon} onClick={onCancel} />
        <Button htmlType="submit" type="primary">
          {values && !values.editing ? 'Save Task' : 'Update Task'}
        </Button>
        {values && values.editing && onEditCancel && (
          <Button
            type="default"
            onClick={onEditCancel}
            style={{ marginLeft: 16 }}
          >
            Cancel
          </Button>
        )}
      </ActionButtons>
      <IconButtons>
        <Tooltip title="Please Implements Your Own Share Methods">
          <IconSvg src={ShareIcon} />
        </Tooltip>
        {values && values.editing && (
          <Popconfirm
            title="Are you sure delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={onDelete}
          >
            <IconSvg src={RemoveIcon} />
          </Popconfirm>
        )}
      </IconButtons>
    </Container>
  );
}
