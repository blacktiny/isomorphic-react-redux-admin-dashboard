import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Badge, Row, Col, Tooltip } from 'antd';
import moment from 'moment';
import Comments from '@iso/components/ScrumBoard/Comments/Comments';
import HeadingWithIcon from '@iso/components/ScrumBoard/HeadingWithIcon/HeadingWithIcon';
import { IconSvg } from '@iso/components/ScrumBoard/IconSvg/IconSvg';
import CardDetailsHeader from './TaskDetailsHeader';
import {
  CardDetailsWrapper,
  AttachmentWrapper,
  TaskName,
  TaskDescription,
  ClockIcon,
} from '../Task.style';
import PlusIcon from '@iso/assets/images/icon/24.svg';
import TitleIcon from '@iso/assets/images/icon/05-icon.svg';
import DescriptionIcon from '@iso/assets/images/icon/06-icon.svg';
import AttachmentIcon from '@iso/assets/images/icon/01-icon.svg';
import Clock from '@iso/assets/images/icon/17.svg';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';

const TaskDetials = ({
  task,
  deleteTaskWatcher,
  editTask,
  closeDrawer,
  openDrawer,
  columnId,
}) => {
  return (
    <CardDetailsWrapper>
      <CardDetailsHeader
        onBtnClick={() => {
          editTask(task);
          openDrawer({
            drawerType: 'CREATE_OR_EDIT_TASK',
            drawerProps: {
              initials: { ...task, editing: true },
              columnId: columnId,
            },
          });
        }}
        onIconClick={closeDrawer}
        onDelete={() => {
          deleteTaskWatcher({
            task_id: task.id,
            column_id: columnId,
          });
          closeDrawer();
        }}
      />
      <HeadingWithIcon heading="Task Name" iconSrc={TitleIcon} />
      <TaskName>{task.title}</TaskName>
      <Row>
        <Col span={8}>
          <HeadingWithIcon heading="Assigned Members" />
          <p>
            {task.assignees.map(assignee => (
              <Fragment key={assignee}>
                {!assignee ? (
                  <IconSvg src={PlusIcon} />
                ) : (
                  <IconSvg
                    src={
                      'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                    }
                    padding={'0'}
                    radius={'10% 30% 25%'}
                  />
                )}
              </Fragment>
            ))}
          </p>
        </Col>
        <Col span={8}>
          <HeadingWithIcon heading="Labels" />
          <p>
            {task.labels.map(label => (
              <Tooltip
                title={`${label[0].toUpperCase()}${label.slice(1)}`}
                placement="bottom"
                key={label}
              >
                <Badge status={label} />
              </Tooltip>
            ))}
          </p>
        </Col>
        <Col span={8}>
          <HeadingWithIcon heading="Due Date" />
          <ClockIcon src={Clock} />
          {moment(task.due_date).format('ddd d, YYYY')}
        </Col>
      </Row>
      <div style={{ clear: 'both', paddingTop: '30px' }}>
        <HeadingWithIcon heading="Description" iconSrc={DescriptionIcon} />
        <TaskDescription>{task.description}</TaskDescription>
      </div>
      <AttachmentWrapper>
        <HeadingWithIcon heading="Attachments" iconSrc={AttachmentIcon} />
      </AttachmentWrapper>
      <Comments />
    </CardDetailsWrapper>
  );
};
export default connect(
  null,
  { ...scrumBoardActions }
)(TaskDetials);
