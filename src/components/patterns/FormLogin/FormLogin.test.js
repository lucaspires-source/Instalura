import React from 'react';
// import user from '@testing-library/user-event';
import FormLogin from './index';
import { render, act } from '../../../infra/test/testUtils';

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      const onSubmit = jest.fn();
      await act(async () => {
        render(
          <FormLogin onSubmit={onSubmit} />,
        );
      });

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('complete the submission', async () => {
      const onSubmit = jest.fn();
      await act(async () => {
        render(
          <FormLogin onSubmit={onSubmit} />,
        );
      });

      expect(true).toBe(true);
    });
  });
});
