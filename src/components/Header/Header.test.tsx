import { mockCart, render } from '@test-support';
import { Header } from './Header';

describe('Header', () => {
  const subject = () => render(<Header />);

  it('displays shop name', () => {
    const { getByText } = subject();
    expect(getByText("Wonka's")).toBeTruthy();
  });

  it('displays cart', () => {
    const { getByLabelText } = subject();
    expect(getByLabelText('Cart')).toBeInTheDocument();
  });

  it('renders the correct cart count', () => {
    mockCart();
    const { getByTestId } = subject();
    expect(getByTestId('cart count')).toHaveTextContent('6');
  });
});
