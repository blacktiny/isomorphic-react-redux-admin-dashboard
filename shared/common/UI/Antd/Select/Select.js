import { Select } from 'antd';
import { AntSelect } from './Select.style';
import WithDirection from '../../../hocs/withDirection';

const WDSelect = AntSelect(Select);
const isoSelect = WithDirection(WDSelect);
const SelectOption = Select.Option;

export default isoSelect;
export { SelectOption };
