import React from 'react';
import IsoTransfer from './Transfer/Transfer';
import IsoTreeSelect from './TreeSelect/TreeSelect';
import IsoUpload from './Upload/Upload';
import IsoCheckbox from './Checkbox/Checkbox';
import IsoAutocomplete from './AutoComplete/AutoComplete';
import IsoRadiobox from './Radiobox/Radiobox';
import IsoSelectBox from './Select/Select';
import IsoMention from './Mention/Mention';
import IsoSlider from './Slider/Slider';
import InputField from './Input/Input';

export default function() {
  return (
    <div>
      <InputField />
      <IsoAutocomplete />
      <IsoCheckbox />
      <IsoUpload />
      <IsoSelectBox />
      <br />
      <IsoTreeSelect />
      <IsoMention />
      <IsoRadiobox />
      <br />
      <IsoSlider />
      <IsoTransfer />
    </div>
  );
}
