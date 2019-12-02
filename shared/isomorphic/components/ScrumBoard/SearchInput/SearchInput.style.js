import styled from 'styled-components';

export const SearchWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 30px;
  font-family: inherit;
  font-size: 100%;
  border: none;
  background: none;
  -webkit-appearance: none;
  vertical-align: middle;
  font-size: 16px;
  border-bottom: 1px solid transparent;
  transition: border 0.2s ease;
  &:focus {
    border-bottom: 1px solid #e8e8e8;
    outline: none;
  }
  &::placeholder {
    color: #788195;
  }
`;

export const SearchIcon = styled.img`
  width: 20px;
  margin-right: 1rem;
`;

export const ClearButton = styled.button`
  margin-left: -1rem;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: auto;
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const ClearIcon = styled.img`
  width: 10px;
  height: 15px;
`;
