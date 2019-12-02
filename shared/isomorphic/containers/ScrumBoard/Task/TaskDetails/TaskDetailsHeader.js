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
export default function CardDetailsHeader({
  onIconClick,
  onBtnClick,
  onDelete,
  onEditCancel,
}) {
  return (
    <Container>
      <ActionButtons>
        <IconSvg src={ArrowIcon} onClick={onIconClick} />
        <Button htmlType="button" type="primary" onClick={onBtnClick}>
          Edit Task
        </Button>
        {onEditCancel && (
          <Button type="default" onClick={onEditCancel}>
            Cancel
          </Button>
        )}
      </ActionButtons>
      <IconButtons>
        <Tooltip
          title="Please Implements Your Own Share Methods"
          placement="bottom"
        >
          <IconSvg src={ShareIcon} />
        </Tooltip>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
          onConfirm={onDelete}
          placement="bottomRight"
        >
          <IconSvg src={RemoveIcon} />
        </Popconfirm>
      </IconButtons>
    </Container>
  );
}
