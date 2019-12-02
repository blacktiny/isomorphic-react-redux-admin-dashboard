import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';
import uuidV4 from 'uuid/v4';
import RenderTaskForm from './RenderCreateTaskForm/RenderCreateTaskForm';
import { dateFormat } from '@iso/components/ScrumBoard/FieldFormats';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';
import { CreateTaskWrapper } from './TaskCreateOrUpdate.style';

const initialValues = {
  id: '',
  title: '',
  description: '',
  labels: [],
  assignees: [],
  attachments: [],
  comments: [],
  todos: [],
  column_id: '',
  editing: false,
  created_at: moment(Date.now()),
  updated_at: moment(Date.now()),
  due_date: moment(Date.now()),
  selectOptions: ['success', 'error', 'processing', 'warning', 'default'],
  selectAssignees: ['Mark', 'Bob', 'Anthony'],
};

const TaskForm = props => {
  const initials = {
    ...initialValues,
    ...props.initials,
    due_date: moment(
      props.initials && props.initials.due_date
        ? props.initials.due_date
        : Date.now()
    ),
    updated_at: moment(Date.now()),
  };

  const handleSubmit = formProps => {
    if (!formProps.editing) {
      formProps.id = uuidV4();
      formProps.column_id = props.columnId;
      formProps.editing = false;
      formProps.created_at = moment(formProps.created_at)
        .format(dateFormat)
        .toString();
    }

    props.createOrUpdateTaskWatcher({
      ...formProps,
      due_date: moment(formProps.due_date)
        .format(dateFormat)
        .toString(),
      updated_at: moment(formProps.updated_at)
        .format(dateFormat)
        .toString(),
    });
    props.closeDrawer();
  };

  return (
    <CreateTaskWrapper>
      <Formik
        initialValues={initials}
        onSubmit={handleSubmit}
        render={formikProps => (
          <RenderTaskForm
            {...formikProps}
            onCancel={props.closeDrawer}
            onDelete={() => {
              props.deleteTask({
                taskId: props.initials.id,
                column_id: props.columnId,
              });
              props.closeDrawer();
            }}
            onEditCancel={() => {
              props.cancelEditTask(props.initials);
              props.openDrawer({
                drawerType: 'CARD_DETAILS',
                drawerProps: {
                  task: { ...props.initials },
                  columnId: props.columnId,
                },
              });
            }}
          />
        )}
      />
    </CreateTaskWrapper>
  );
};
export default connect(
  null,
  {
    ...scrumBoardActions,
  }
)(TaskForm);
