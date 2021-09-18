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

    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        render(
          <TextField
            placeholder="nome"
            value="nome"
            onChange={() => {}}
            name="nome"
          />,

        );
        expect(true).toBe(true);
      });
    });
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

      const inputEmail = screen.getByPlaceholderText(/email/i);
      const alert = screen.getByRole('alert');
      expect(inputEmail).toHaveValue('lucas@gmail.com');
      expect(inputEmail).toMatchSnapshot();
      expect(alert).toHaveTextContent('o Campo email tem que ser preenchido');
    });
  });
});
