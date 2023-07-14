const { default: PagesDashboardHome } = require('@/pages/dashboard');
const { render } = require('@testing-library/react');

describe('Render test', () => {
  it('should successfully render page', () => {
    render(<PagesDashboardHome />);
  });
});
