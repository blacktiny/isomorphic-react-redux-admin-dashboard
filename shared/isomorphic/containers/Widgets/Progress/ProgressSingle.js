import React from 'react';
import Progress from '@iso/components/uielements/progress';
import { SingleProgressWidgetBar } from './ProgressWidget.styles';

export default function SingleProgressWidget({
  label,
  percent,
  barHeight,
  status,
  info,
  fontColor,
}) {
  return (
    <SingleProgressWidgetBar className="isoSingleProgressBar">
      <h3 style={{ color: fontColor }}>{label}</h3>
      <Progress
        percent={percent}
        strokeWidth={barHeight}
        status={status}
        showInfo={info}
      />
    </SingleProgressWidgetBar>
  );
}
