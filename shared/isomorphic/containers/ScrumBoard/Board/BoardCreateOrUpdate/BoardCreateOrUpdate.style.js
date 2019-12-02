import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 25px;
  color: #2d3446;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 51px;
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 35px 0 81px;
  .field-container {
    .ant-form-item {
      &.switch-form-item {
        margin-left: -6px;
        .ant-form-item-label {
          margin: 0 0 0 7px;
        }
      }
      .ant-form-item-label {
        margin-bottom: 3px;
      }
      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          .ant-form-item-children {
            input.ant-input,
            .ant-select-selection--single {
              height: 50px;
              padding-left: 15px;
              padding-right: 15px;
              font-size: 14px;
              font-weight: 500;
              &::placeholder {
                color: #8c90b5;
              }
            }
            .ant-select-selection__rendered {
              line-height: 48px;
              margin: 0;
              .ant-select-selection__placeholder {
                color: #8c90b5;
                font-weight: 500;
                font-size: 14px;
              }
              .ant-select-selection-selected-value {
                .ant-badge-status-dot {
                  display: none;
                }
                .ant-badge-status-text {
                  margin-left: 0;
                }
              }
            }
          }
          .ant-form-explain {
            margin-top: 7px;
          }
        }
      }
    }
  }
  button[type='submit'],
  button[type='submit'].ant-btn-primary {
    border-radius: 6px;
    height: 54px;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 15px;
  @media (min-width: 768px) {
    padding: 0;
  }
`;
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 24px;
`;
