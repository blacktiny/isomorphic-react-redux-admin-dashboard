import React from 'react';
import { Form, Field } from 'formik';
import { Row, Col, Tooltip } from 'antd';
import {
  AntDatePicker,
  AntSelect,
  AntTextArea,
} from '@iso/components/ScrumBoard/AntFields';
import { dateFormat } from '@iso/components/ScrumBoard/FieldFormats';
import CreateTaskHeader from '../CreateTaskHeader/CreateTaskHeader';
import HeadingWithIcon from '@iso/components/ScrumBoard/HeadingWithIcon/HeadingWithIcon';
import TitleIcon from '@iso/assets/images/icon/05-icon.svg';
import DescriptionIcon from '@iso/assets/images/icon/06-icon.svg';
import AttachmentIcon from '@iso/assets/images/icon/01-icon.svg';

import { AttachmentWrapper } from '../TaskCreateOrUpdate.style';

export default ({
  handleSubmit,
  values,
  submitCount,
  onCancel,
  onDelete,
  onEditCancel,
}) => (
  <Form onSubmit={handleSubmit}>
    <CreateTaskHeader
      values={values}
      onCancel={onCancel}
      onDelete={onDelete}
      onEditCancel={onEditCancel}
    />
    <Field
      component={AntTextArea}
      name="title"
      type="text"
      tasklabel={<HeadingWithIcon heading="Task Name" iconSrc={TitleIcon} />}
      placeholder="Add Task Name"
      submitCount={submitCount}
      hasFeedback
      rows={3}
      formitem={{
        colon: false,
      }}
    />

    <Row gutter={16}>
      <Col span={8}>
        <Field
          component={AntSelect}
          mode="multiple"
          name="assignees"
          tasklabel={<HeadingWithIcon heading="Assign Members" />}
          defaultValue={values.assignees}
          selectOptions={values.selectAssignees}
          submitCount={submitCount}
          tokenSeparators={[',']}
          hasFeedback
          size="large"
        />
      </Col>
      <Col span={8}>
        <Field
          component={AntSelect}
          mode="multiple"
          name="labels"
          tasklabel={<HeadingWithIcon heading="Labels" />}
          defaultValue={values.labels}
          selectOptions={values.selectOptions}
          submitCount={submitCount}
          tokenSeparators={[',']}
          hasFeedback
          size="large"
        />
      </Col>

      <Col span={8}>
        <Field
          component={AntDatePicker}
          name="due_date"
          tasklabel={<HeadingWithIcon heading="Due Date" />}
          defaultValue={values.due_date}
          format={dateFormat}
          submitCount={submitCount}
          hasFeedback
          size="large"
        />
      </Col>
    </Row>

    <Field
      component={AntTextArea}
      name="description"
      type="text"
      placeholder="Add a more detailed description..."
      tasklabel={
        <HeadingWithIcon heading="Description" iconSrc={DescriptionIcon} />
      }
      submitCount={submitCount}
      hasFeedback
      rows={4}
      formitem={{
        colon: false,
      }}
    />
    <Tooltip title="Please Implements Your Own Attachment Methods">
      <AttachmentWrapper>
        <HeadingWithIcon heading="Attachments" iconSrc={AttachmentIcon} />
        <HeadingWithIcon
          heading="Add an Attachment...."
          iconSrc={AttachmentIcon}
        />
      </AttachmentWrapper>
    </Tooltip>
  </Form>
);
