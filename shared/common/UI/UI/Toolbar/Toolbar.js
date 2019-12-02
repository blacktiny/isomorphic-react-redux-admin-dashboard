import React from 'react';
import { ToolbarWrapper, LeftSide, RightSide } from './Toolbar.style';

export default function Toolbar({ left, right, className, children }) {
  // Add all classs to an array
  const addAllClasses = ['toolbar'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ToolbarWrapper className={addAllClasses.join(' ')}>
      {left && <LeftSide className="toolbar_left__side">{left}</LeftSide>}
      {right && <RightSide className="toolbar_right__side">{right}</RightSide>}
      {children && children}
    </ToolbarWrapper>
  );
}
