import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Botão configurações exibe menu', () => {
  const APP = render(<App />);
  const settingsButton = APP.getByText('Configurações');
  expect(APP.queryByText('Claro')).not.toBeInTheDocument();
  fireEvent.click(settingsButton);
  expect(APP.queryByText('Claro')).toBeInTheDocument();
});

test('Botão de tema troca o toma ao clicar', () => {
  const APP = render(<App />);
  fireEvent.click(APP.getByText('Configurações'));
  expect(APP.queryByText('Claro')).toBeInTheDocument();
  expect(APP.queryByText('Escuro')).not.toBeInTheDocument();
  fireEvent.click(APP.getByText('Claro'));
  expect(APP.queryByText('Claro')).not.toBeInTheDocument();
  expect(APP.queryByText('Escuro')).toBeInTheDocument();
  fireEvent.click(APP.getByText('Escuro'));
  expect(APP.queryByText('Claro')).toBeInTheDocument();
  expect(APP.queryByText('Escuro')).not.toBeInTheDocument();
});

test('Opção de logout aparece só quando logado', () => {
  const { getByText, queryByText, getByPlaceholderText, queryByPlaceholderText } = render(<App />);
  fireEvent.click(getByText('Configurações'));
  expect(queryByText('Claro')).toBeInTheDocument();
  expect(queryByText('Sair')).not.toBeInTheDocument();
  fireEvent.change(getByPlaceholderText('Usuário'), { target: { value: 'user' } });
  fireEvent.change(getByPlaceholderText('Senha'), { target: { value: '123' } });
  fireEvent.click(getByText('Entrar'));
  fireEvent.click(getByText('Configurações'));
  expect(queryByText('Claro')).toBeInTheDocument();
  expect(queryByText('Sair')).toBeInTheDocument();
  expect(queryByPlaceholderText('Usuário')).not.toBeInTheDocument();
  fireEvent.click(getByText('Sair'));
  expect(queryByPlaceholderText('Usuário')).toBeInTheDocument();
  fireEvent.click(getByText('Configurações'));
  fireEvent.click(getByText('Configurações'));
  expect(queryByText('Claro')).toBeInTheDocument();
  expect(queryByText('Sair')).not.toBeInTheDocument();
});
