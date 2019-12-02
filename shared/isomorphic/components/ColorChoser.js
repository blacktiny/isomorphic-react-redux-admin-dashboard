import React from 'react';
import Button from './uielements/button';
import Popover from './uielements/popover';
import ColorChooserDropdown from './ColorChooser.style';

export default function({ colors, seectedColor, changeColor }) {
  const [visible, setVisibility] = React.useState(false);

  function hide() {
    setVisibility(false);
  }
  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }
  const content = () => (
    <ColorChooserDropdown className="isoColorOptions">
      {colors.map((color, index) => {
        const onClick = () => {
          hide();
          changeColor(index);
        };
        const style = {
          background: color,
        };
        return <Button key={index} onClick={onClick} style={style} />;
      })}
    </ColorChooserDropdown>
  );
  return (
    <Popover
      content={content()}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Button
        style={{ backgroundColor: colors[seectedColor] }}
        className="isoColorChooser"
      />
    </Popover>
  );
}
