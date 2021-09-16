import redirects from './redirects';

console.log(redirects);
// Test Driven Development
describe('config/redirects', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
