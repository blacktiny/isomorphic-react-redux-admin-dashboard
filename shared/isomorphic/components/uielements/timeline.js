import { Timeline } from 'antd';
import AntTimeline from './styles/timeline.style';
import WithDirection from '@iso/lib/helpers/rtl';
const Timelines = AntTimeline(Timeline);
const WDTimelineItem = AntTimeline(Timeline.Item);
const TimelineItem = WithDirection(WDTimelineItem);

export default WithDirection(Timelines);
export { TimelineItem };
