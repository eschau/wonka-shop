import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { Header } from '@/components/Header/Header';
import { CartPage } from './pages/Cart.page';
import { AppShell } from '@mantine/core';

const Layout = () => (
  <AppShell header={{ height: 50 }} padding={'md'}>
    <AppShell.Header>
      <Header />
    </AppShell.Header>
    <AppShell.Main>
      <Outlet />
    </AppShell.Main>
  </AppShell>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
