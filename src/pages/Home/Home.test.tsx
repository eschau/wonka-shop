import { waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { render, mockGetProducts } from '../../../test-support';
import { HomePage } from './Home.page';

describe('Products', () => {
  const subject = async () => render(<HomePage />);
  const setupAndRender = (isEmpty = false) => {
    mockGetProducts(isEmpty);
    return subject();
  };

  it('renders the product list details', async () => {
    const { getByText } = await setupAndRender();
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
    const { getByText } = await setupAndRender(true);
    await waitFor(() => {
      expect(getByText('No products :\\')).toBeInTheDocument();
    });
  });
});
