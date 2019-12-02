import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ className, name, onUpdate, items, value }) => {
  // RadioGroup State
  const [state, setState] = useState(value);

  // Add all classs to an array
  const addAllClasses = ['radio_group'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // Handle onChange Func
  const handleOnChange = e => {
    let value = e.target.value;
    setState(value);
    onUpdate(value);
  };

  return (
    <div className={addAllClasses.join(' ')}>
      {items.map(item => (
        <label
          htmlFor={item.id}
          key={`${name}_${item.id}`}
          className={`${item.disabled ? 'label disabled' : 'label'} 
        ${state === item.value ? 'active' : ''}`}
        >
          <input
            type="radio"
            id={item.id}
            name={name}
            value={item.value}
            disabled={item.disabled}
            checked={state === item.value}
            onChange={handleOnChange}
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};

RadioGroup.propTypes = {
  /** className of the RadioGroup */
  className: PropTypes.string,
  /** name of the RadioGroup input field */
  name: PropTypes.string,
  /** name of the RadioGroup input field */
  // items: PropTypes.array,
  /**
   * callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onUpdate: PropTypes.func,
};

RadioGroup.defaultProps = {
  onUpdate: () => {},
};

export default RadioGroup;
