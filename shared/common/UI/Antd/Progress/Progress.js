import { Progress } from 'antd';
import AntProgress from './Progress.style';
import WithDirection from '../../../hocs/withDirection';

const WDProgress = AntProgress(Progress);
const isoProgress = WithDirection(WDProgress);

export default isoProgress;
