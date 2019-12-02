import React from 'react';
import Input from '../uielements/input';
import { Icon } from 'antd';

export default function(props) {
  const [state, setState] = React.useState({
    value: props.value,
    editable: false,
  });
  const handleChange = event => {
    const value = event.target.value;
    setState({ ...state, value });
  };
  const check = () => {
    setState({ ...state, editable: false });
    if (props.onChange) {
      props.onChange(state.value, props.columnsKey, props.index);
    }
  };
  const edit = () => {
    setState({ ...state, editable: true });
  };
  const { value, editable } = state;
  return (
    <div className="isoEditData">
      {editable ? (
        <div className="isoEditDataWrapper">
          <Input value={value} onChange={handleChange} onPressEnter={check} />
          <Icon type="check" className="isoEditIcon" onClick={check} />
        </div>
      ) : (
        <p className="isoDataWrapper">
          {value || ' '}
          <Icon type="edit" className="isoEditIcon" onClick={edit} />
        </p>
      )}
    </div>
  );
}
