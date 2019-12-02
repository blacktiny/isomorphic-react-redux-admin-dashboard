import { Button } from 'antd';
import { Buttons, ButtonsGroup } from './styles/button.style';
import WithDirection from '@iso/lib/helpers/rtl';
const AntButton = Buttons(Button);
const isoButton = WithDirection(AntButton);
const AntButtonGroup = ButtonsGroup(Button.Group);
const ButtonGroup = WithDirection(AntButtonGroup);

export default isoButton;
export { ButtonGroup };
