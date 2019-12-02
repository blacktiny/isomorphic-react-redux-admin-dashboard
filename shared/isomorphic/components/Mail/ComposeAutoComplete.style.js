import styled from 'styled-components';
import { palette } from 'styled-theme';
import {
  transition,
  borderRadius,
  boxShadow,
} from '@iso/lib/helpers/style_utils';

const ComposeAutoCompleteStyleWrapper = styled.div`
  .ReactTags__ {
    &tags {
      min-height: 36px;
      width: 100%;
      position: relative;
      margin-bottom: 10px;
      padding: 0 15px;
      border: 1px solid ${palette('border', 0)};
      ${borderRadius('3px')};
    }

    &selected {
      width: 100%;
      padding: 4px 0;
    }

    &tag {
      font-size: 13px;
      font-weight: 400;
      line-height: 1;
      color: ${palette('text', 0)};
      display: inline-flex;
      align-items: center;
      padding: 0 7px 0 10px;
      margin: 2px 5px 2px 0;
      margin-right: ${props => (props['data-rtl'] === 'rtl' ? '0' : '5px')};
      margin-left: ${props => (props['data-rtl'] === 'rtl' ? '5px' : '0')};
      text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
      height: 22px;
      word-break: break-word;
      background-color: ${palette('grayscale', 10)};
      border: 1px solid ${palette('border', 3)};
      ${borderRadius('3px')};
    }

    &remove {
      background: none;
      background-color: transparent;
      border: 0;
      outline: 0;
      color: ${palette('grayscale', 0)};
      padding: 0;
      margin-left: 8px;
      margin-right: ${props => (props['data-rtl'] === 'rtl' ? '8px' : '0')};
      margin-left: ${props => (props['data-rtl'] === 'rtl' ? '0' : '8px')};
      line-height: 1;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      ${transition()};

      &:hover {
        color: ${palette('text', 3)};
      }
    }

    &tagInput {
      width: 100%;
      display: inline;

      &Field {
        font-size: 14px;
        font-weight: 400;
        color: ${palette('text', 0)};
        line-height: inherit;
        text-align: ${props =>
          props['data-rtl'] === 'rtl' ? 'right' : 'left'};
        height: 22px;
        min-width: 240px;
        padding: 0;
        border: 0;
        outline: 0 !important;
        overflow: hidden;
        background-color: transparent;

        &::-webkit-input-placeholder {
          text-align: ${props =>
            props['data-rtl'] === 'rtl' ? 'right' : 'left'};
          color: ${palette('grayscale', 0)};
        }

        &:-moz-placeholder {
          text-align: ${props =>
            props['data-rtl'] === 'rtl' ? 'right' : 'left'};
          color: ${palette('grayscale', 0)};
        }

        &::-moz-placeholder {
          text-align: ${props =>
            props['data-rtl'] === 'rtl' ? 'right' : 'left'};
          color: ${palette('grayscale', 0)};
        }
        &:-ms-input-placeholder {
          text-align: ${props =>
            props['data-rtl'] === 'rtl' ? 'right' : 'left'};
          color: ${palette('grayscale', 0)};
        }
      }
    }

    &suggestions {
      z-index: 999;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      margin: 3px 0 0;
      overflow: hidden;
      word-break: break-word;
      border: 1px solid rgba(0, 0, 0, 0.2);
      text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
      position: absolute;
      right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'auto')};
      left: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '0')};
      top: 100%;
      ${borderRadius()};
      ${boxShadow('0 2px 4px rgba(0,0,0,0.2)')};

      li {
        font-size: 14px;
        font-weight: 400;
        color: ${palette('text', 0)};
        border-bottom: ${palette('border', 0)};
        line-height: 1.5;
        width: 100%;
        padding: 10px 15px;
        margin: 0;
        cursor: pointer;
        ${transition()};

        &:hover {
          background-color: ${palette('grayscale', 3)};
        }

        &:last-of-type {
          border-bottom: 0;
        }
      }
    }

    &activeSuggestion {
      background-color: ${palette('grayscale', 3)};
    }
  }
`;

export default ComposeAutoCompleteStyleWrapper;
