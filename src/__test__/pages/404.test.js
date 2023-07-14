const { default: Pages404 } = require('@/pages/404');
const { render } = require('@testing-library/react');

describe('Render test', () => {
  it('should successfully render page', () => {
    render(<Pages404 />);
  });
});
