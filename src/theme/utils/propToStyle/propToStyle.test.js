import propToStyle from './index';

describe('propToStyle()', () => {
  test('...', () => {
    const propToStyleResult = propToStyle('textAlign');
    const componentProps = { textAlign: 'center' };
    const styleResult = propToStyleResult(componentProps);
    expect(styleResult).toEqual({ textAlign: 'center' });
  });
});
