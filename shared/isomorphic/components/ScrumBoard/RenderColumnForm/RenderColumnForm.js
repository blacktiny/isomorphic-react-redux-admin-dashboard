import React from 'react';
import { Button } from 'antd';
import { AntInput } from '../AntFields';
import { isRequired } from '../ValidateFields';
import { Form, Field } from 'formik';
import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';
import FolderIcon from './05-icon.svg';
import RenderColumnWrapper from './RenderColumnForm.style';

const RenderColumnForm = props => {
  const { handleSubmit, onCancel, submitCount, values } = props;
  return (
    <RenderColumnWrapper className="render-form-wrapper">
      {!props.initials && (
        <HeadingWithIcon
          iconSrc={FolderIcon}
          heading={'Column Name'}
          size={'20px'}
        />
      )}
      <Form onSubmit={handleSubmit}>
        <Field
          component={AntInput}
          name="title"
          type="text"
          defaultValue={values.title}
          placeholder="Column Name"
          validate={isRequired}
          submitCount={submitCount}
          hasFeedback
          size="large"
          formitem={{
            colon: false,
          }}
        />
        <Button type="default" onClick={onCancel} size="large">
          Cancel
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginLeft: 10 }}
          size="large"
        >
          {props.initials && props.initials.editing ? 'Update Column' : 'Save'}
        </Button>
      </Form>
    </RenderColumnWrapper>
  );
};

export default RenderColumnForm;
