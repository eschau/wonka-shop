import { render } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { formatPrice } from '@utils';
import { MantineProvider } from '@mantine/core';
import { OrderConfirmationPage } from './OrderConfirmation.page';
import { theme } from '@/theme';

describe('OrderConfirmation', () => {
  const transactionId = '12345';
  const totalAmount = '100';
  const renderWithRouter = (initialEntries: string[]) =>
    render(
      <MantineProvider theme={theme}>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes>
            <Route
              path="/order-confirmation/:transactionId/:totalAmount"
              element={<OrderConfirmationPage />}
            />
          </Routes>
        </MemoryRouter>
      </MantineProvider>
    );

  it('renders transaction ID and total amount', () => {
    const { getByText } = renderWithRouter([`/order-confirmation/${transactionId}/${totalAmount}`]);

    expect(getByText(`Thank you for your order #${transactionId}`)).toBeInTheDocument();
    expect(
      getByText(`Your total was: ${formatPrice(parseInt(totalAmount, 10))}`)
    ).toBeInTheDocument();
  });

  it('contains a button that links to the home page', () => {
    const { getByRole } = renderWithRouter(['/order-confirmation/12345/100']);

    const button = getByRole('button', { name: /Back to Home/i });
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/');
  });
});
