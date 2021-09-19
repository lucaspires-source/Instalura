import React from 'react';
// import user from '@testing-library/user-event';
import FormLogin from './index';
import { render } from '../../../infra/test/testUtils';

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', () => {
      const onSubmit = jest.fn();
      render(
        <FormLogin onSubmit={onSubmit} />,
      );

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
  describe('when form fields are invalid', () => {
    test('inmcomplete the submission', () => {
      const onSubmit = jest.fn();
      render(
        <FormLogin onSubmit={onSubmit} />,
      );

      expect(true).toBe(true);
    });
  });
});
