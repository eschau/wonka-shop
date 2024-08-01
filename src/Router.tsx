import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HomePage } from './pages/Home/Home.page';
import { Header } from '@/components/Header/Header';
import { OrderConfirmationPage } from './pages/OrderConfirmation/OrderConfirmation.page';

const Layout = () => {
  const [opened] = useDisclosure();

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{ width: 0, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="xl"
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/order-confirmation/:transactionId/:totalAmount',
        element: <OrderConfirmationPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
