import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HomePage } from './pages/Home.page';
import { Header } from '@/components/Header/Header';
import { CartPage } from './pages/Cart.page';
import { Navbar } from './components/Navbar/Navbar';

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{ width: 'fill', breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar p="md" hiddenFrom="sm">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main p="md">
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
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
