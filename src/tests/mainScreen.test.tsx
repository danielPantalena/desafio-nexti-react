import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Main } from '../screens';
import { Context } from '../context';
import { mockContextValue, mockUser } from './mockValues';

const renderWithContext = (ui: JSX.Element) => {
  return render(<Context.Provider value={mockContextValue}>{ui}</Context.Provider>);
};

test('Aparecem as iniciais do usuário logado', () => {
  const { getByText, queryByText } = render(<Main userData={mockUser} />);
  const userInitials = mockUser.firstName.charAt(0) + mockUser.lastName.charAt(0);
  expect(getByText(userInitials)).toBeInTheDocument();
  expect(queryByText('XX')).not.toBeInTheDocument();
});

test('Aparece o menu com apenas as tarefas certas', () => {
  const { getByText, queryByText } = renderWithContext(<Main userData={mockUser} />);
  expect(getByText('Tarefa 1')).toBeInTheDocument();
  expect(getByText('Tarefa 2')).toBeInTheDocument();
  expect(getByText('Tarefa 3')).toBeInTheDocument();
  expect(queryByText('Tarefa 4')).toBeFalsy();
  expect(queryByText('Tarefa 0')).toBeFalsy();
});

test('Ao clicar na Tarefa, aparecem os subMenus e ao clicar novamente desaparecem', () => {
  const { getByText, queryByText } = renderWithContext(<Main userData={mockUser} />);
  expect(queryByText(/urgente/i)).toBeFalsy();
  expect(queryByText(/data fixa/i)).toBeFalsy();
  fireEvent.click(getByText('Tarefa 1'));
  expect(getByText(/urgente/i)).toBeTruthy();
  expect(getByText(/data fixa/i)).toBeTruthy();
  expect(queryByText(/lixo/i)).toBeFalsy();
  fireEvent.click(getByText('Tarefa 1'));
  expect(queryByText(/urgente/i)).toBeFalsy();
  expect(queryByText(/data fixa/i)).toBeFalsy();
});
