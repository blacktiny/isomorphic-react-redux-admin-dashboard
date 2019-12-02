import React, { Fragment } from 'react';
import { Card, Avatar, Icon, Badge, Popconfirm } from 'antd';
import { CardBodyContent, HrBar, CardFooter, CardBody } from './style';

const TaskCard = ({ task, showDrawer, onDelete }) => (
  <Card
    style={{ width: '100%' }}
    bodyStyle={{ padding: 0 }}
    headStyle={{ borderBottom: 'none' }}
    title={task.title}
    extra={
      <Popconfirm
        title="Are you sure delete this task?"
        okText="Yes"
        cancelText="No"
        onConfirm={onDelete}
      >
        <Icon type="delete" style={{ cursor: 'pointer' }} />
      </Popconfirm>
    }
  >
    <CardBody onClick={showDrawer}>
      {task.labels.map(label => (
        <Badge key={label} status={label} />
      ))}
      <CardBodyContent>
        <div>
          <Icon type="calendar" /> {task.created_at} - {task.due_date}
        </div>
        <small>
          {(Date.parse(task.due_date) - Date.parse(task.created_at)) /
            (60 * 60 * 1000)}{' '}
          Hrs
        </small>
      </CardBodyContent>
    </CardBody>
    <HrBar />
    <CardFooter>
      <span>
        <Icon type="paper-clip" /> 0
        <Icon type="meh" style={{ marginLeft: 16 }} /> 0
      </span>
      <span>
        {task.assignees.map(assignee => (
          <Fragment key={assignee}>
            <Avatar icon="user" />
          </Fragment>
        ))}
      </span>
    </CardFooter>
  </Card>
);

export default TaskCard;
