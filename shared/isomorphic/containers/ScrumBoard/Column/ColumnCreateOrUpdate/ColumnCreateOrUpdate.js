import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Formik } from 'formik';
import uuidV4 from 'uuid/v4';
import RenderColumnForm from '@iso/components/ScrumBoard/RenderColumnForm/RenderColumnForm';
import { dateFormat } from '@iso/components/ScrumBoard/FieldFormats';
import scrumBoardActions from '@iso/redux/scrumBoard/actions';

const initialValues = {
  id: '',
  title: '',
  board_id: '',
  task_orders: [],
  editing: false,
  created_at: moment(Date.now(dateFormat)).toString(),
  updated_at: moment(Date.now(dateFormat)),
};

const CreateOrUpdateColumn = props => {
  const initials = {
    ...initialValues,
    ...props.initials,
    updated_at: moment(Date.now(dateFormat)).toString(),
  };

  const handleSubmit = values => {
    if (!values.editing) {
      values.id = uuidV4();
      values.board_id = props.boardId;
      values.editing = false;
    }
    props.createOrUpdateColumnWatcher({
      column: values,
      board_id: props.boardId,
    });
    if (!values.editing) {
      props.onCancel();
    }
  };

  return (
    <Formik
      initialValues={initials}
      onSubmit={handleSubmit}
      render={formikProps => (
        <RenderColumnForm
          {...formikProps}
          onCancel={props.onCancel}
          initials={props.initials}
        />
      )}
    />
  );
};
export default connect(
  null,
  {
    ...scrumBoardActions,
  }
)(CreateOrUpdateColumn);
