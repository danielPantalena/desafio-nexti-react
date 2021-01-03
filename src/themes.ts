import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: 'white',
  fontColor: 'black',
};

export const darkTheme = {
  body: 'black',
  fontColor: 'white',
};

interface ITheme {
  theme: { body: string; fontColor: string };
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props: ITheme) => props.theme.body};
    color: ${(props: ITheme) => props.theme.fontColor};
    transition: all 400ms;
  }
`;
