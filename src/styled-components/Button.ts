import styled from 'styled-components';

export const Button = styled.button`
  background-color: rgb(233, 78, 15);
  border-radius: 5px;
  border: none;
  color: white;
  flex-grow: 1;
  font-size: 12px;
  font-weight: bold;
  margin: 10px;
  min-width: 80px;
  min-height: 30px;
  padding: 10px 18px;
  text-transform: uppercase;
  transition: all 400ms;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    transform: scale(1.015);
  }
  &:active {
    cursor: progress;
    box-shadow: none;
    transform: scale(0.98);
  }
  &:disabled {
    cursor: auto;
    box-shadow: none;
    opacity: 0.4;
    transform: scale(1);
  }
`;
