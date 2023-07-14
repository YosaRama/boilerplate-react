const { default: PagesAbout } = require('@/pages/about');
const { render } = require('@testing-library/react');

describe('Render test', () => {
  it('should successfully render page', () => {
    render(<PagesAbout />);
  });
});
