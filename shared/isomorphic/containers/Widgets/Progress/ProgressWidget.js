import React from 'react';
import Progress from '@iso/components/uielements/progress';
import { ProgressWidgetWrapper } from './ProgressWidget.styles';

export default function ProgressWidget({
  label,
  icon,
  iconcolor,
  details,
  percent,
  barHeight,
  status,
}) {
  const iconStyle = {
    color: iconcolor,
  };

  return (
    <ProgressWidgetWrapper className="isoProgressWidget">
      <div className="isoProgressWidgetTopbar">
        <h3>{label}</h3>
        <i className={icon} style={iconStyle} />
      </div>

      <div className="isoProgressWidgetBody">
        <p className="isoDescription">{details}</p>
        <Progress
          percent={percent}
          strokeWidth={barHeight}
          status={status}
          showInfo={false}
        />
      </div>
    </ProgressWidgetWrapper>
  );
}
