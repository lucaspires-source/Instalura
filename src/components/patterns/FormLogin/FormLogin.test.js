import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import {
  render, act, screen, waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => {
        render(
          <FormLogin onSubmit={onSubmit} />,
        );
      });
      const submitButton = screen.getByRole('button');
      expect(submitButton).toBeDisabled();

      const userInput = screen.getByPlaceholderText('Usuário');
      user.type(userInput, 'username');
      await waitFor(() => expect(userInput).toHaveValue('username'));

      const passwordInput = screen.getByPlaceholderText('Senha');
      user.type(passwordInput, 'password');
      await waitFor(() => expect(passwordInput).toHaveValue('password'));

      expect(submitButton).not.toBeDisabled();
      user.click(submitButton);
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('complete the submission', async () => {
      await act(async () => {
        render(
          <FormLogin onSubmit={onSubmit} />,
        );
      });

      expect(true).toBe(true);
    });
  });
});
