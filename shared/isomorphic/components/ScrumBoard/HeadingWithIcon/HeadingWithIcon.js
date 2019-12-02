import styled from 'styled-components';
import React from 'react';

const HeadingSecondary = styled.h2`
  margin: 10px 0;
  font-size: ${props => (props.size ? props.size : '16px')};
  color: ${props => (props.color ? props.color : '#788195')};
  font-family: 'Roboto';
  font-weight: 500;
`;

const IconSvg = styled.img`
  width: 16px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
  /* background-color: #a8aabd; */
`;

export default function HeadingWithIcon({
  heading,
  iconSrc,
  width,
  height,
  color,
}) {
  return (
    <HeadingSecondary color={color}>
      {iconSrc && <IconSvg src={iconSrc} width={width} height={height} />}
      {heading}
    </HeadingSecondary>
  );
}
