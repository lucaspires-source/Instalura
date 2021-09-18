import React from 'react';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="nome"
        value="nome"
        onChange={() => {}}
        name="nome"
      />,

    )
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {

  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="email"
          value="lucas@gmail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="o Campo email tem que ser preenchido"
        />,

      );
      const emailField = screen.getByPlaceholderText(/email/i);
      const alert = screen.getByRole('alert');
      expect(emailField).toHaveValue('lucas@gmail.com');
      expect(alert).toHaveTextContent('o Campo email tem que ser preenchido');
    });
  });
});
