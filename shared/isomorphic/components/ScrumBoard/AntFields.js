import map from 'lodash/map';
import React from 'react';
import {
  DatePicker,
  Form,
  Input,
  TimePicker,
  Select,
  Badge,
  Switch,
} from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const CreateAntField = Component => ({
  field,
  form,
  hasFeedback,
  label,
  tasklabel,
  selectOptions,
  submitCount,
  type,
  formitem,
  className,
  ...props
}) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }) =>
    form.setFieldValue(field.name, value);
  const onChange = value => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);
  return (
    <div className="field-container">
      <FormItem
        label={label}
        colon={false}
        className={className}
        hasFeedback={
          (hasFeedback && submitted) || (hasFeedback && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? 'error' : 'success'}
        {...formitem}
      >
        {tasklabel && tasklabel}
        <Component
          {...field}
          {...props}
          onBlur={onBlur}
          onChange={type ? onInputChange : onChange}
        >
          {selectOptions &&
            map(selectOptions, name => (
              <Option key={name}>
                <Badge status={name} text={name} />
              </Option>
            ))}
        </Component>
      </FormItem>
    </div>
  );
};

export const AntSelect = CreateAntField(Select);
export const AntDatePicker = CreateAntField(DatePicker);
export const AntInput = CreateAntField(Input);
export const AntTimePicker = CreateAntField(TimePicker);
export const AntTextArea = CreateAntField(TextArea);
export const AntSwitch = CreateAntField(Switch);
