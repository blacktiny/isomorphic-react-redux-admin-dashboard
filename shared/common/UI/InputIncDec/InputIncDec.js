import React from 'react';
import Input from '../Antd/Input/Input';
import InputIncDecWrapper from './InputIncDec.style';

const InputIncDec = ({ className, increment, decrement, ...restProps }) => {
  // Add all classs to an array
  const addAllClasses = ['quantity'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <InputIncDecWrapper className={addAllClasses.join(' ')}>
      <button className="btn decBtn" type="button" onClick={decrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <g
            id="Group_1014"
            data-name="Group 1014"
            transform="translate(-505 -201)"
          >
            <path
              id="Path_1942"
              data-name="Path 1942"
              d="M57,49.212a7.785,7.785,0,1,1-5.508,2.28A7.737,7.737,0,0,1,57,49.212M57,48a9,9,0,1,0,9,9A9,9,0,0,0,57,48Z"
              transform="translate(457 153)"
            />
            <path
              id="_ionicons_svg_ios-remove_3_"
              data-name="_ionicons_svg_ios-remove (3)"
              d="M136.144,240h-8.071a.574.574,0,0,0,0,1.148h8.071a.574.574,0,1,0,0-1.148Z"
              transform="translate(381.897 -30.695)"
            />
          </g>
        </svg>
      </button>
      <Input className="qnt-input" type="number" {...restProps} />
      <button className="btn incBtn" type="button" onClick={increment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <g
            id="_ionicons_svg_ios-add-circle-outline"
            transform="translate(-48 -48)"
          >
            <path
              id="Path_1940"
              data-name="Path 1940"
              d="M158.024,153.416H154.8v-3.224a.692.692,0,1,0-1.385,0v3.224h-3.224a.663.663,0,0,0-.692.692.67.67,0,0,0,.692.692h3.224v3.224a.671.671,0,0,0,.692.692.689.689,0,0,0,.692-.692V154.8h3.224a.692.692,0,0,0,0-1.385Z"
              transform="translate(-97.108 -97.108)"
            />
            <path
              id="Path_1941"
              data-name="Path 1941"
              d="M57,49.212a7.785,7.785,0,1,1-5.508,2.28A7.737,7.737,0,0,1,57,49.212M57,48a9,9,0,1,0,9,9A9,9,0,0,0,57,48Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
      </button>
    </InputIncDecWrapper>
  );
};

export default InputIncDec;
