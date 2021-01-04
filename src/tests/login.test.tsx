import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Existe um botão de login com o texto Entrar', () => {
  render(<App />);
  const loginButton = screen.getByText(/entrar/i);
  expect(loginButton).toBeInTheDocument();
});

test('Botão desativado com login e senha vazios', () => {
  render(<App />);
  const loginButton = screen.getByText(/entrar/i);
  fireEvent.click(loginButton);
  expect(loginButton).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveAttribute('disabled');
});

test('Login com Usuário: user e Senha: 123', async () => {
  const APP = render(<App />);
  const userInput = APP.getByPlaceholderText('Usuário');
  const passwordInput = APP.getByPlaceholderText('Senha');
  const loginButton = APP.getByRole('button');
  fireEvent.change(userInput, { target: { value: 'user' } });
  expect(userInput.value).toBe('user');
  expect(userInput.value).not.toBe('usera');
  fireEvent.change(passwordInput, { target: { value: '123' } });
  expect(passwordInput.value).toBe('123');
  expect(passwordInput.value).not.toBe('1234');
  fireEvent.click(loginButton);
  expect(userInput).not.toBeInTheDocument()
  expect(passwordInput).not.toBeInTheDocument()
  expect(APP.getByPlaceholderText('Pesquisar')).toBeInTheDocument();
});
