import { fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { render, mockGetProducts, mockCart } from '@test-support';
import { HomePage } from './Home.page';
import { CartContextValue } from '@/context/useCart';

vi.mock('@/clients/firebase/createOrder', () => ({
  createOrder: vi.fn().mockResolvedValue('mockTransactionId'),
}));

describe('Home', () => {
  const subject = async () => render(<HomePage />);
  const setupAndRender = ({
    isEmpty = false,
    useCart = {},
  }: {
    isEmpty?: boolean;
    useCart?: Partial<CartContextValue>;
  } = {}) => {
    mockGetProducts(isEmpty);
    mockCart(useCart);
    return subject();
  };

  it('renders the product list details', async () => {
    const { getByText } = await setupAndRender({ useCart: { cart: [] } });
    await waitFor(() => {
      expect(getByText('Giraffe Milk Macaron')).toBeInTheDocument();
      expect(getByText('Will make you feel the tallest in the room')).toBeInTheDocument();
      expect(getByText('Unavailable')).toBeInTheDocument();
      expect(getByText('Wonka Bar')).toBeInTheDocument();
      expect(getByText('Our original dark chocolate bar')).toBeInTheDocument();
      expect(getByText('Add to Cart')).toBeInTheDocument();
    });
  });

  it('formats the price in USD standard format', async () => {
    const { getByText } = await setupAndRender();
    await waitFor(() => {
      expect(getByText('$8.50')).toBeInTheDocument();
      expect(getByText('$5.50')).toBeInTheDocument();
    });
  });

  it('displays empty state text when no products', async () => {
    const { getByText } = await setupAndRender({ isEmpty: true });
    await waitFor(() => {
      expect(getByText('No products :\\')).toBeInTheDocument();
    });
  });

  it('displays cart drawer with cart items', async () => {
    const { getByText } = await setupAndRender();
    await waitFor(() => {
      expect(getByText('Review your order')).toBeInTheDocument();
      expect(getByText('Wonka Bar')).toBeInTheDocument();
      expect(getByText('Giraffe Milk Macaron')).toBeInTheDocument();
    });
  });

  it('renders empty cart state when no items in cart', async () => {
    const { getByText } = await setupAndRender({ useCart: { cart: [] } });
    await waitFor(() => {
      expect(getByText('No items in cart')).toBeInTheDocument();
    });
  });

  it('navigates to the order confirmation page when you click Checkout', async () => {
    const total = 200;
    const { getByText } = await setupAndRender();
    await waitFor(() => {
      const checkoutButton = getByText('Check out');
      fireEvent.click(checkoutButton);
    });

    await waitFor(() => {
      const checkoutButton = getByText('Check out');
      fireEvent.click(checkoutButton);
    });

    await waitFor(() => {
      expect(window.location.href).toContain(`/order-confirmation/mockTransactionId/${total}`);
    });
  });
});
