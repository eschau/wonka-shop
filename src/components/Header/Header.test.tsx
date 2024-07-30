import { render, screen } from '@test-utils';
import { Header } from './Header';

describe('Welcome component', () => {
  const subject = () => {
    return render(<Header />);
  };

  it('displays shop name', () => {
    const { getByText } = subject();
    expect(getByText("Wonka's")).toBeTruthy();
  });

  it('displays header links', () => {
    const { getByText, getByLabelText } = subject();
    expect(getByText('Home')).toHaveAttribute('href', '/');
    expect(getByLabelText('Shopping Cart')).toHaveAttribute('href', '/cart');
  });
});
