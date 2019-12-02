import { Timeline } from 'antd';
import AntTimeline from './Timeline.style';
import WithDirection from '../../../hocs/withDirection';

const Timelines = AntTimeline(Timeline);
const WDTimelineItem = AntTimeline(Timeline.Item);
const TimelineItem = WithDirection(WDTimelineItem);

export default WithDirection(Timelines);
export { TimelineItem };
