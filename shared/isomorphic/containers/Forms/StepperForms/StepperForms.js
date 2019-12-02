import React from 'react';
import IsomorphicTransfer from '../Transfer/Transfer';
import AntdUpload from '../Upload/Upload';
import AntdCheckbox from '../Checkbox/Checkbox';
import AntdAutocomplete from '../AutoComplete/AutoComplete';
import AntdRadiobox from '../Radiobox/Radiobox';
import AntdSelectBox from '../Select/Select';
import AntdMention from '../Mention/Mention';
import AntdRater from '../Rating/Rating';
import AntdSlider from '../Slider/Slider';
import AntdInputNumber from '../InputNumber/InputNumber';
import Button from '@iso/components/uielements/button';
import Steps from '@iso/components/uielements/steps';
import message from '@iso/components/uielements/message';
import Input from '@iso/components/uielements/input';
import PageHeader from '@iso/components/utility/pageHeader';
import ContentHolder from '@iso/components/utility/contentHolder';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import { FormFieldTitle } from './StepperForms.styles';
const Step = Steps.Step;

const steps = [
  {
    title: 'First',
    content: (
      <div className="isoExampleWrapper">
        <div style={{ padding: '10px 20px' }}>
          <FormFieldTitle className="isoFormFieldTitle">Input</FormFieldTitle>
          <Input className="isomorphicInputBox" />
        </div>

        <div style={{ padding: '20px' }}>
          <IsomorphicTransfer />
        </div>

        <div style={{ padding: '20px' }}>
          <AntdUpload className="isomorphicUpload" />
        </div>

        <div style={{ padding: '20px' }}>
          <AntdCheckbox className="isomorphicCheckbox" />
        </div>
      </div>
    ),
  },
  {
    title: 'Second',
    content: (
      <div className="isoExampleWrapper">
        <AntdAutocomplete />
        <AntdRadiobox />
        <AntdSelectBox />
        <AntdMention />
      </div>
    ),
  },
  {
    title: 'Last',
    content: (
      <div className="isoExampleWrapper">
        <AntdRater />
        <AntdSlider />
        <AntdInputNumber />
      </div>
    ),
  },
];

export default function() {
  const [current, setCurrent] = React.useState(0);

  function next() {
    setCurrent(current => current + 1);
  }
  function prev() {
    setCurrent(current => current - 1);
  }
  return (
    <LayoutWrapper>
      <PageHeader>Stepper Form</PageHeader>
      <ContentHolder>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div s="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
        </div>
      </ContentHolder>
    </LayoutWrapper>
  );
}
