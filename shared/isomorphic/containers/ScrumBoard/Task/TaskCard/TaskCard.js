import React, { Fragment } from 'react';
import { Card, Badge, Popconfirm, Tooltip } from 'antd';
import moment from 'moment';
import { IconSvg } from '@iso/components/ScrumBoard/IconSvg/IconSvg';
import { HrBar, CardFooter, CardBody } from '../Task.style';
import ClockIcon from '@iso/assets/images/icon/17.svg';
import plus from '@iso/assets/images/icon/24.svg';
import RemoveIcon from '@iso/assets/images/icon/02-icon.svg';
import CommentsIcon from '@iso/assets/images/icon/09-icon.svg';
import AttachmentIcon from '@iso/assets/images/icon/01-icon.svg';
import {
  CardAttachment,
  CardComment,
  FooterLeft,
  CardTitle,
  CardIcon,
} from './TaskCard.style';

const TaskCard = ({ task, showDrawer, onDelete }) => {
  const CardHeader = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CardIcon src={ClockIcon} alt="Clock Icon" mr={10} />
      {moment(task.created_at).format('ddd d')}
    </div>
  );
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
      }}
      bodyStyle={{ padding: 0 }}
      headStyle={{ borderBottom: 'none', fontSize: 14, color: '#788195' }}
      bordered={false}
      title={CardHeader}
      extra={
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
          onConfirm={onDelete}
        >
          <IconSvg src={RemoveIcon} mr={'0'} width={25} height={25} />
        </Popconfirm>
      }
    >
      <CardBody onClick={showDrawer}>
        <CardTitle>{task.title}</CardTitle>
        {task.labels.map(label => (
          <Badge key={label} status={label} />
        ))}
      </CardBody>
      <HrBar />
      <CardFooter>
        <FooterLeft>
          <CardAttachment>
            <CardIcon src={AttachmentIcon} mr={5} />0
          </CardAttachment>
          <CardComment>
            <CardIcon src={CommentsIcon} mr={5} />0
          </CardComment>
        </FooterLeft>
        <span style={{ display: 'flex' }}>
          {task.assignees.map(assignee => (
            <Fragment key={assignee}>
              <Tooltip
                title="Please Implements Your Own Assigne Methods"
                placement="bottomRight"
              >
                <IconSvg
                  src={plus}
                  radius="10% 50% 50%"
                  mr={'0'}
                  ml={8}
                  width={22}
                  height={22}
                />
              </Tooltip>
            </Fragment>
          ))}
        </span>
      </CardFooter>
    </Card>
  );
};
export default TaskCard;
