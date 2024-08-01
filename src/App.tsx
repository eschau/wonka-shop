import '@mantine/core/styles.css';
import './App.module.css';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router';
import { theme } from './theme';
import { CartProvider } from '@/context/useCart/context';

const queryClient = new QueryClient();

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Router />
        </CartProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}
