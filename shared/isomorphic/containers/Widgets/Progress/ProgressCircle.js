import React from 'react';
import Progress from '@iso/components/uielements/progress';
import { CircleProgressWidgetBar } from './ProgressWidget.styles';

export default function CircleProgressWidget({
  label,
  percent,
  barHeight,
  status,
  info,
  fontColor,
}) {
  return (
    <CircleProgressWidgetBar className="isoCircleProgress">
      <Progress
        type="circle"
        percent={percent}
        strokeWidth={barHeight}
        status={status}
        showInfo={info}
      />
      <h3 style={{ color: fontColor }}>{label}</h3>
    </CircleProgressWidgetBar>
  );
}
