import React, { useState, useEffect } from 'react';
import Radio from '@iso/ui/Antd/Radio/Radio';
import DragAndDropUploader from '@iso/ui/ImageUploader/DragAndDropUploader';
import Checkbox from '@iso/ui/Antd/Checkbox/Checkbox';
import Text from '@iso/ui/Text/Text';

export const RadioGroupComp = ({ field, form, ...props }) => {
  const { dataOptions } = props;
  const [data, setData] = useState('');
  const onChangeValue = checkedValue => {
    setData(checkedValue.target.value);
  };
  useEffect(() => {
    form.setFieldValue(field.name, data);
  }, [data]);

  return (
    <React.Fragment>
      <Radio.Group onChange={onChangeValue}>
        {dataOptions &&
          dataOptions.map((single, i) => {
            return (
              <Radio.Button key={i} value={single.value}>
                {single.label}
              </Radio.Button>
            );
          })}
      </Radio.Group>
      {form.touched[field.name] && form.errors[field.name] && (
        <Text content={form.errors[field.name]} color="red" />
      )}
    </React.Fragment>
  );
};

export const PhotoUploadComponent = ({ field, form, ...props }) => {
  const onChange = value => {
    form.setFieldValue(field.name, value);
  };
  return (
    <React.Fragment>
      <DragAndDropUploader
        name={field ? field.name : 'reviewPhotos'}
        value={field ? field.value : []}
        onUploadChange={onChange}
      />
      {form.touched[field.name] && form.errors[field.name] && (
        <Text content={form.errors[field.name]} color="red" />
      )}
    </React.Fragment>
  );
};

export const CheckBoxComp = ({ field, form, ...props }) => {
  const [checkedValue, setCheckedValue] = useState(false);
  const { checkBoxContent } = props;

  const onChange = event => {
    setCheckedValue(!checkedValue);
  };

  useEffect(() => {
    form.setFieldValue(field.name, checkedValue);
  }, [checkedValue]);

  return (
    <React.Fragment>
      <Checkbox onChange={onChange}>
        {checkBoxContent ? checkBoxContent : ''}
      </Checkbox>
      {form.touched[field.name] && form.errors[field.name] && (
        <Text content={form.errors[field.name]} color="red" />
      )}
    </React.Fragment>
  );
};
