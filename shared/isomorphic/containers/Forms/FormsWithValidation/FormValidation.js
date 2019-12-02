import React from 'react';
import { Input } from 'antd';
import Form from '@iso/components/uielements/form';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import Notification from '@iso/components/Notification';
const FormItem = Form.Item;

function FormWIthSubmissionButton(props) {
  const [confirmDirty, setConfirmDirty] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Notification(
          'success',
          'Received values of form',
          JSON.stringify(values)
        );
      }
    });
  };
  const handleConfirmBlur = e => {
    const value = e.target.value;
    setConfirmDirty(confirmDirty => confirmDirty || !!value);
  };
  const checkPassword = (rule, value, callback) => {
    const form = props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  const checkConfirm = (rule, value, callback) => {
    const form = props.form;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 14,
        offset: 6,
      },
    },
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem {...formItemLayout} label="E-mail" hasFeedback>
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input name="email" id="email" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Password" hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              validator: checkConfirm,
            },
          ],
        })(<Input type="password" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: 'Please confirm your password!',
            },
            {
              validator: checkPassword,
            },
          ],
        })(<Input type="password" onBlur={handleConfirmBlur} />)}
      </FormItem>
      <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
          rules: [
            {
              message: 'Please input your E-mail!',
              required: true,
            },
          ],
        })(
          <Checkbox>
            I have read the <a href="# ">agreement</a>
          </Checkbox>
        )}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </FormItem>
    </Form>
  );
}

const WrappedFormWIthSubmissionButton = Form.create()(FormWIthSubmissionButton);
export default WrappedFormWIthSubmissionButton;
