import React from 'react';
import { Icon } from 'antd';
import { Textarea as Input } from './uielements/input';

export default function EditableComponent(props) {
  const [state, setState] = React.useState({
    value: props.value,
    editable: false,
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({ ...state, value });
  }
  function check() {
    setState({ ...state, editable: false });
    if (props.onChange) {
      props.onChange(props.itemKey, state.value);
    }
  }
  function edit() {
    setState({ ...state, editable: true });
  }

  const { value, editable } = state;
  return (
    <div className="isoNoteContent">
      {editable ? (
        <div className="isoNoteEditWrapper">
          <Input
            rows={3}
            value={value}
            onChange={handleChange}
            onPressEnter={check}
          />
          <Icon type="check" className="isoNoteEditIcon" onClick={check} />
        </div>
      ) : (
        <p className="isoNoteTextWrapper" onClick={edit}>
          {value || ' '}
          <Icon type="edit" className="isoNoteEditIcon" />
        </p>
      )}
    </div>
  );
}
