import React, { Fragment } from 'react';
import { Badge, Button, Avatar } from 'antd';
import TaskForm from '@iso/components/scrumBoard/TaskForm';
import Comments from '@iso/components/scrumBoard/Comments';
import { CardHeader } from './style';
const TaskDetials = ({ task, onDelete, onEdit, onCancel }) => {
  return (
    <div style={{ marginTop: 24 }}>
      {task.editing ? (
        <TaskForm initials={task} onCancel={onCancel} />
      ) : (
        <>
          <CardHeader>
            <p>Title : {task.title}</p>
            <p>
              <Button type="warning" onClick={onEdit}>
                Edit Task
              </Button>
              <Button
                type="danger"
                onClick={onDelete}
                style={{ marginLeft: 16 }}
              >
                Delete
              </Button>
            </p>
          </CardHeader>
          <p>
            <strong>Labels :</strong>
            {task.labels.map(label => (
              <Badge
                key={label}
                status={label}
                text={`${label[0].toUpperCase()}${label.slice(1)}`}
                style={{ margin: 10 }}
              />
            ))}
          </p>
          <p>
            <strong>Description :</strong> {task.description}
          </p>
          <p>
            <strong>Assignees : </strong>
            {task.assignees.map(assignee => (
              <Fragment key={assignee}>
                <Avatar icon="user" />
              </Fragment>
            ))}
          </p>
          <p>
            <strong>Due Date : </strong>
            {task.due_date}
          </p>

          <Comments />
        </>
      )}
    </div>
  );
};

export default TaskDetials;
