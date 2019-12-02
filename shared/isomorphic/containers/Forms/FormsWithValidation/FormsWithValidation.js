import React from 'react';
import Form from '@iso/components/uielements/form';
import Input from '@iso/components/uielements/input';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper.js';
import IntlMessages from '@iso/components/utility/intlMessages';
import FormValidation from './FormValidation';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default function() {
  return (
    <LayoutWrapper>
      <PageHeader>
        {<IntlMessages id="forms.formsWithValidation.header" />}
      </PageHeader>
      <Box>
        <Form>
          <FormItem
            {...formItemLayout}
            label={<IntlMessages id="forms.formsWithValidation.failLabel" />}
            validateStatus="error"
            help={<IntlMessages id="forms.formsWithValidation.failHelp" />}
          >
            <Input placeholder="unavailable choice" id="error" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={<IntlMessages id="forms.formsWithValidation.warningLabel" />}
            validateStatus="warning"
          >
            <Input placeholder="Warning" id="warning" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={
              <IntlMessages id="forms.formsWithValidation.ValidatingLabel" />
            }
            hasFeedback
            validateStatus="validating"
            help={
              <IntlMessages id="forms.formsWithValidation.ValidatingHelp" />
            }
          >
            <Input
              placeholder="I'm the content is being validated"
              id="validating"
            />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={<IntlMessages id="forms.formsWithValidation.SuccessLabel" />}
            hasFeedback
            validateStatus="success"
          >
            <Input placeholder="I'm the content" id="success" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={
              <IntlMessages id="forms.formsWithValidation.WarninghasFeedbackLabel" />
            }
            hasFeedback
            validateStatus="warning"
          >
            <Input placeholder="Warning" id="warning1" />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label={
              <IntlMessages id="forms.formsWithValidation.FailhasFeedbackLabel" />
            }
            hasFeedback
            validateStatus="error"
            help={
              <IntlMessages id="forms.formsWithValidation.FailhasFeedbackHelp" />
            }
          >
            <Input placeholder="unavailable choice" id="error1" />
          </FormItem>
        </Form>
      </Box>
      <PageHeader>Form Submit Validation</PageHeader>
      <Box>
        <FormValidation />
      </Box>
    </LayoutWrapper>
  );
}
