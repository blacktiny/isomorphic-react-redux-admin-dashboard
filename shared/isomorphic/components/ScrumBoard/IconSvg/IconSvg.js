import styled from 'styled-components';

export const IconSvg = styled.img`
  width: ${props => (props.width ? props.width : '30')}px;
  height: ${props => (props.height ? props.height : '30')}px;
  padding: ${props => (props.padding ? props.padding : '5')}px;
  background-color: ${props => (props.bg ? props.bg : 'transparent')};
  cursor: pointer;
  border: ${props => (props.border ? props.border : '1px dashed #a8aabd')};
  border-radius: ${props => (props.radius ? props.radius : '5px')};
  margin-right: ${props => (props.mr ? props.mr : '10')}px;
  margin-left: ${props => (props.ml ? props.ml : '10')}px;
  vertical-align: middle;

  @media only screen and (max-width: 767px) {
    margin-right: 0;
    margin-left: 0;
  }
`;
