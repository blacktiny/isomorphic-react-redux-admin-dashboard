import { InputNumber } from 'antd';
import AntInputNumber from './InputNumber.style';
import WithDirection from '../../../hocs/withDirection';

const WDInputnumber = AntInputNumber(InputNumber);
const Inputnumber = WithDirection(WDInputnumber);

export default Inputnumber;
