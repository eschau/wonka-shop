import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '../src/theme';
import { CartProvider } from '@/context/useCart';

const queryClient = new QueryClient();

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </CartProvider>
        </QueryClientProvider>
      </MantineProvider>
    ),
  });
}
