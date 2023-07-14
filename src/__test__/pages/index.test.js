const { default: PagesHome } = require('@/pages/index');
const { render } = require('@testing-library/react');

describe('Render test', () => {
  it('should successfully render page', () => {
    render(<PagesHome />);
  });
});
