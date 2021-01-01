import styled from 'styled-components';

export const Button = styled.button`
  background-color: orange;
  border-radius: 10px;
  border: 2px solid black;
  color: white;
  flex-grow: 1;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all 300ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 2px 2px 2px black;
  }
  &:active {
    cursor: progress;
    transform: scale(0.98);
    box-shadow: 0px 0px 0px black;
  }
`;
