import React from 'react';
import { Form, Field } from 'formik';
import { Button, Tooltip } from 'antd';
import { AntInput, AntSelect, AntSwitch } from '../AntFields';
import { isRequired } from '../ValidateFields';
import ThumbIcon from './08-icon.svg';
import { Wrapper } from './RenderBoardForm.style';
const formItemLayout = {
  labelCol: {
    sm: { span: 12 },
    md: { span: 12, push: 3 },
    style: { textAlign: 'left' },
  },
  wrapperCol: { sm: { span: 12 }, md: { span: 3, pull: 12 } },
  colon: false,
};
export default ({ handleSubmit, values, submitCount }) => (
  <Wrapper>
    <Form onSubmit={handleSubmit}>
      <Field
        component={AntInput}
        name="title"
        type="text"
        label="Project Name*"
        validate={isRequired}
        submitCount={submitCount}
        hasFeedback
        placeholder="Enter project name..."
        size="large"
      />

      <Field
        component={AntSelect}
        name="category"
        label="Project Category*"
        placeholder="Select a Category"
        defaultValue={values.category}
        selectOptions={values.selectOptions}
        validate={isRequired}
        submitCount={submitCount}
        hasFeedback
        dropdownClassName="project-category"
        size="large"
      />

      <Field
        component={AntSwitch}
        className="switch-form-item"
        defaultChecked={values.open_to_company}
        name="open_to_company"
        label=" Public To RedQ Studio"
        formitem={formItemLayout}
      />

      <Field
        component={AntSwitch}
        className="switch-form-item"
        name="open_to_members"
        defaultChecked={values.open_to_members}
        formitem={formItemLayout}
        label=" Private To Project Members"
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#1890FF',
          fontSize: '16px',
          fontWeight: 500,
        }}
        className={'field-container'}
      >
        <img
          src={ThumbIcon}
          alt="Project"
          width={40}
          height={40}
          style={{ marginRight: 10, borderRadius: 6 }}
        />
        <Tooltip
          title="Please Implements Your Own Avatar Methods"
          placement="right"
        >
          <div>Select Avatar</div>
        </Tooltip>
      </div>

      <Button
        htmlType="submit"
        type="primary"
        style={{ width: '100%', marginTop: 20 }}
        size="large"
      >
        {!values.editing ? 'Create Project' : 'Update Task'}
      </Button>
    </Form>
  </Wrapper>
);
